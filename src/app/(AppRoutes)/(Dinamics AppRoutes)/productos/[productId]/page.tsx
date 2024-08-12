
type ProductoId = {
  params: {
    productId: string
  }
}

// El params seria lo que estamos pasando como ruta dinamica
export default function ProductDetail({ params }:ProductoId) {
    return (
      <>
        <h1>Producto { params.productId}</h1>
      </>
    )
}