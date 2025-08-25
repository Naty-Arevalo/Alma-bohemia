import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { fetchProductos } from "../../../../store/productosSlice";
import './producto1.css'
import { Link } from "react-router-dom";

const Producto1 = () =>{
  const dispatch = useDispatch()
  const {items: productos,loading, error} = useSelector(state => state.productos)


  useEffect(()=>{
    dispatch(fetchProductos())
  },[dispatch])

  const velas = productos.filter(p => p.categoria === 'velas')

  // const handleAgregarAlCarrito = (producto) =>{
  //   dispatch(agregarAlCarrito(producto))
  //   console.log( 'se agrego el producto: ', producto)
  // }

  return(
    <div className="producto1">
      <h1 className="font-titulo titulo-producto">Velas</h1>
      <div className="product-content">
        {
          loading ? (
            <p className="font-subtitulo">Cargando</p>
          ) : error ? (
            <p>{error}</p>
          ): (
            velas.map ((prod) =>(
              <div key={prod.id} className="card">
                <Link to={`/producto/${prod.id}`} className="link-card">
                  <img 
                  src={prod.img && prod.img.length > 0 ? prod.img[0] : '/img/logo-alma1.png'}
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

export default Producto1