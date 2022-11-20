import {Routes, Route} from "react-router-dom"
import CategoriesPreview from "../categories-preview/CategoriesPreview"
import Category from "../Category/Category"

import "./shop.styles.scss"

export default function Shop() {
    
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}></Route>
      <Route path=":category" element={<Category />}/>
    </Routes>
  )
}
