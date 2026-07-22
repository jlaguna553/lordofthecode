"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { LpcManifest } from "@/lib/lpc/types";
import { buildPresetSheet, type PresetSheet } from "@/lib/game/sheet";
import { CHAPTER_1, CHAPTERS, getChapter } from "@/data/chapters";
import { isMuted, playSfx, setMuted } from "@/lib/game/audio";
import {
  codeFor,
  completedOf,
  emptyProgress,
  loadProgress,
  saveProgress,
  withCode,
  withLastChapter,
  withStats,
  withNodeCompleted,
  type Progress,
} from "@/lib/game/progress";

// Phaser y Monaco sólo en cliente.
const GameCanvas = dynamic(() => import("@/components/game/GameCanvas"), {
  ssr: false,
});
const ChallengeModal = dynamic(
  () => import("@/components/game/ChallengeModal"),
  { ssr: false },
);
const ChapterSelect = dynamic(
  () => import("@/components/game/ChapterSelect"),
  { ssr: false },
);
const ChapterIntro = dynamic(() => import("@/components/game/ChapterIntro"), {
  ssr: false,
});
const ScrollModal = dynamic(() => import("@/components/game/ScrollModal"), {
  ssr: false,
});
const QuizModal = dynamic(() => import("@/components/game/QuizModal"), {
  ssr: false,
});
const StatsPanel = dynamic(() => import("@/components/game/StatsPanel"), {
  ssr: false,
});

export default function GamePage() {
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [showChapters, setShowChapters] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [mute, setMute] = useState(true); // se sincroniza tras hidratar

  const [frodo, setFrodo] = useState<PresetSheet | null>(null);
  const [nodeSheets, setNodeSheets] = useState<Record<string, PresetSheet>>({});
  const [error, setError] = useState<string | null>(null);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const chapter = getChapter(currentChapter) ?? CHAPTER_1;
  // Ref para que el guardado de código no dependa del capítulo en su clausura.
  const currentChapterRef = useRef(currentChapter);
  currentChapterRef.current = currentChapter;

  // Restaurar progreso guardado (sólo en cliente, tras hidratar).
  useEffect(() => {
    setMute(isMuted());
    const saved = loadProgress();
    setProgress(saved);
    if (getChapter(saved.lastChapter)) setCurrentChapter(saved.lastChapter);
  }, []);

  // Componer los sprites del capítulo actual.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch("/lpc/manifest.json");
        if (!r.ok) throw new Error("manifest");
        const m: LpcManifest = await r.json();

        // Sprites necesarios: PNJ de nodos + ambientales + la Comunidad.
        const ids = [
          ...new Set([
            ...chapter.nodes
              .map((n) => n.spriteId)
              .filter((id): id is string => Boolean(id)),
            ...(chapter.scenery?.npcs ?? []).map((n) => n.spriteId),
            ...(chapter.companions ?? []),
          ]),
        ];
        const sheets: Record<string, PresetSheet> = {};
        for (const id of ids) {
          try {
            sheets[id] = await buildPresetSheet(m, id);
          } catch {
            /* preset inexistente: el nodo se queda con su marcador */
          }
        }
        const f = await buildPresetSheet(m, "frodo");
        if (cancelled) return;
        setNodeSheets(sheets);
        setFrodo(f);
      } catch {
        if (!cancelled)
          setError(
            "No se encontró public/lpc/manifest.json. Ejecuta: pnpm fetch:lpc",
          );
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chapter]);

  // Cada capítulo se abre con su tarjeta narrativa.
  useEffect(() => {
    setShowIntro(true);
  }, [currentChapter]);

  const completed = useMemo(
    () => completedOf(progress, currentChapter),
    [progress, currentChapter],
  );

  const activeNode = useMemo(
    () => chapter.nodes.find((n) => n.node_id === activeNodeId) ?? null,
    [chapter, activeNodeId],
  );

  function handleSolved(
    nodeId: string,
    stats?: { timeSec: number; attempts: number; hints: number },
  ) {
    setProgress((prev) => {
      let next = withNodeCompleted(prev, currentChapter, nodeId);
      if (stats) next = withStats(next, currentChapter, nodeId, stats);
      saveProgress(next);
      return next;
    });
  }

  const handleCodeChange = useCallback((nodeId: string, code: string) => {
    setProgress((prev) => {
      const next = withCode(prev, currentChapterRef.current, nodeId, code);
      saveProgress(next);
      return next;
    });
  }, []);

  function handleSelectChapter(n: number) {
    setActiveNodeId(null);
    setCurrentChapter(n);
    setShowChapters(false);
    setProgress((prev) => {
      const next = withLastChapter(prev, n);
      saveProgress(next);
      return next;
    });
  }

  function handleReset() {
    const fresh = emptyProgress();
    saveProgress(fresh);
    setProgress(fresh);
    setActiveNodeId(null);
    setCurrentChapter(1);
    setShowChapters(false);
  }

  const total = chapter.nodes.length;
  const done = completed.size;
  // Fanfarria al completar el capítulo (sólo al cruzar el umbral).
  const wasComplete = useRef(false);
  useEffect(() => {
    const full = total > 0 && done === total;
    if (full && !wasComplete.current) playSfx("chapter");
    wasComplete.current = full;
  }, [done, total]);
  const nextChapter = CHAPTERS.find((c) => c.chapter === chapter.chapter + 1);

  return (
    <main className="mx-auto max-w-5xl px-3 py-3 sm:px-4 sm:py-6">
      {/*
        En móvil la cabecera va apretada y en una sola fila de botones: el
        objetivo es que el mapa y el mando quepan sin tener que desplazarse.
      */}
      <header className="mb-2 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 sm:text-xs">
            Capítulo {chapter.chapter} · La Sintaxis Ancestral
          </p>
          <h1 className="truncate bg-gradient-to-r from-amber-200 to-emerald-300 bg-clip-text text-lg font-black text-transparent sm:text-2xl">
            {chapter.title}
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:flex-col sm:items-end">
          <button
            onClick={() => setShowChapters(true)}
            className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 sm:px-3 sm:py-1.5 sm:text-sm"
          >
            📖 Capítulos
          </button>
          <button
            onClick={() => setShowStats(true)}
            className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 sm:px-3 sm:py-1.5 sm:text-sm"
          >
            📊 Estadísticas
          </button>
          <button
            onClick={() => {
              const next = !mute;
              setMuted(next);
              setMute(next);
              if (!next) playSfx("interact"); // confirmación audible
            }}
            className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 sm:px-3 sm:py-1.5 sm:text-sm"
            title={mute ? "Activar sonido" : "Silenciar"}
          >
            {mute ? "🔇" : "🔊"}
            <span className="hidden sm:inline"> Sonido</span>
          </button>
          <p className="ml-auto text-xs text-slate-400 sm:ml-0 sm:text-sm">
            Runas {done}/{total}
          </p>
          <Link
            href="/studio"
            className="hidden text-xs text-indigo-300 underline-offset-2 hover:underline sm:block"
          >
            → Estudio de sprites LPC
          </Link>
        </div>
      </header>

      {/* El lore ya se cuenta en la tarjeta de entrada; en móvil sobra aquí. */}
      <p className="mb-4 hidden max-w-3xl text-sm leading-relaxed text-slate-400 sm:block">
        {chapter.lore} Muévete con <kbd className="text-slate-200">WASD</kbd> o
        las flechas, acércate a un marcador dorado y pulsa{" "}
        <kbd className="rounded bg-amber-500 px-1 font-bold text-slate-900">
          E
        </kbd>{" "}
        para enfrentar el acertijo de POO.
      </p>

      {error ? (
        <div className="rounded-xl bg-slate-900 p-6 text-center ring-1 ring-white/10">
          <p className="mb-2 font-semibold text-rose-300">
            ⚠ Assets no encontrados
          </p>
          <code className="text-sm text-emerald-300">pnpm fetch:lpc</code>
        </div>
      ) : !frodo ? (
        <p className="text-slate-400">Invocando la Comarca…</p>
      ) : (
        <GameCanvas
          chapter={chapter}
          frodoUrl={frodo.url}
          cols={frodo.cols}
          frameSize={frodo.frameSize}
          nodeSheets={nodeSheets}
          completed={completed}
          locked={activeNodeId !== null || showChapters || showIntro || showStats}
          onEnterNode={setActiveNodeId}
        />
      )}

      {total > 0 && done === total && frodo && (
        <div className="mt-4 flex flex-col items-center gap-3 rounded-xl bg-emerald-500/10 p-4 text-center ring-1 ring-emerald-500/30">
          <p className="text-sm text-emerald-200">
            ✦ Capítulo {chapter.chapter} completado — {total}/{total} runas
            descifradas.
          </p>
          {nextChapter ? (
            <button
              onClick={() => handleSelectChapter(nextChapter.chapter)}
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Continuar al Capítulo {nextChapter.chapter}: {nextChapter.title} →
            </button>
          ) : (
            <p className="text-xs text-slate-400">
              Has llegado al final de lo disponible. ¡Más capítulos pronto!
            </p>
          )}
        </div>
      )}

      {activeNode &&
        (activeNode.kind === "scroll" ? (
          <ScrollModal
            node={activeNode}
            onRead={handleSolved}
            onClose={() => setActiveNodeId(null)}
          />
        ) : activeNode.kind === "quiz" ? (
          <QuizModal
            key={activeNode.node_id}
            node={activeNode}
            onSolved={handleSolved}
            onClose={() => setActiveNodeId(null)}
          />
        ) : (
          <ChallengeModal
            key={activeNode.node_id}
            node={activeNode}
            solved={completed.has(activeNode.node_id)}
            savedCode={codeFor(progress, currentChapter, activeNode.node_id)}
            onCodeChange={handleCodeChange}
            onSolved={handleSolved}
            onClose={() => setActiveNodeId(null)}
          />
        ))}

      {showIntro && frodo && !showChapters && (
        <ChapterIntro chapter={chapter} onStart={() => setShowIntro(false)} />
      )}

      {showStats && (
        <StatsPanel progress={progress} onClose={() => setShowStats(false)} />
      )}

      {showChapters && (
        <ChapterSelect
          progress={progress}
          current={currentChapter}
          onSelect={handleSelectChapter}
          onReset={handleReset}
          onClose={() => setShowChapters(false)}
        />
      )}
    </main>
  );
}
