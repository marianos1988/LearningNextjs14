import { Metadata } from "next"

type Props = {
  params: {
    productId: string
  }
}
//Generar una metadata dinamica y mandarle el params al titulo
export const generateMetadata = ({ params }:Props):Metadata => {
  return {
    title: `Producto ${params.productId}`,
    description: "Contactoooo"
  }

}

// El params seria lo que estamos pasando como ruta dinamica
export default function ProductDetail({ params }:Props) {
    return (
      <>
        <h1>Producto { params.productId}</h1>
      </>
    )
}