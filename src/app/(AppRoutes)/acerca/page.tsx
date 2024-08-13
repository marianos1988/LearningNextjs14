import { Metadata } from "next";

//Se crea la nuevs ruta localhost:3000/acerca



// Genera Metadata inicial
export const metadata: Metadata = {
  title: {
    absolute: "Acerca"
  },
  description: "Aprendiendo Nextjs",
};

export default function Acerca() {
  return (
    <>
      <h1>Acerca</h1>
    </>
  )
}