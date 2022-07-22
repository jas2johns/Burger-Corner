import { useEffect, useState } from "react";

const ShoppingCart = () => {
	const [cartItems, setCartItems] = useState();

	useEffect(() => {
		// TODO: Get the cart items and set them with setCartItems()
	}, []);

	return (
		<>
			<h1>Your Cart</h1>
			<div className="item-list">
				<table>
					<thead>
						<tr>
							<th>Items?</th>
						</tr>
					</thead>
					<tbody>{/* For each item in cart, create a tr */}</tbody>
				</table>
			</div>
			<button>Checkout</button>
		</>
	);
};

export default ShoppingCart;
