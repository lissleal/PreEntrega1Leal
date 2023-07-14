import React from 'react'
import Item from '../Item/Item'
import './ItemList.scss'


const ItemList = ({products}) => {
  return (
    <div className="Contenedor">
        {products.map(prod => <Item key={prod.id} {...prod} />)} 

    </div>
  )
}

export default ItemList