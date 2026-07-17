import { createContext, useContext, useState } from "react";

let ShoppingCartContext = createContext({});

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const totalCartItems = cartItems.reduce((total, item) => {
		const quantity = Number(item?.quantity);

		if (Number.isFinite(quantity) && quantity > 0) {
			return total + quantity;
		}

		return item?.menuItem ? total + 1 : total;
	}, 0);

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
		return matchedItem?.quantity || 0;
	}

	function increaseCartQuantity(menuItem) {
		setCartItems((currItems) => {
			const existingCartItem = currItems.find(
				(item) => item.menuItem.id === menuItem.id
			);

			if (existingCartItem == null) {
				return [...currItems, { menuItem: menuItem, quantity: 1 }];
			} else {
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
				totalCartItems,
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
