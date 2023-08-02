import './Cart.scss'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {cart, clearCart, total, cantidadTotal} = useContext(CarritoContext)
    if (cantidadTotal === 0) {
        return (
            <div>
                <h1>No Hay Items en el Carrito</h1>
                <Link to='/'>Ver todos los productos</Link>
            </div>
        )
    }

  return (
    <div>
        <ol>
        { cart.map(prod => <CartItem key={prod.item.id} {...prod}/>) }
        </ol>
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className='Button'>Limpiar Carrito</button>
        <Link to="/checkout">Checkout</Link>
    </div>
  )
}

export default Cart