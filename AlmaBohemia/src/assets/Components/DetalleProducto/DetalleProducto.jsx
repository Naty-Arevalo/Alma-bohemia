import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAromas } from "../../../store/aromasSlice";
import { agregarAlCarrito } from "../../../store/carritoSlice";
import "./detalleProducto.css";
import { fetchProductos } from "../../../store/productosSlice";
import SliderImagenes from "./Slider-imagenes/SliderImagenes";
import {setProductoSeleccionado, limpiarProductoSeleccionado} from '../../../store/detalleProductoSlice'
import { toast } from "react-toastify";

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items: productos,loading,error,} = useSelector((state) => state.productos);
  const producto = useSelector((state) => state.detalleProducto.producto)
  

  const { items: aromas } = useSelector((state) => state.aromas);
  const [aromaSeleccionado, setAromaSeleccionado] = useState("");
  const [errorAroma, setErrorAroma] = useState("");

  

  useEffect(() => {
    if (productos.length === 0) {
      dispatch(fetchProductos());
    }
  }, [productos, dispatch]);

  useEffect(() => {
    if (aromas.length === 0) {
      dispatch(fetchAromas());
    }
  }, [aromas.length, dispatch]);

  // Seleccionar el producto del array y setear en el slice
  useEffect(() => {
    if (!loading && productos.length > 0) {
      const encontrado = productos.find((p)=> p.id.toString() === id);
      if (encontrado){
        dispatch(setProductoSeleccionado(encontrado))
      }else{
         navigate("/");
      }
    }
  }, [productos ,id, loading, dispatch, navigate]);

   // Limpiar producto al desmontar
   useEffect(()=>{
    return ()=> {
      dispatch (limpiarProductoSeleccionado())
    }
   },[dispatch])

  //limpia el texto cuando se selecciona un aroma
  useEffect(() => {
    if (aromaSeleccionado) {
      setErrorAroma("");
    }
  }, [aromaSeleccionado]);

  if (loading || !producto) return <p style={{ padding: "2rem" }}>Cargando producto...</p>;
  if (error) return <p style={{ padding: "2rem" }}>Error: {error}</p>;


  const handleAgregar = () => {
    if (!aromaSeleccionado) {
      setErrorAroma("Por favor selecciona un aroma");
      return;
    }
    const productoConSeleccion = {
      ...producto,
      aroma: aromaSeleccionado,
      cantidad:1,
      
    };
    dispatch(agregarAlCarrito(productoConSeleccion));
    console.log("producto agregadoo!", productoConSeleccion);

    toast.success('Producto agregado al carrito!',{
      style:{
        backgraund: '#333',
        color:'#fff'
      }
    })
  };

  return (
    <>
      <div className="container-detail">
        <h1 className="font-titulo title-font">Detalle de producto</h1>
        <div className="producto-detalle">

        {producto.img?.length > 0 && <SliderImagenes imagenes={producto.img}/>}

          {/* Detalle del producto*/}
          <div className="info-producto">
            <h2 className="font-subtitulo">{producto.nombre}</h2>
            <p className="precio">${producto.precio.toFixed(2)}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore voluptas eaque repellendus nesciunt, aut illo nemo nulla
              iusto itaque expedita?
            </p>
            
            {/* selección aroma*/}
            <div className="container-label">
              <p className="text-detail">Agregá tu aroma</p>
              <label className="label-detail">Aroma</label>
              <select
                value={aromaSeleccionado}
                onChange={(e) => setAromaSeleccionado(e.target.value)}
                className="select-detail"
              >
                <option value="">Seleccioná un aroma</option>
                {aromas.length === 0 ? (
                  <option disabled>no hay aromas cargados</option>
                ) : (
                  aromas.map((aroma) => (
                    <option key={aroma.id} value={aroma.nombre}>
                      {aroma.nombre}
                    </option>
                  ))
                )}
              </select>

              {errorAroma && <p className="error-aroma">{errorAroma}</p>}
            </div>

            {/* Cantidad */}
            
            {/* <div>
              <button onClick={() => setCantidad(Math.max(1, cantidad - 1))} className="button-cantidad">
                -
              </button>
              <span style={{ margin: "0 10px" }}>Cantidad: {cantidad}</span>
              <button onClick={() => setCantidad(cantidad + 1)} className="button-cantidad">+</button>
            </div>
             */}
            {/* Agregar al carrito */}
            <button
              className="btn-comprar"
              onClick={handleAgregar}
             
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


//FALTA ARREGLAR EL PORQUE AL RECARGAR LA PAGINA SE ROMPE EL SLIDER DE IMAGENES!!!!!!!!!!!!