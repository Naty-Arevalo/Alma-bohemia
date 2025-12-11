import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import './App.css'
import './assets/variables.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { selectCartItems } from './store/carritoSlice.js';
import { lazy, Suspense, useEffect } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './assets/Components/Navbar/Navbar.jsx'
import TopBar from './assets/Components/topBar/TopBar.jsx'
import Footer from './assets/Components/Footer/Footer'
import Loading from './assets/Components/Loading/Loading.jsx'

const Home= lazy(()=> import ( './assets/Components/Home/Home.jsx'))
const Producto1 = lazy(()=> import('./assets/Components/Navbar/Producto1/Producto1.jsx') )
const Producto2 = lazy (()=> import ('./assets/Components/Navbar/Aromas/Producto2.jsx'))
const Producto3 = lazy (()=> import('./assets/Components/Navbar/Producto3/Producto3.jsx'))
const Difusores = lazy (()=> import ('./assets/Components/Navbar/Difusores/Difusores.jsx'))
const HomeSpray = lazy (()=> import ('./assets/Components/Navbar/HomeSpray/HomeSpray.jsx'))
const Complementos = lazy (()=> import ('./assets/Components/Navbar/HomeSpray/HomeSpray.jsx'))
const SobreMi = lazy (()=> import ('./assets/Components/Navbar/SobreMi/SobreMi.jsx'))
const DetalleProducto = lazy (()=> import ('./assets/Components/DetalleProducto/DetalleProducto.jsx'))
const Cart = lazy (()=> import ('./assets/Components/Cart/Cart.jsx'))
const AuthPAge = lazy (()=> import ('./assets/Components/topBar/login/AuthPage.jsx'))
const PanelAdmin = lazy (()=> import ('./assets/Components/Panel de Admin/AdminPanel.jsx'))


function App () {
 
  const carrito = useSelector(selectCartItems)

  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
  },[carrito])
  return(
  <>
 
  <Router>

    <div className='app-grid'>
        <Navbar/>
      {/* <div className='bg-main main-content'> */}
        <div className='main-content' style={{backgroundColor: 'var(--color-fondo)'}}>
      <TopBar/>
    <Suspense fallback={<Loading />}>
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
        <Route path='/AuthPage' element={<AuthPAge/>}/>
        <Route path='/PanelAdmin' element={<PanelAdmin/>}/>
      </Routes> 
      </Suspense> 
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
      theme="light"
      toastClassName="custom-toast"
      />
    </>)
}

export default App