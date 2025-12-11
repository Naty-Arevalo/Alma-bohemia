import { useGetProductosQuery } from "../../../service/productosService";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import './productosDestacados.css';

const ProductosDestacados = () => {
  const { data: productos = [], isLoading } = useGetProductosQuery();

  // Obtener productos destacados o los primeros 4 productos
  const productosDestacados = productos
    .filter(prod => prod.destacado !== false)
    .slice(0, 4);

  if (isLoading) {
    return <Loading message="Cargando productos..." />;
  }

  if (productosDestacados.length === 0) {
    return null;
  }

  return (
    <section className="section-productos-destacados">
      <h2 className="font-titulo" style={{color: 'var(--color-texto)'}}>Productos Destacados</h2>
      <div className="productos-grid">
        {productosDestacados.map((producto) => (
          <Link 
            key={producto.id} 
            to={`/producto/${producto.id}`} 
            className="producto-card-destacado"
          >
            <div className="producto-img-container">
              <img 
                src={producto.imagenes && producto.imagenes.length > 0 
                  ? producto.imagenes[0] 
                  : '/img/logo-alma1.png'} 
                alt={producto.nombre}
                className="producto-img-destacado"
              />
            </div>
            <div className="producto-info-destacado">
              <h3 className="producto-nombre-destacado">{producto.nombre}</h3>
              <p className="producto-precio-destacado">${producto.precio?.toFixed(2) || '0.00'}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/Producto1" className="btn-ver-todos">
        Ver Todos los Productos
      </Link>
    </section>
  );
};

export default ProductosDestacados;

