import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
//traigo del context agregar producto

const [quantityAdded, setQuantityAdded] = useState(0);
//traer del context la funcion agregar producto
const {addItem} = useContext(CarritoContext)

const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item = {id, name, price}

    addItem(item,quantity)
}
// const {agregarProducto} = useContext(CarritoContext);

  return (
    <article className='CardDetail'>
            <h2 className='CardTitle'>{name}</h2>
        <section className='CardBody'>
            <img src={img} alt={name} className='CardImage'/>
            <div className='CardDescription'>
                <p>Categoria: {category}</p>
                <p>Id: {id}</p>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
            </div>
        </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart">Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} className="Botons"/>
                    )
                }
            </footer>
    </article>  
    )
}

export default ItemDetail