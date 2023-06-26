import logo from "../header/assets/logo.png"
import Carrito from "../carrito/carrito"

function Header() {
    return (
        <header className="header">
            <h1><img src={logo} alt="" /></h1>
            <nav>
                <a href="">Comida</a>
                <a href="">Accesorios</a>
                <a href="">Juguetes</a>
            </nav>
            <Carrito />
        </header>
    )
}

export default Header