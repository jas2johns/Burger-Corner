import { useEffect, useState, useContext } from "react";
import { useShoppingCart } from '../context/ShoppingCartContext';

const ShoppingCart = () => {
	const { cartItems,
		getCartItems,
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart } = useShoppingCart();
	//const [cartItems, setCartItems] = useState([]);
	//useEffect(() => {
	//	const items = getCartItems()
	//	setCartItems(items);
	//}, []);

	return (
		<>
			<h1>Your Cart</h1>
			<div className="item-list">
				<table>
					<thead>
						<tr>
							<th>Items</th>
							<th>Quantity</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{cartItems.map(i =>
							<tr key={i.menuItem.id}>
								<td>
									
									{i.menuItem.description}
								</td>
								<td>
									{i.quantity}
								</td>
								<td>
									<button onClick={() => increaseCartQuantity(i.menuItem.id)}>increase</button>
								</td>
								<td>
									<button onClick={() => decreaseCartQuantity(i.menuItem.id)}>decrease</button>
								</td>
								<td>
									<button onClick={() => removeFromCart(i.menuItem.id)}>Remove</button>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			<button>Checkout</button>
		</>
	);
};

export default ShoppingCart;
