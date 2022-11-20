import React from 'react'
import "./Product-card.styles.scss"
import { CartContext } from '../Context/Cart.context'
export default function ProductCard({product}) {
    const {name, price, imageUrl} = product
    const {addItemToCart} = React.useContext(CartContext)
    const addProductToCart = ()=>addItemToCart(product)
  return (
    <div className='product-card-container'>
        <img src={imageUrl}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <button onClick={addProductToCart}>Add to Cart</button>
    </div>
  )
}

