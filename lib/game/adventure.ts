import type { Chapter } from "./types";
import type { Localized } from "@/lib/i18n/core";

/**
 * Una AVENTURA es una campaña completa que enseña una tecnología de 0 a 100
 * (PHP, Python, JavaScript…). Cada una tiene sus propios capítulos, su
 * evaluador (por el `lang` de sus retos) y su progreso independiente.
 */
export interface Adventure {
  /** Identificador estable; también es la clave del progreso guardado. */
  id: string;
  /** Nombre corto de la tecnología, p. ej. "PHP". */
  tech: string;
  /** Título de la aventura. */
  name: Localized<string>;
  /** Descripción breve para la pantalla de selección. */
  blurb: Localized<string>;
  /** Emoji representativo. */
  icon: string;
  /** Color base del tema (clases Tailwind estáticas por acento). */
  accent: Accent;
  /** `available`: jugable. `soon`: aparece en el selector pero bloqueada. */
  status: "available" | "soon";
  /** Capítulos jugables, en orden. Vacío si aún no tiene contenido. */
  chapters: Chapter[];
}

export type Accent =
  | "violet"
  | "sky"
  | "amber"
  | "emerald"
  | "rose"
  | "orange"
  | "indigo"
  | "cyan"
  | "slate";

/** Clases de anillo/fondo por acento (Tailwind no admite clases dinámicas). */
export const ACCENT_RING: Record<Accent, string> = {
  violet: "ring-violet-500/40",
  sky: "ring-sky-500/40",
  amber: "ring-amber-500/40",
  emerald: "ring-emerald-500/40",
  rose: "ring-rose-500/40",
  orange: "ring-orange-500/40",
  indigo: "ring-indigo-500/40",
  cyan: "ring-cyan-500/40",
  slate: "ring-slate-500/40",
};

export const ACCENT_TEXT: Record<Accent, string> = {
  violet: "text-violet-300",
  sky: "text-sky-300",
  amber: "text-amber-300",
  emerald: "text-emerald-300",
  rose: "text-rose-300",
  orange: "text-orange-300",
  indigo: "text-indigo-300",
  cyan: "text-cyan-300",
  slate: "text-slate-300",
};
