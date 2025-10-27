import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchProductos } from "../../../../store/productosSlice";

import { Link } from "react-router-dom";

const Difusores = () =>{
  const dispatch = useDispatch()
  const {items: productos,loading, error} = useSelector(state => state.productos)


  useEffect(()=>{
    dispatch(fetchProductos())
  },[dispatch])

  const difusores = productos.filter(p => p.categoria === 'difusores')

  // const handleAgregarAlCarrito = (producto) =>{
  //   dispatch(agregarAlCarrito(producto))
  //   console.log( 'se agrego el producto: ', producto)
  // }

  return(
    <div className="producto1">
      <h1 className="font-titulo titulo-producto">Difusores</h1>
      <div className="product-content">
        {
          loading ? (
            <p className="font-subtitulo">Cargando</p>
          ) : error ? (
            <p>{error}</p>
          ): (
            difusores.map ((prod) =>(
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

export default Difusores