import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Genera Metadata inicial
// export const metadata: Metadata = {
//   title: "Curso Nextjs",
//   description: "Aprendiendo Nextjs",
// };

export const metadata:Metadata = {
  title: {
    template: "%s - Aprendiendo Next.js", // Complementa el titulo si hay otra metadata generada en el %s se carga el otro metadata
    default: "Aprendiendo Nextjs", //valor por defecto
    absolute: "", //Titulo es absoluto y no se complementa con el template
  },
}



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
