import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Genera Metadata inicial
export const metadata: Metadata = {
  title: "Curso Nextjs",
  description: "Aprendiendo Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Cabecera de a App</header>
        <main>
          {children}
        </main>
        <footer>Pie de Pagina</footer>
      </body>
    </html>
  );
}
