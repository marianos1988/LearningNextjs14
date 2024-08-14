"use client";
import { useRouter } from "next/navigation"; //Libreria para usar  como redirrecionador de url


export default function Button() {

    //Esta funcion redirecciona a una ruta de la url
    const router = useRouter();


    const handleOnClick = () => {
      router.push("/")
    }

  return(
    <button onClick={handleOnClick}>Regresar</button>
  )
}