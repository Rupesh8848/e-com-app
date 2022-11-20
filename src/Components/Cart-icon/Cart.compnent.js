import React from 'react'
import "./Cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
export default function Cart () {
  return (
    <div className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}
