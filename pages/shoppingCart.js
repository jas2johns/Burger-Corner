import { useEffect, useState, useContext } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import {RemoveIcon, AddIcon, DeleteOutlineIcon, ShoppingBagOutlinedIcon} from '@mui/icons-material/Remove';

const ShoppingCart = () => {
	const {
		cartItems,
		getCartItems,
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();
	//const [cartItems, setCartItems] = useState([]);
	//useEffect(() => {
	//	const items = getCartItems()
	//	setCartItems(items);
	//}, []);

	return (
		<>
			<h1>Your Order</h1>
			<div className="item-list">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Your Bag</th>
							<th scope="col">Quantity</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{cartItems.map((i) => (
							<tr key={i.menuItem.id}>
								<td>{i.menuItem.description}</td>
								<td>{i.quantity}</td>
								<td>
									<button className="btn btn-info"
										onClick={() =>
											increaseCartQuantity(i.menuItem)
										}
									>
										increase
									</button>
								</td>
								<td>
									<button className="btn btn-info"
										onClick={() =>
											decreaseCartQuantity(i.menuItem)
										}
									>
										decrease
									</button>
								</td>
								<td>
									<button className="btn btn-outline-danger"
										onClick={() =>
											removeFromCart(i.menuItem)
										}
									>
										Remove
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<button className="btn btn-primary">Checkout</button>
		</>
	);
};

export default ShoppingCart;
