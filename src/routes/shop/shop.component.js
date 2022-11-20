import React from 'react'
import { ProductsContext } from '../../Components/Context/Products.context'
import ProductCard from '../../Components/product-card/Product-card.component'
import "./shop.styles.scss"
export default function Shop() {
    const {products} = React.useContext(ProductsContext)
  return (
    <div className='products-container'>
        {products.map((product)=>(
            <ProductCard key={product.id} product = {product}/>
        ))}
    </div>
  )
}
