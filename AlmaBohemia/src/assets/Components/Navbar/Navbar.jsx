import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { FaBars, FaInstagram, FaWhatsapp } from "react-icons/fa";

import CartWidget from "../topBar/CartWidget";


const Navbar = () => {

  const links = [
    {to:'producto1', label:'Velas'},
    {to:'producto2', label:'Aromas'}, 
    {to:'producto3', label:'Producto3'},
    {to:'difusores', label:'Difusores'},
    {to:'homespray', label:'Home Spray'},
    {to:'complementos', label:'Complementos'},
    {to:'sobremi', label:'Sobre Mi'},
  ]

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar-content bg-aside">
      <aside className=" aside">
          <NavLink to={"/"}>
            <img className="logo-navbar" src="/logo-alma1.png" alt="logo" />
          </NavLink>
          {/* Menu hamburguesa */}
          <button
            className="menu-toggle"
            onClick ={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburguesa"><FaBars /></span>
          </button>
      </aside>
      <nav className={`bg-navbar navbar ${menuOpen ? "open" : ""}`}>
        {links.map(({ to, label}) => (
          <NavLink
          key={to}
          to={to}
          className={({isActive})=> 
            isActive ?  'nav-button active' : 'bg-nav-button nav-button'
          }
          onClick={() => setMenuOpen (false)}
          >
          {label}
        </NavLink>
        ))}</nav>
      
      <div className="topBar-mobile">
        <a href="#" target="_blank" rel="noopener noreferrer" className="icons-topBar"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="icons-topBar"><FaWhatsapp /></a>
        <Link to={"/carrito"} className="icons-topBar"><CartWidget/></Link>
      </div>
    </div>
  );
};
export default Navbar;
