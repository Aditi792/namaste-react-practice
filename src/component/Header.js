import { useState } from "react";
import { CDN_URL, logo } from "../utils/constant";
import {Link} from"react-router";

const Header=()=>{
    const [btnLogin, setBtnLogin] = useState("Login");
    return(
        <nav className="nav-bar">
            <img className="logo"src={CDN_URL+logo} alt="Logo" />
            <ul className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li>Cart</li>
                <button className="btn" onClick={
                    () => {
                        setBtnLogin(btnLogin === "Login" ? "Logout" : "Login");
                    }
                }>{btnLogin}</button>
            </ul>       
                
         </nav>
    )
}

export default Header;