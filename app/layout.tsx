import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lord of the Code — La Sintaxis Ancestral",
  description:
    "RPG educativo (La Comunidad del Anillo) para aprender POO en PHP resolviendo acertijos, con estudio de sprites LPC integrado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="text-slate-100 antialiased">{children}</body>
    </html>
  );
}
