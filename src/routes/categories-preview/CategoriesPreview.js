import React from 'react'
import { CategoriesContext } from '../../Components/Context/Categories.context'
import CateogryPreview from '../../Components/CategoryPreview/CateogryPreview'


export default function CategoriesPreview() {
    const {categoriesMap} = React.useContext(CategoriesContext)
  return (
    <>
    {
       Object.keys(categoriesMap).map(title=>{
        const products = categoriesMap[title]
        return (<CateogryPreview key={title} title={title} products={products}/>)
       })
      
    }

    </>
  )
}
