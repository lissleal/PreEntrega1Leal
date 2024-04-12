import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import './ItemListContainer.scss'
import { toast } from "react-toastify"

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ?
            query(collection(db, "inventario"), where("category", "==", categoryId))
            : collection(db, "inventario")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                toast.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if (loading) {
        return (
            <div className="Container">
                <p>CARGANDO</p>
            </div>
        )
    }

    return (
        <div className="ContenedorPrincipal">
            <h1>{greeting}</h1>
            <h2>{categoryId}</h2>

            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer