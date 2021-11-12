import {
    NavLink
} from "react-router-dom";

import "./styles.css"
import ikeaLogo from "../../images/IkeaLogo.png";

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
            </ul>
        </nav>
    )
}