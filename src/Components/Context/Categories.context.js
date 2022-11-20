import React from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase'


export const CategoriesContext = React.createContext({
    categoriesMap:{},
    setCategoriesMap:()=>{}
})

export function CategoriesProvider({children}){

    const [categoriesMap, setCategoriesMap] = React.useState([{}])

    React.useEffect(()=>{
        async function getCategoriesMap(){
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }

        getCategoriesMap()
    },[])

    return <CategoriesContext.Provider value={{categoriesMap}}>{children}</CategoriesContext.Provider>
}