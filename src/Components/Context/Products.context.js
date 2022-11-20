import React from 'react'
import PRODUCTS from "../../shop-data.json"

export const ProductsContext = React.createContext({
    products:[],
    setProducts:()=>null,
})

export function ProductsProvider({children}){

    const [products, setProducts] = React.useState(PRODUCTS)

    return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
}