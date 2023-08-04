import "./CartWidget.scss"
import carroCompras from "./assets/carroCompras.png"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"


const CartWidget =  () => {
    const { cantidadTotal } = useContext(CarritoContext)

    return (
        <Link className="carrito" to="./cart" style={{display: cantidadTotal > 0 ? "flex" : "none"}}>
            <p>{cantidadTotal}</p>
            <img src={carroCompras} alt="cart-widget" className="iconos"/>
        </Link>
    )
}

export default CartWidget