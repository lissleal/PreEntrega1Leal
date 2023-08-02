import { useState, createContext, React } from "react";

export const CarritoContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //Funcion para ver si el producto ya existe 
    const isInCart = (itemId) => {
        return cart.find(prod => prod.item.id === itemId)
    }

    //Funcion para agregar productos
    const addItem = (item, quantity) => {

        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {item, quantity}]);
            setCantidadTotal( prev => prev + quantity);
            setTotal (prev => prev + (item.price * quantity));
        } else {
            // console.error("El producto ya fue agregado");
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

    //Funcion para eliminar productos

    const removeItem = (itemId) => {
        const productoEliminado = cart.find(prod => prod.item.id === itemId);
        const cartUpdated = cart.filter(prod => prod.item.id !== itemId);

        setCart (cartUpdated);
        setCantidadTotal(prev => prev - productoEliminado.quantity);
        setTotal(prev => prev - productoEliminado.item.price * productoEliminado.quantity)
    }

    //Funcion para Vaciar el carrito
    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setCantidadTotal(0);
    }

    return (
        //Envio los totales y funciones para q esten disponibles en toda la app
        //Uso la propiedad children para representar todos los componentes
        //que pueda necesitar el carrito y sus mettodos
        <CarritoContext.Provider value={{cart, total, cantidadTotal, addItem, removeItem, clearCart, setTotal}}>
            {children}
        </CarritoContext.Provider>
    )
}