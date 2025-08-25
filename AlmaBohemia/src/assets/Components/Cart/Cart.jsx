import {
  vaciarCarrito,
  eliminarDelCarrito,
  sumarCantidad,
  restarCantidad,
} from "../../../store/carritoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.carrito.items || []);
  console.log("en carrito:", items);
  const dispatch = useDispatch();

  return (
    <div className="cart-principal">
      <h2 className="font-titulo">Mi Carrito</h2>

      <div className="cart-layout">
        <div className="cart-left">
          {items.length === 0 ? (
            <div className="container-empty">
              <p className="cart-empty">El Carrito está Vacío</p>
              <Link to={"/"} className="volver-al-home">
                Volver Al Home
              </Link>
            </div>
          ) : (
            items.map((item) => (
              
              <div key={`${item.id}-${item.aroma}`} className="container-cart">
                <div className="container-info-cart">
                  <div className="container-img-cart">
                    <img src={item.img[0]} alt="" className="img-cart" />
                  </div>
                  <div className="data-info-cart">
                    <p className="font-subtitulo">{item.nombre}</p>
                    <p className="aroma-name">Aroma:</p>
                    <p className="aroma-select-cart">{item.aroma}</p>
                    <div>
                      <button
                        onClick={() =>
                          dispatch(
                            restarCantidad({ id: item.id, aroma: item.aroma })
                          )
                        }
                        className="button-cantidad"
                      >
                        -
                      </button>
                      <span
                        style={{
                          margin: "0 10px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.cantidad}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(
                            sumarCantidad({ id: item.id, aroma: item.aroma })
                          )
                        }
                        className="button-cantidad"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="container-cart-precio">
                  <p className="price-cart">
                        Precio: ${ (item.precio * item.cantidad).toFixed(2)}
                  </p>
                  <button
                    onClick={() =>
                      dispatch(
                        eliminarDelCarrito({ id: item.id, aroma: item.aroma })
                      )
                    }
                    className="icon-cart"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
        <div className="cart-right">
          <p className="total-text">Total:</p>
          <p className="total-price">
            $
            {items
              .reduce((total, item) => total + item.precio * item.cantidad, 0)
              .toFixed(2)}
          </p>
          <button className="btn-comprar-cart">COMPRAR</button>
          <button
            onClick={() => dispatch(vaciarCarrito())}
            className="btn-vaciar"
          >
            VACIAR CARRITO
          </button>
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
