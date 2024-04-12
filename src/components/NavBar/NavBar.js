import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo.svg"
import "./NavBar.scss"
import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="header">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className="navbar">
                <NavLink to="/category/Comida"> Comida</NavLink>
                <NavLink to="/category/Accesorios">Accesorios</NavLink>
                <NavLink to="/category/Juguetes">Juguetes</NavLink>

            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar