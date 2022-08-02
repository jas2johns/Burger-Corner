import {createContext, useContext} from "react";

const ShoppingCartContext = createContext({});

ShoppingCartContext = {
    getItemQuantity: (id),
    increaseCartQuantity: (id),
    decreaseCartQuantity: (id),
    removeFromCart: (id),
}

function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
}

function increaseCartQuantity(id){
    setCartItems: (currItems => {
        if (currItems.find(item => item.id === id) == null){
            return [...currItems, {id, quantity: 1}]
        } else {
            return currItems.map(item => {
                if (item === id) {
                    return {...item, quantity: item.quantity + 1}
                }
            })
        }
    })
}

function decreaseCartQuantity(id){
    setCartItems: (currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1){
            return currItems.filter(item => item.id !== item)
        } else {
            return currItems.map(item => {
                if (item === id) {
                    return {...item, quantity: item.quantity - 1}
                }
            })
        }
    })
}

function removeFromCart(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }
export function useShoppinCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}) {
    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
