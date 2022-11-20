import React from 'react'
import { CartContext } from '../Context/Cart.context'
import CartItem from '../CartItem/CartItem'
import "./CartDropDown.scss"
export default function CartDropDown() {

    const {cartItems} = React.useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map(item=>(
                <CartItem key={item.id} cartItem={item} />
            ))}
            <button>GO TO CHECKOUT</button>
        </div>
    </div>
  )
}
