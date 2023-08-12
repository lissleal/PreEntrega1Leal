import './Cart.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {cart, clearCart, total, cantidadTotal} = useContext(CartContext)
    if (cantidadTotal === 0) {
        return (
            <div className='container'>
                <div className='cart'>
                    <h1>No Hay Items en el Carrito</h1>
                    <Link to='/' className='Button'>Ver todos los productos</Link>
                </div>
            </div>
        )
    }

  return (
    <div className='container'>
        <div className='cart'>
        <h2>Articulos en su carrito:</h2>
        <ol className='cartList'>
        { cart.map(prod => <CartItem key={prod.item.id} {...prod}/>) }
        </ol>
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className='buttonClear'>Limpiar Carrito</button>
        <Link to="/checkout" className='Button'>Terminar Compra</Link>
    </div>
    </div>
  )
}

export default Cart