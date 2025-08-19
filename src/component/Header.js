import { useState } from "react";
import { CDN_URL, logo } from "../utils/constant";
import {Link} from"react-router";
import checkOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnLogin, setBtnLogin] = useState("Login");
    const onlineStatus = checkOnlineStatus();

    return(
        <nav className="nav-bar">
            <img className="logo" src={CDN_URL+logo} alt="Logo" />
            <ul className="nav-items">
                <li>Online Status:{onlineStatus ? "✅" : "⛔"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
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