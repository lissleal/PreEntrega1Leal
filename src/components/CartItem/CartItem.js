// import React, { useContext } from 'react'
import './CartItem.scss'

const CartItem = ({...prod}) => {
console.log(prod)
  return (
    <li className='productoItem'>
      <p>{prod.item.name}</p>
      <p>{prod.quantity} x ${prod.item.price} = ${prod.quantity * prod.item.price}</p>
    </li>
  )
}

export default CartItem