import carroCompras from "./assets/carroCompras.png"

function Carrito () {
    return (
        <div className="flex">
            <p>0</p>
            <img src={carroCompras} alt="" className="iconos"/>
        </div>
    )
}

export default Carrito