import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"¡Bienvenido! Acá encontrarás todo para tu mascota"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
        <Footer/>
      </BrowserRouter>
      <ToastContainer
hideProgressBar={false}
pauseOnHover={true}
/>


    </>
  )
}


export default App;
