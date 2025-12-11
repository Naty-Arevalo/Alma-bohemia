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
        const doc = querySnapshot.docs[0];
        setProducto({ id: doc.id, ...doc.data() })
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
                <h3 style={{color: 'var(--color-texto)'}}>{producto?.nombre || 'Pack Relax'}</h3>
                <p className='texto-relax'>
                  {producto?.descripcion || 'Nuestro set más elegido: vela aromática, difusor de varillas y home spray. Ideal para regalar o para mimarte. Fragancias a elección y presentación artesanal.'}
                </p>
                <p className='precio-destacado'>${producto?.precio?.toFixed(2) || ''}</p>
                <Link to={producto?.id ? `/producto/${producto.id}` : '/producto1'} className='btn-Link'> Ver más</Link>
            </div>
        </div>
    </section>
  )
}

export default Destacado