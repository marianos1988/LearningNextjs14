// "use client";
// import { useRouter } from "next/navigation"; // Componente para 

import Button from "@/app/(components)/button"

export const metadata = {
  title: "Contacto en Nextjs",
  description: "Contactoooo"
}

export default function Contacto() {

  // const router = useRouter();
  // //Est afuncion genera una ruta
  // const handleOnClick = () => {
  //   router.push("/")
  // }

  return(
    <>
      <h1>Contacto</h1>
      <br />
      <br />
      <Button />
    </>
  )
}