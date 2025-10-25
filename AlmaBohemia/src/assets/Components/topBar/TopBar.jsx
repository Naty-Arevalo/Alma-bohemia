import { Link } from "react-router-dom";
import './topBar.css'
import {FaInstagram ,  FaRegUser,  FaWhatsapp} from "react-icons/fa";
import CartWidget from "./CartWidget";



export default function TopBar(){

    return(
        
            <div className="topBar-position bg-topBar">
                <p className="contacto">Contacto</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="icons-topBar"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="icons-topBar"><FaWhatsapp /></a>
                <Link to = {"/AuthPage"} className="text-white text-xl"><FaRegUser /></Link>
                <Link to={"/carrito"} className="icons-topBar"><CartWidget/></Link>
        </div>


        
    )
}