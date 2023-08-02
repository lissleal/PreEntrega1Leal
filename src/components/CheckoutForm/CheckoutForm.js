import { useState } from 'react'

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
    <div>
      <form onSubmit={handleConfirm}>
        <label>Nombre
        <input type="text" value={name} onChange={({target}) => setName(target.value)} />
        </label>
        <label>Telefono
        <input type="number" value={phone} onChange={({target}) => setPhone(target.value)}/>
        </label>
        <label>Email
        <input type="email" value={email} onChange={({target}) => setEmail(target.value)}/>
        </label>
        <button type='submit'>Crear Orden</button>
      </form>
    </div>
  )
}

export default CheckoutForm