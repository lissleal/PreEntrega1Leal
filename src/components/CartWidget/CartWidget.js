import "./CartWidget.scss"
import carroCompras from "./assets/carroCompras.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget =  () => {
    const { cantidadTotal } = useContext(CartContext)

    return (
        <Link className="carrito" to="./cart" style={{display: cantidadTotal > 0 ? "flex" : "none"}}>
            <p>{cantidadTotal}</p>
            <img src={carroCompras} alt="cart-widget" className="iconos"/>
        </Link>
    )
}

export default CartWidget