type CommentId = {
  params: {
    productId:string;
    commentId: string;
  }
}

//El productId es un params anidado que viene el aprametro de la carpeta productId

export default function CommentDetail({ params }:CommentId) {
 return (
  <>
    <h1>Comentarios del producto {params.productId}:</h1>
    <p>{params.commentId}</p>
  </>
 )
}