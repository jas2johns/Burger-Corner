import { createContext, useContext, useState } from "react";

let ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function getCartItems() {
        return cartItems;
    }

    function getItemQuantity(menuItem) {
        return cartItems.find(item => item.menuItem.id === menuItem.id)?.quantity || 0
    }

    function increaseCartQuantity(menuItem) {
        setCartItems(currItems => {
            if (currItems.find(item => item.menuItem.id === menuItem.id) == null) {
                return [...currItems, { menuItem: menuItem, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.menuItem.id === menuItem.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(menuItem) {
        setCartItems(currItems => {
            if (currItems.find(item => item.menuItem.id === menuItem.id)?.quantity === 1) {
                return currItems.filter(item => item.menuItem.id !== menuItem.id)
            } else {
                return currItems.map(item => {
                    if (item.menuItem.id === menuItem.id) {
                        return { ...item, quantity: item.quantity - 1 }
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
    return (
        <ShoppingCartContext.Provider value={
            {
                getCartItems,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
