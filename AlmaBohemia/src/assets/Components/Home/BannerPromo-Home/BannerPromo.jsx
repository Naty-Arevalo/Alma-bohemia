import { Link } from "react-router-dom";
import { FaGift } from "react-icons/fa";
import './bannerPromo.css';

const BannerPromo = () => {
  return (
    <section className="banner-promo">
      <div className="banner-content">
        <div className="banner-icon">
          <FaGift />
        </div>
        <div className="banner-text">
          <h3 className="banner-title">¡Envío gratis en compras mayores a $5000!</h3>
          <p className="banner-subtitle">Aprovechá nuestras promociones especiales</p>
        </div>
        <Link to="/Producto1" className="btn-banner">
          Ver Productos
        </Link>
      </div>
    </section>
  );
};

export default BannerPromo;

