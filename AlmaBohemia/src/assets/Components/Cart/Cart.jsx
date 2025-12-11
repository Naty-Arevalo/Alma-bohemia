import {
  vaciarCarrito,
  eliminarDelCarrito,
  sumarCantidad,
  restarCantidad,
} from "../../../store/carritoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line, RiShoppingBag3Line } from "react-icons/ri";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.carrito.items || []);
  console.log("en carrito:", items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  const cantidadTotal = items.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <div className="cart-principal">
      <div className="cart-header">
        <h2 className="font-titulo cart-title">
          <FaShoppingCart className="cart-icon-title" />
          Mi Carrito
        </h2>
        {items.length > 0 && (
          <p className="cart-subtitle">{cantidadTotal} {cantidadTotal === 1 ? 'producto' : 'productos'}</p>
        )}
      </div>

      <div className="cart-layout">
        <div className="cart-left">
          {items.length === 0 ? (
            <div className="container-empty">
              <div className="empty-cart-icon">
                <HiShoppingBag />
              </div>
              <h3 className="cart-empty-title">Tu carrito está vacío</h3>
              <p className="cart-empty-text">Agrega productos para comenzar tu compra</p>
              <Link to={"/"} className="btn-volver-home">
                <FaShoppingCart /> Explorar Productos
              </Link>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map((item) => (
                <div key={`${item.id}-${item.aroma}`} className="container-cart">
                  <div className="container-img-cart">
                    <img 
                      src={item.imagenes?.length > 0 ? item.imagenes[0] : '/img/logo-alma.png'}
                      alt={item.nombre} 
                      className="img-cart" 
                    />
                  </div>
                  
                  <div className="container-info-cart">
                    <div className="data-info-cart">
                      <h3 className="product-name-cart">{item.nombre}</h3>
                      <div className="aroma-info">
                        <span className="aroma-label">Aroma:</span>
                        <span className="aroma-value">{item.aroma}</span>
                      </div>
                      
                      <div className="quantity-controls">
                        <button
                          onClick={() => dispatch(restarCantidad({ id: item.id, aroma: item.aroma }))}
                          className="button-cantidad btn-minus"
                          aria-label="Disminuir cantidad"
                        >
                          <FaMinus />
                        </button>
                        <span className="quantity-display">{item.cantidad}</span>
                        <button
                          onClick={() => dispatch(sumarCantidad({ id: item.id, aroma: item.aroma }))}
                          className="button-cantidad btn-plus"
                          aria-label="Aumentar cantidad"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    <div className="container-cart-precio">
                      <div className="price-info">
                        <span className="price-label">Precio unitario:</span>
                        <span className="price-unit">${item.precio.toFixed(2)}</span>
                      </div>
                      <div className="price-total-item">
                        <span className="price-total-label">Subtotal:</span>
                        <span className="price-cart">${(item.precio * item.cantidad).toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => dispatch(eliminarDelCarrito({ id: item.id, aroma: item.aroma }))}
                        className="btn-delete-item"
                        aria-label="Eliminar producto"
                        title="Eliminar del carrito"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="cart-right">
            <div className="cart-summary">
              <h3 className="summary-title">Resumen de compra</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Productos ({cantidadTotal})</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Envío</span>
                  <span className="shipping-free">Gratis</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total-row">
                  <span className="total-text">Total:</span>
                  <span className="total-price">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="btn-comprar-cart">
                <RiShoppingBag3Line /> Finalizar Compra
              </button>
              <button
                onClick={() => dispatch(vaciarCarrito())}
                className="btn-vaciar"
              >
                <RiDeleteBin6Line /> Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;

{
  /* <p>Total de Productos: {cantidadTotal}</p>
          <p>total a pagar ${total}</p> */
}
