import { useState ,useContext} from "react";
import { CDN_URL, logo } from "../utils/constant";
import {Link} from"react-router";
import checkOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header=()=>{

    const [btnLogin, setBtnLogin] = useState("Login");
    const onlineStatus = checkOnlineStatus();
    const {loggedInUser}=useContext(UserContext);

    return(
        <nav className="nav-bar">
            <img className="logo" src={CDN_URL+logo} alt="Logo" />
            <ul className="nav-items">
                <li>Online Status:{onlineStatus ? "✅" : "⛔"}</li>
                <li>User Name:{loggedInUser ? loggedInUser.slice(0,20):""}</li>
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