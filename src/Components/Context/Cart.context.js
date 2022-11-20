import React from 'react'

function addCartItem(cartItems, productToAdd){
    
    const itemExists = cartItems.find(item =>item.id === productToAdd.id)

    if(itemExists){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id? {...cartItem, quantity:cartItem.quantity+1} : cartItem)
    }

    return [...cartItems,{...productToAdd, quantity: 1}]
}

function removeCartItem(cartItems,itemToRemove){
    const itemExists = cartItems.find(item =>item.id === itemToRemove.id)

    if(itemExists && itemToRemove.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }

    if(itemExists){
        return cartItems.map(cartItem => cartItem.id === itemToRemove.id? {...cartItem, quantity:cartItem.quantity-1} : cartItem)
    }
}


    function clearCartItem(cartItems, cartItemToClear){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
    }

export const CartContext = React.createContext(
    {cartState: false,
    setCartState: ()=>null,
    cartItems:[],
    addItemToCart:()=>{},
    itemsCount:0,
    removeItemFromCart:()=>{},
    cearItemFromCart:()=>{},
    totalCost:0,
}
)


export function CartProvider({children}) {
    const [cartState,setCartState] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])
    const [itemsCount, setItemsCount] = React.useState(0)
    const [totalCost, setTotalCost] = React.useState(0)
    React.useEffect(()=>{
        setItemsCount(cartItems.reduce((total,cartItem)=> total + cartItem.quantity,0))
    },[cartItems])


    React.useEffect(()=>{
        setTotalCost(cartItems.reduce((total,cartItem)=> total + cartItem.quantity*cartItem.price,0))
    },[cartItems])


    function addItemToCart(productToAdd){
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    function removeItemToCart(cartItemToRemove){
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }

    function clearItemFromCart(cartItemToClear){
        setCartItems(clearCartItem(cartItems,cartItemToClear))

    }

    return <CartContext.Provider value={{cartState,setCartState,addItemToCart,cartItems,itemsCount,removeItemToCart,clearItemFromCart, totalCost}}>{children}</CartContext.Provider>
}
