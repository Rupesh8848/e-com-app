import React from 'react'
import { CartContext } from '../Context/Cart.context'
import CartItem from '../CartItem/CartItem'
import "./CartDropDown.scss"
import { useNavigate } from 'react-router-dom'

export default function CartDropDown() {

    const {cartItems} = React.useContext(CartContext)
    const navigate = useNavigate()
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map(item=>(
                <CartItem key={item.id} cartItem={item} />
            ))}
        </div>

            <button onClick={()=>navigate("/checkout")}>GO TO CHECKOUT</button>
    </div>
  )
}
