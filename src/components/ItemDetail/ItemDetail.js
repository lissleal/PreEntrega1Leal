import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  return (
    <article className='CardDetail'>
            <h2 className='CardTitle'>{name}</h2>
        <section className='CardBody'>
            <img src={img} alt={name} className='CardImage'/>
            <div className='CardDescription'>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
            </div>
        </section>
            <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log(`Cantidad Agregada`, quantity)} className="Botons"/>
    </article>  
    )
}

export default ItemDetail