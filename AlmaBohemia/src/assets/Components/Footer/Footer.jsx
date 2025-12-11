
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p className='footer-text'>
          Desarrollado por Narev
        </p>
        <p className='footer-text'>
          © {new Date().getFullYear()} Alma Bohemia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer