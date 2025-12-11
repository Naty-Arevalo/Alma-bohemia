import Carousel from 'react-bootstrap/Carousel';
import './carouselHome.css'
import { Link } from 'react-router-dom';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselHome() {
  return (
    <Carousel  className='carousel-content'>
      <Carousel.Item  className='carousel-item'>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="./comprimidas/hero.webp" alt="Velas artesanales de soja con aromas naturales" className='img-carousel' />
        <Carousel.Caption>
          <h3 className='font-subtitulo'>Aromas que abrazan tu espacio</h3>
          <p className='text-carousel'>Velas de soja, difusores, home sprays y detalles hechos a mano con
            amor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="./comprimidas/souvenir.webp" alt="Souvenirs personalizados para eventos especiales" className='img-carousel'/>
        <Carousel.Caption>
          <h3 className='font-subtitulo'>Souvenirs para eventos</h3>
          <p className='text-carousel'> Hacemos souvenirs personalizados para bodas, cumpleaños, baby showers y más.</p>
          <Link to="/complementos">
            <button className='btn-carousel'>Ver Más</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="./img/carousel3.jpg" alt="Boxes de regalo con productos artesanales" className='img-carousel'/>
        <Carousel.Caption>
          <h3 className='font-subtitulo'>Box para Regalar</h3>
          <p className='text-carousel'>
           Distintos tipos y tamaños adaptados para regalar
          </p>
          <Link to="/complementos">
            <button className='btn-carousel'>Ver Más</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;

