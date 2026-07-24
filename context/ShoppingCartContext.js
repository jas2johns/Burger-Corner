import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { allDayMenu } from "../data/menu";

const CART_STORAGE_KEY = "burgerCornerCart";
const menuItems = allDayMenu.categories.flatMap((category) => category.items);
const menuItemById = new Map(menuItems.map((menuItem) => [menuItem.id, menuItem]));

let ShoppingCartContext = createContext({});

function readStoredCartItems() {
	try {
		const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

		if (!storedCart) {
			return [];
		}

		const parsedCart = JSON.parse(storedCart);

		if (!Array.isArray(parsedCart)) {
			return [];
		}

		const storedItemsById = parsedCart.reduce((validItems, item) => {
			const itemId = Number(item?.menuItem?.id ?? item?.id);
			const quantity = Number(item?.quantity);
			const menuItem = menuItemById.get(itemId);

			if (!menuItem || !Number.isFinite(quantity) || quantity <= 0) {
				return validItems;
			}

			const currentQuantity = validItems.get(itemId)?.quantity || 0;
			validItems.set(itemId, {
				menuItem,
				quantity: currentQuantity + Math.floor(quantity),
			});

			return validItems;
		}, new Map());

		return Array.from(storedItemsById.values());
	} catch {
		return [];
	}
}

function saveCartItems(cartItems) {
	try {
		const storedItems = cartItems.map((item) => ({
			id: item.menuItem.id,
			quantity: item.quantity,
		}));

		window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storedItems));
	} catch {
		return;
	}
}

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [hasLoadedStoredCart, setHasLoadedStoredCart] = useState(false);
	const totalCartItems = useMemo(() => {
		return cartItems.reduce((total, item) => {
			const quantity = Number(item?.quantity);

			if (Number.isFinite(quantity) && quantity > 0) {
				return total + quantity;
			}

			return item?.menuItem ? total + 1 : total;
		}, 0);
	}, [cartItems]);

	useEffect(() => {
		setCartItems(readStoredCartItems());
		setHasLoadedStoredCart(true);
	}, []);

	useEffect(() => {
		if (hasLoadedStoredCart) {
			saveCartItems(cartItems);
		}
	}, [cartItems, hasLoadedStoredCart]);

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
