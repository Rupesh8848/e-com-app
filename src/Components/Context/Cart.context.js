import React from 'react'


export const CartContext = React.createContext(
    {cartState: false,
    setCartState: ()=>null,}
)

export function CartProvider({children}) {
    const [cartState,setCartState] = React.useState(false)
    return <CartContext.Provider value={{cartState,setCartState}}>{children}</CartContext.Provider>
}
