import { useEffect, useState, useContext } from "react";
import { useShoppingCart } from '../context/ShoppingCartContext';

const ShoppingCart = () => {
	const { getCartItems } = useShoppingCart();
	const [cartItems, setCartItems] = useState([]);
	useEffect(() => {
		const items = getCartItems()
		setCartItems(items);
	}, []);

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
							<tr>
								<td>
									{i.menuItem.description}
								</td>
								<td>
									{i.quantity}
								</td>
								<td>
									<button>Remove</button>
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
