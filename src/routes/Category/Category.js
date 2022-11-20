import React from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../Components/Context/Categories.context'
import ProductCard from '../../Components/product-card/Product-card.component'
import "./Category.scss"
export default function Category() {
    const {category} = useParams()
    const {categoriesMap} = React.useContext(CategoriesContext)
    const [products, setProducts] = React.useState(categoriesMap[category])

    React.useEffect(()=>{
        setProducts(categoriesMap[category])
    },[categoriesMap, category])
  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
        {
           products && products.map(product=><ProductCard key={product.id} product={product}/>)
        }
    </div>
    </>
  )
}
