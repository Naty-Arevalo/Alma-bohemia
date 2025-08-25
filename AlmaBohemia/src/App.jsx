import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import './assets/variables.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetalleProducto from './assets/Components/DetalleProducto/DetalleProducto.jsx'
import TopBar from './assets/Components/topBar/TopBar.jsx'
import Cart from './assets/Components/Cart/Cart.jsx'
import Footer from './assets/Components/Footer/Footer'
import Navbar from './assets/Components/Navbar/Navbar.jsx'
import Home from './assets/Components/Home/Home.jsx'
import Producto1 from'./assets/Components/Navbar/Producto1/Producto1.jsx'
import Producto2 from './assets/Components/Navbar/Producto2/Producto2.jsx'
import Producto3 from './assets/Components/Navbar/Producto3/Producto3.jsx'
import Difusores from './assets/Components/Navbar/Difusores/Difusores.jsx'
import HomeSpray from './assets/Components/Navbar/HomeSpray/HomeSpray.jsx'
import Complementos from './assets/Components/Navbar/Complementos/Complementos.jsx'
import SobreMi from './assets/Components/Navbar/SobreMi/SobreMi.jsx'
import { useSelector } from 'react-redux';
import { selectCartItems } from './store/carritoSlice.js';
import { useEffect } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
 
  const carrito = useSelector(selectCartItems)

  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
  },[carrito]

)
  return(
  <>
 
  <Router>

    <div className='app-grid'>
        <Navbar/>
      <div className='bg-main main-content'>
      <TopBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Producto1' element={<Producto1/>}/>
        <Route path='/Producto2' element={<Producto2 />}/>
        <Route path='/Producto3' element={<Producto3/>}/>
        <Route path='/Difusores' element={<Difusores/>}/>
        <Route path='/HomeSpray' element={<HomeSpray/>}/> 
        <Route path='/Complementos' element={<Complementos/>}/>
        <Route path='/producto/:id' element={<DetalleProducto/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='/SobreMi' element={<SobreMi/>}/>
      </Routes>  
      </div>
      <Footer/>
    </div>
  </Router>

    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={true} //barra de progreso, en true no aparece
      newestOnTop={false} //en false apilan abajo
      closeOnClick
      rtl={false}
      pauseOnHover
      theme="dark"
      />
    </>)
}

export default App