import CartWidget from "../CartWidget/CartWidget"
import logo from "./assets/logo.svg"

function NavBar() {
    return (
        <nav className="header">
            <h1><img src={logo} alt="" /></h1>
            <div className="navbar">
                <button>Comida</button>
                <button>Accesorios</button>
                <button>Juguetes</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar