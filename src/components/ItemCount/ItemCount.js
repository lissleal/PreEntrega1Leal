import {useState} from 'react'
import './ItemCount.scss'

const ItemCount = (({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial) 

    const sumar = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const restar = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='Counter'> 
            <div className="Controls">
                <button onClick={restar} className="ButtonSmall">-</button>
                <h4 className="Number">{quantity}</h4>
                <button onClick={sumar} className="ButtonSmall">+</button>
            </div>
            <button onClick={() => onAdd(quantity)} disabled={!stock} className="Button">
                    Agregar al Carrito
            </button>
        </div>
    )

})

export default ItemCount