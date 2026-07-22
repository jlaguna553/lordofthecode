"use client";

import { CAMPAIGN, CHAPTERS, getChapter } from "@/data/chapters";
import type { Progress } from "@/lib/game/progress";
import { completedOf } from "@/lib/game/progress";
import { capituloDesbloqueado } from "@/lib/game/rpg";

interface Props {
  progress: Progress;
  current: number;
  onSelect: (chapter: number) => void;
  onReset: () => void;
  onClose: () => void;
}

export default function ChapterSelect({
  progress,
  current,
  onSelect,
  onReset,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              La Sintaxis Ancestral
            </p>
            <h2 className="text-xl font-bold text-slate-100">Capítulos</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-700"
          >
            ✕ Cerrar
          </button>
        </div>

        <ul className="flex-1 space-y-2 overflow-auto p-5">
          {/* CAMPAIGN va agrupado por libros (el 13 cae junto a los otros de
              algoritmos); en la lista, sin encabezados, eso parece un error. */}
          {[...CAMPAIGN]
            .sort((a, b) => a.chapter - b.chapter)
            .map((info) => {
            const chapter = getChapter(info.chapter);
            // Un capítulo puede existir pero estar cerrado hasta vencer al
            // jefe del anterior.
            const cierre = chapter
              ? capituloDesbloqueado(chapter, progress, CHAPTERS)
              : { abierto: false as const, motivo: undefined };
            const playable = Boolean(chapter) && cierre.abierto;
            const total = chapter?.nodes.length ?? 0;
            const done = chapter
              ? [...completedOf(progress, info.chapter)].filter((id) =>
                  chapter.nodes.some((n) => n.node_id === id),
                ).length
              : 0;
            const isCurrent = info.chapter === current;
            const finished = playable && total > 0 && done === total;

            return (
              <li key={info.chapter}>
                <button
                  type="button"
                  disabled={!playable}
                  onClick={() => playable && onSelect(info.chapter)}
                  className={
                    "w-full rounded-xl p-4 text-left transition ring-1 " +
                    (!playable
                      ? "cursor-not-allowed bg-slate-950/60 text-slate-600 ring-white/5"
                      : isCurrent
                        ? "bg-emerald-500/15 text-slate-100 ring-emerald-500/40"
                        : "bg-slate-800/60 text-slate-200 ring-white/10 hover:bg-slate-800")
                  }
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-bold">
                      {info.chapter}. {info.title}
                    </span>
                    <span className="shrink-0 text-xs">
                      {!chapter ? (
                        <span className="rounded bg-slate-800 px-2 py-0.5 text-slate-500">
                          🔒 Próximamente
                        </span>
                      ) : !playable ? (
                        <span className="rounded bg-slate-800 px-2 py-0.5 text-orange-400/80">
                          🔒 Bloqueado
                        </span>
                      ) : finished ? (
                        <span className="text-emerald-400">✦ Completado</span>
                      ) : (
                        <span className="text-amber-300">
                          {done}/{total} runas
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-indigo-300">{info.topic}</p>
                  <p className="mt-1 text-xs leading-relaxed opacity-80">
                    {!playable && cierre.motivo ? cierre.motivo : info.lore}
                  </p>
                  {playable && total > 0 && (
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-950">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all"
                        style={{ width: `${(done / total) * 100}%` }}
                      />
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-white/10 p-4">
          <p className="text-xs text-slate-500">
            El progreso se guarda en este navegador.
          </p>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "¿Borrar todo el progreso guardado? Esta acción no se puede deshacer.",
                )
              ) {
                onReset();
              }
            }}
            className="rounded-lg bg-rose-600/80 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-600"
          >
            Reiniciar progreso
          </button>
        </div>
      </div>
    </div>
  );
}
