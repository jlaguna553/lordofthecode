"use client";

import type { ScrollNode } from "@/lib/game/types";
import { playSfx } from "@/lib/game/audio";

interface Props {
  node: ScrollNode;
  onRead: (nodeId: string) => void;
  onClose: () => void;
}

/**
 * Pergamino: enseña un concepto antes de enfrentarse a los acertijos.
 * Se marca como completado al leerlo (no hay que escribir código).
 */
export default function ScrollModal({ node, onRead, onClose }: Props) {
  const s = node.scroll;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-[#1c1710] shadow-2xl ring-1 ring-amber-600/30">
        {/* Cabecera de pergamino */}
        <div className="border-b border-amber-700/30 bg-gradient-to-b from-amber-900/30 to-transparent p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
            📜 Pergamino · {s.topic}
          </p>
          <h2 className="mt-1 text-xl font-bold text-amber-100">{node.title}</h2>
        </div>

        <div className="flex-1 space-y-5 overflow-auto p-6">
          <blockquote className="border-l-2 border-amber-600/50 pl-3 text-sm italic text-amber-200/70">
            {node.lore_intro}
          </blockquote>

          {s.sections.map((sec, i) => (
            <section key={i}>
              {sec.heading && (
                <h3 className="mb-1.5 text-sm font-bold text-amber-300">
                  {sec.heading}
                </h3>
              )}
              <p className="whitespace-pre-line text-sm leading-relaxed text-amber-50/90">
                {sec.body}
              </p>
              {sec.code && (
                <pre className="mt-2 overflow-x-auto rounded-lg bg-black/50 p-3 text-[12px] leading-relaxed text-emerald-200 ring-1 ring-amber-700/20">
                  {sec.code}
                </pre>
              )}
            </section>
          ))}

          {s.keyTakeaway && (
            <div className="rounded-xl bg-amber-500/10 p-4 ring-1 ring-amber-500/30">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-400">
                Para recordar
              </p>
              <p className="text-sm italic text-amber-100">{s.keyTakeaway}</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-amber-700/30 p-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-white/5 px-3 py-2 text-sm text-amber-200/70 hover:bg-white/10"
          >
            Cerrar
          </button>
          <button
            onClick={() => {
              playSfx("scroll");
              onRead(node.node_id);
              onClose();
            }}
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-amber-400"
          >
            He estudiado el pergamino ✦
          </button>
        </div>
      </div>
    </div>
  );
}
