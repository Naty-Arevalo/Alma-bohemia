<div className="cart-principal">
  <h2 className="font-titulo">Mi Carrito</h2>

  <div className="cart-layout">
    <div className="cart-left">
      {items.length === 0 ? (
        <p>El Carrito está Vacío</p>
      ) : (
        items.map((item) => (
          <div
            key={`${item.id}-${item.aroma}`}
            className="container-cart"
          >
            <div className="container-info-cart">
              <div className="container-img-cart">
                <img src={item.img[0]} alt="" className="img-cart" />
              </div>
              <div className="data-info-cart">
                <p className="font-subtitulo">{item.nombre}</p>
                <p className="aroma-select-cart">Aroma: {item.aroma}</p>
                <div>
                  <button
                    onClick={() =>
                      dispatch(restarCantidad({ id: item.id, aroma: item.aroma }))
                    }
                    className="button-cantidad"
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.cantidad}</span>
                  <button
                    onClick={() =>
                      dispatch(sumarCantidad({ id: item.id, aroma: item.aroma }))
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
                Precio: $ {item.precio.toFixed(2)}
              </p>
              <button
                onClick={() =>
                  dispatch(eliminarDelCarrito({ id: item.id, aroma: item.aroma }))
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

    <div className="cart-right">
      <p className="total-text">
        Total: $
        {items
          .reduce((total, item) => total + item.precio * item.cantidad, 0)
          .toFixed(2)}
      </p>
      <button className="btn-comprar">COMPRAR</button>
      <button onClick={() => dispatch(vaciarCarrito())} className="btn-vaciar">
        VACIAR
      </button>
    </div>
  </div>
</div>
