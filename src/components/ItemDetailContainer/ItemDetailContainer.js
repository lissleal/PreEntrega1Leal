import "./ItemDetailContainer.scss"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { toast } from "react-toastify"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "inventario", id)

        getDoc(docRef)
        .then(response => {
            const data = response.data();
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }) 
        .catch(error => {
            toast(error)
        })
        .finally(() => {
            setLoading(false)
        })


    }, [id])
if(loading){
    return(
        <div className="Container">
        <p>CARGANDO</p> 
        </div >
    )
}

  return (
    <div className="Container">
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer