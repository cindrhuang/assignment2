import {
    NavLink
} from "react-router-dom";

import "./styles.css"
import { Button } from "../button";
import ikeaLogo from "../../images/IkeaLogo.png";
import { GoLocation } from "react-icons/go"
import { FiTruck } from "react-icons/fi"
import { AiOutlineUser, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
            <img src={ikeaLogo} alt="Ikea Logo"/>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                        Homepage
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/wishlist">
                        Wishlist
                    </NavLink>
                </li>
            <input className="search-bar" type="text" placeholder="What are you looking for?"/>
            <div className="navbar-icons">
                <Button text={<GoLocation/>}/>
                <Button text={<FiTruck/>}/>
                <Button text={<AiOutlineUser/>}/>
                <Button text={<AiOutlineHeart/>}/>
                <Button text={<AiOutlineShopping/>}/>
            </div>
            </ul>
        </nav>
    )
}