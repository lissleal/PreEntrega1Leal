import { useState } from 'react'
import './CheckoutForm.scss'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
      event.preventDefault()

      const userData = {
        name, phone, email
      }
      console.log("se esta ejecutando el handle confirm")
      onConfirm(userData)

    }

  return (
    <div >
      <form onSubmit={handleConfirm} className='formulario'>
        <h3>Ingrese sus datos para crear la orden: </h3>
        <label>Nombre:
        <input type="text" value={name} onChange={({target}) => setName(target.value)} className='formularioInput'/>
        </label>
        <label>Telefono:
        <input type="number" value={phone} onChange={({target}) => setPhone(target.value)} className='formularioInput'/>
        </label>
        <label>Email:
        <input type="email" value={email} onChange={({target}) => setEmail(target.value)} className='formularioInput'/>
        </label>
        <button type='submit' className='Button'>Crear Orden</button>
      </form>
    </div>
  )
}

export default CheckoutForm