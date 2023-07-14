import { Link } from "react-router-dom"
import "./Item.scss"
const Item = ({id, name, price, img, stock}) => {
  
    return (
        <article className="Card">
            <h2 className="CardTitle">{name}</h2>
            <img src={img} alt={name} className="CardImage"/>
            <p className="CardDescription"> Precio: ${price}</p>
            <Link to={`/item/${id}`} className="Button">Ver Detalle</Link>
        </article>  
    )
}

export default Item