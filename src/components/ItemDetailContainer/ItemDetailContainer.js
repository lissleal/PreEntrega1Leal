import { useEffect, useState } from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const id = useParams().id

    useEffect(() => {
        getProductById(id)
        .then(response => {
            setProduct(response)
        }) 
        .catch(error => {
            console.error(error)
        })


    }, [id])

  return (
    <div className="Container">
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer