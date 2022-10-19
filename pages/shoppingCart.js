import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useTheme } from "../context/ThemeContext";
import { Remove, DeleteOutline, Add } from "@mui/icons-material";

const ThankYouComponent = () => {
	return <div>Thanks for shopping with us</div>;
};

const ShoppingCart = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		cartItems,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();
	const { darkModeEnabled } = useTheme();
	//const [cartItems, setCartItems] = useState([]);
	//useEffect(() => {
	//	const items = getCartItems()
	//	setCartItems(items);
	//}, []);

	const handleClick = () => {
		// TODO: process the checkout

		setIsSubmitted(true);
	};

	return (
		<>
			{isSubmitted && <ThankYouComponent />}
			{!isSubmitted && (
				<>
					<h1>Your Bag </h1>
					<div className="item-list">
						<table
							className={`table ${
								darkModeEnabled === true ? "table-dark" : ""
							}`}
						>
							<thead>
								<tr>
									<th scope="col">Your Order</th>
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
											<button
												className="btn btn-outline-success"
												onClick={() =>
													decreaseCartQuantity(
														i.menuItem
													)
												}
											>
												<Remove />
											</button>
										</td>
										<td>
											<button
												className="btn btn-outline-success"
												onClick={() =>
													increaseCartQuantity(
														i.menuItem
													)
												}
											>
												<Add />
											</button>
										</td>
										<td>
											<button
												className="btn btn-outline-danger"
												onClick={() =>
													removeFromCart(i.menuItem)
												}
											>
												<DeleteOutline />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						{/* <Image
					src="https://images.pexels.com/photos/6956890/pexels-photo-6956890.jpeg"
					alt="brown paper bag"
					layout="fill"
					objectFit="contain"
				/> */}
					</div>
					<button onClick={handleClick} className="btn btn-primary">
						Checkout
					</button>
				</>
			)}
		</>
	);
};

export default ShoppingCart;
