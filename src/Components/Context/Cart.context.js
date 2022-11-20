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
    itemsCount:0,
}
)

export function CartProvider({children}) {
    const [cartState,setCartState] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])
    const [itemsCount, setItemsCount] = React.useState(0)
    function addItemToCart(productToAdd){
        setCartItems(addCartItem(cartItems,productToAdd))
        setItemsCount(cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0))
    }
    return <CartContext.Provider value={{cartState,setCartState,addItemToCart,cartItems,itemsCount}}>{children}</CartContext.Provider>
}
