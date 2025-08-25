import './destacado.css'
import { Link } from 'react-router-dom'

const Destacado = () => {
  return (
    <section className='section-recomendado'>
        <h2 className='font-titulo'> Lo más elegido</h2>
        <div className='recomendado-box'>
            <img src="/img/vela2.jpg" alt=""  className='img-recomendado'/>
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