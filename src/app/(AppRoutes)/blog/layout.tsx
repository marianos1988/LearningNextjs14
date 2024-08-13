export default function BlogLayout({ children }:{ children:React.ReactNode }) {
    return (
      <>
      <header>Otra cabecera de pagina</header>
      <section>{children}</section>
      <aside>
        <form action="">
          <input type="search" placeholder="Inice una busqueda" />
          <input type="submit" value="Buscar" />
        </form>
      </aside>
      <footer>otro pie de pagina </footer>
      </>
    )
} 