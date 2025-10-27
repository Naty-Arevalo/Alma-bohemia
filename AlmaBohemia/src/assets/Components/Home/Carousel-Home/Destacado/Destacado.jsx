import './destacado.css'
import { Link } from 'react-router-dom'
import {collection, getDocs, query, where, limit} from 'firebase/firestore'
import {db} from '../../../../../firebase/firebaseConfig'
import { useEffect, useState } from 'react'

const Destacado = () => {

  const [producto, setProducto] = useState(null)

  useEffect(()=>{
    const fetchProducto = async()=>{
      const q = query(
        collection(db, 'productos'),
        where('destacado', '==', true),
        limit(1)
      )
      const querySnapshot = await getDocs(q)

      if(!querySnapshot.empty) {
        setProducto(querySnapshot.docs[0].data())
      }else{
        console.log('no hay productos destacados')
      }
    }
    fetchProducto()
  },[])
  return (
    <section className='section-recomendado'>
        <h2 className='font-titulo'> Lo más elegido</h2>
        <div className='recomendado-box'>
          {producto && producto.imagenes && producto.imagenes.length > 0 && (
            <img src={producto.imagenes[0]} alt={producto.nombre}  className='img-recomendado'/>
          )}
            <div className='recomendado-content'>
                <h3 className='font-subtitulo'>Pack Relax</h3>
                <p className='text'>Nuestro set mas elegido: vela aromatica, difusor de varillas y home spray. Ideal para regalar o para mimarte. Fragacias a eleccion y presentacion artesanal</p>
                <Link to='/producto1' className='btn-Link'> Ver más</Link>
            </div>
        </div>
    </section>
  )
}

export default Destacado