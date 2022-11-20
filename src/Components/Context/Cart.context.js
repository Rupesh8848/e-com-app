import React from 'react'

function addCartItem(cartItems, productToAdd){
    
    const itemExists = cartItems.find(item =>item.id === productToAdd.id)

    if(itemExists){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id? {...cartItem, quantity:cartItem.quantity+1} : cartItem)
    }

    return [...cartItems,{...productToAdd, quantity: 1}]
}

export const CartContext = React.createContext(
    {cartState: false,
    setCartState: ()=>null,
    cartItems:[],
    addItemToCart:()=>{},
}
)

export function CartProvider({children}) {
    const [cartState,setCartState] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])

    function addItemToCart(productToAdd){
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    return <CartContext.Provider value={{cartState,setCartState,addItemToCart,cartItems}}>{children}</CartContext.Provider>
}
