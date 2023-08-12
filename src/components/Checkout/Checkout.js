import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import './Checkout.scss'
import { toast } from 'react-toastify'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [error, setError] = useState(null)

    const { cart, total, clearCart} = useContext(CartContext) 

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)
        setError(null) 

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.item.id )

            const productsRef = collection(db,"inventario")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
            
            const {docs} = productsAddedFromFirestore

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock 

                const productAddedToCart = cart.find(prod => prod.item.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity 

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                setError("Hay productos que estan fuera de stock")
                toast.error("Hay productos fuera de stock")
            }
        
        }
        catch{
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="Container">
                <h1>Se está generando su orden</h1>
            </div>
        )
    }
    if (orderId) {
        return (
            <div className='checkout'>
                <p >El id de su orden es: {orderId}</p>
            </div>
        )
    }
  return (
    <div className='checkout'>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
    </div>
  )
}

export default Checkout