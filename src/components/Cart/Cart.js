import './Cart.scss'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {cart, clearCart, total, cantidadTotal} = useContext(CarritoContext)
    if (cantidadTotal === 0) {
        return (
            <div className='cart'>
                <h1>No Hay Items en el Carrito</h1>
                <Link to='/' className='Button'>Ver todos los productos</Link>
            </div>
        )
    }

  return (
    <div className='cart'>
        <h2>Articulos Agregados a la lista:</h2>
        <ol className='cart_List'>
        { cart.map(prod => <CartItem key={prod.item.id} {...prod}/>) }
        </ol>
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className='buttonClear'>Limpiar Carrito</button>
        <Link to="/checkout" className='Button'>Terminar Compra</Link>
    </div>
  )
}

export default Cart