// import React, { useContext } from 'react'
import './CartItem.scss'

const CartItem = ({...prod}) => {
  // const {item} = useContext(CarritoContext)

  return (
    <li>
      <p>Producto: {prod.item.name}</p>
      <p>{prod.quantity} x {prod.item.price} = {prod.quantity * prod.item.price}</p>
    </li>
  )
}

export default CartItem