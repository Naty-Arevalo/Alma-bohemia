import "./aromas.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchAromas } from "../../../../store/aromasSlice"
import { useEffect } from "react"



const Producto2 = () => {
  const dispatch = useDispatch()
  const {items: aromas, loading, error} = useSelector(state => state.aromas)

  useEffect(()=>{
    dispatch(fetchAromas())
  },[dispatch])

  return (
    <div>
      <h1 className="titulo-aromas">Nuestros Aromas</h1>
      <div className="container-aromas">
        {
        loading ? (
          <p>CArgando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          aromas.map ((aroma) =>(
            <div key={aroma.id} className="list-container-aromas">
              <h2 className="title-aromas">{aroma.nombre}</h2>
              <p className="parrafo-aromas">{aroma.caracteristicas}</p>
            </div>
          ))
        )
      }
      </div>
      
    </div>
  )
}

export default Producto2