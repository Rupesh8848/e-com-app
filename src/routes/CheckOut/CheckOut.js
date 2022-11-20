import React from 'react'
import {CartContext} from "../../Components/Context/Cart.context"
import CheckOutItem from '../../Components/CheckOutItem/CheckOutItem'
import "./CheckOut.styles.scss"
export default function CheckOut() {
    const {cartItems,totalCost} = React.useContext(CartContext)
    console.log(cartItems)
    

  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
            <span>Quantity</span>
            </div>
            <div className='header-block'>
            <span>Price</span>
            </div>
            <div className='header-block'>
            <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((item)=>{
               return (
                <CheckOutItem key={item.id} item={item}/>
               )
            })
        }

        <span className='total'>Total: ${totalCost}</span>
    </div>
  )
}
