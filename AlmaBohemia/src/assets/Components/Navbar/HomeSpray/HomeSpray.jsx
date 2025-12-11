import { useGetProductosByCategoryQuery } from "../../../service/productosService";
import { Link } from "react-router-dom";

const HomeSpray = () =>{
  const {data: productos = [], isLoading, isError, error} = useGetProductosByCategoryQuery('home spray')


  // const handleAgregarAlCarrito = (producto) =>{
  //   dispatch(agregarAlCarrito(producto))
  //   console.log( 'se agrego el producto: ', producto)
  // }

  return(
    <div className="producto1">
      <h1 className="font-titulo titulo-producto">Home Spray</h1>
      <div className="product-content">
        {
          isLoading ? (
            <p className="font-subtitulo">Cargando</p>
          ) : isError ? (
            <p>{error.message || 'No se pudieron encontrar los productos'}</p>
          ): (
            productos.map ((prod) =>(
              <div key={prod.id} className="card">
                <Link to={`/producto/${prod.id}`} className="link-card">
                  <img 
                  src={prod.imagenes && prod.imagenes.length > 0 ? prod.imagenes[0] : '/img/logo-alma1.png'}
                  alt={prod.nombre} 
                  />
                
                
              <h1 className="card-title">{prod.nombre}</h1>
              <p className="card-price"> ${Number(prod.precio).toFixed(2)}</p>
              </Link>
              {/* <button onClick={()=> (handleAgregarAlCarrito(prod))} className="btn btn-primario">Agregar Al Carrito</button> */}
              </div>
            )
          )
        )}
      </div>
    </div>
  )
}

export default HomeSpray