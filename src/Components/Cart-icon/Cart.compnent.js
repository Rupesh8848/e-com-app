import React from 'react'
import "./Cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { CartContext } from '../Context/Cart.context'
export default function Cart () {
    const {itemsCount} = React.useContext(CartContext)
  return (
    <div className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemsCount}</span>
    </div>
  )
}
