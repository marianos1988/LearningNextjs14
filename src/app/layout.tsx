import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; //Este redirecciona a los lugares que queremos ir

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
        <header>
          <h1>Cabecera de a App</h1>
          <nav>
            <Link href="/login">Login</Link>
            <Link href="/registrar">Registrar</Link>
            <Link href="/password">Recuperar Password</Link>
            <Link href="/">Home</Link>
            <Link href="/acerca">Acerca</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/productos">Productos</Link>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>Pie de Pagina</footer>
      </body>
    </html>
  );
}
