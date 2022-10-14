import { createContext, useContext, useEffect, useState } from "react";

let ShoppingCartContext = createContext({});

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

//
export function ShoppingCartProvider({ children }) {
	//cartItems is the VAR and the setCart the "Callback func" that updates it
	const [cartItems, setCartItems] = useState([]);

	function getCartItems() {
		return cartItems;
	}

	function getItemQuantity(menuItem) {
		function menuItemMatches(item) {
			if (item.menuItem.id === menuItem.id) {
				return true;
			}
		}
		const matchedItem = cartItems.find(menuItemMatches);
		//the conditional below is looking for the quatitity property of the obj(matchedItem)
		// and if its undefined, it will return Zero
		return matchedItem?.quantity || 0;
	}

	function increaseCartQuantity(menuItem) {
		setCartItems((currItems) => {
			// if the array does NOT have a matching Obj.id it will return with a Qty of 1
			const existingCartItem = currItems.find(
				(item) => item.menuItem.id === menuItem.id
			);

			if (existingCartItem == null) {
				return [...currItems, { menuItem: menuItem, quantity: 1 }];
			}
			// if the array does have a matching Obj.id then it will increase it by 1
			else {
				return currItems.map((item) => {
					if (item.menuItem.id === menuItem.id) {
						return {
							...item,
							quantity: item.quantity + 1,
						};
					}
					return item;
				});
			}
		});
	}

	function decreaseCartQuantity(menuItem) {
		setCartItems((currItems) => {
			if (
				currItems.find((item) => item.menuItem.id === menuItem.id)
					?.quantity === 1
			) {
				return currItems.filter(
					(item) => item.menuItem.id !== menuItem.id
				);
			} else {
				return currItems.map((item) => {
					if (item.menuItem.id === menuItem.id) {
						return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				});
			}
		});
	}

	function removeFromCart(menuItem) {
		setCartItems((currItems) => {
			return currItems.filter((item) => item.menuItem.id !== menuItem.id);
		});
	}
	return (
		<ShoppingCartContext.Provider
			value={{
				cartItems,
				getCartItems,
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
