import React from 'react'
import "./Product-card.styles.scss"

export default function ProductCard({product}) {
    const {name, price, imageUrl} = product
  return (
    <div className='product-card-container'>
        <img src={imageUrl}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <button>Add to Cart</button>
    </div>
  )
}

