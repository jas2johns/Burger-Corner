import styles from "../styles/MenuItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

const MenuItem = (props) => {
	console.log(props);
	const { addToCartMode } = props;
	const { description, image, id, backgroundColor } = props.menuItem;

	const { increaseCartQuantity } = useShoppingCart();
	const router = useRouter();

	const goToDetailPage = (menuItem) => {
		router.push(`/itemDetail?itemId=${menuItem.id}`);
	};

	const handleAddToCart = () => {
		if (addToCartMode === "navigate") {
			goToDetailPage(props.menuItem);
		} else {
			increaseCartQuantity(props.menuItem);
		}
	};

	return (
		<>
			<div
				className={styles["menu-item"]}
				style={{ backgroundColor: backgroundColor }}
			>
				<Image src={"/" + image} width="250" height="250" />
				<br />
				<Button className="button" onClick={handleAddToCart}>
					Add to Cart
				</Button>
				<br />
				<span>{description}</span>
			</div>
		</>
	);
};

export default MenuItem;
