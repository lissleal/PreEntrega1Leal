import { useState, createContext, React } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const isInCart = (itemId) => {
        return cart.find(prod => prod.item.id === itemId)
    }

    const addItem = (item, quantity) => {

        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {item, quantity}]);
            setCantidadTotal( prev => prev + quantity);
            setTotal (prev => prev + (item.price * quantity));
        } else {
            const carritoActualizado = cart.map( prod => {
                if(prod.item.id === item.id){
                    return {...prod, quantity: prod.quantity + quantity}
                } else {
                    return prod;
                }
            })
            setCart(carritoActualizado);
            setCantidadTotal(prev => prev + quantity);
            setTotal(prev => prev.price * quantity);
        }
    }

    const removeItem = (itemId) => {
        const productoEliminado = cart.find(prod => prod.item.id === itemId);
        const cartUpdated = cart.filter(prod => prod.item.id !== itemId);

        setCart (cartUpdated);
        setCantidadTotal(prev => prev - productoEliminado.quantity);
        setTotal(prev => prev - productoEliminado.item.price * productoEliminado.quantity)
    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setCantidadTotal(0);
    }

    return (

        <CartContext.Provider value={{cart, total, cantidadTotal, addItem, removeItem, clearCart, setTotal}}>
            {children}
        </CartContext.Provider>
    )
}