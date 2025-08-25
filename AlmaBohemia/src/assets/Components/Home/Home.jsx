import "./home.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel-Home/CarouselHome";
import Destacado from "./Carousel-Home/Destacado/Destacado";
import ValoresHome from "./Valores-Home/ValoresHome";
import CategoriesHome from "./Categories-Home/CategoriesHome";

const Home = () => {
  return (
    <>

   
      <Carousel />
      <hr className="linea-divisoria"/>
      <ValoresHome/>
      <hr className="linea-divisoria"/>
      <CategoriesHome/>
      <hr className="linea-divisoria"/>
      <Destacado />
      <hr className="linea-divisoria"/>
      <section className="section-sobremi-intro">
        <h1 className="font-titulo">Sobre mí</h1>
        <p className="text-description">
          Soy Be, creadora de velas artesanales que buscan llenar tu espacio de
          calma, aroma y amor...
          <Link to="/sobremi" className="btn-mas-info">
          Conocé más
        </Link>
        </p>
        
      </section>
    </>
  );
};

export default Home;
