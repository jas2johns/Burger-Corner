import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useShoppingCart } from '../context/ShoppingCartContext';
import Image from "next/image";
import data from "../data/menu";
import styles from "../styles/ItemDetail.module.css";

const ItemDetail = () => {
	const {
		increaseCartQuantity
	} = useShoppingCart();
	const router = useRouter();
	const [item, setItem] = useState();

	useEffect(() => {
		if (router.isReady) {
			const itemId = router.query.itemId;
			const menuItem = data.menuItems.find(
				(m) => m.id == parseInt(itemId)
			);

			setItem(menuItem);
		}
	}, [router.isReady]);

	const addToCart = (item) => {
		increaseCartQuantity(item);
	};

	return (
		<div className={styles["item-container"]}>
			<h1>The Detail Page</h1>
			<Image src={"/" + item?.image} width="250" height="250" />
			<h3>Item Description</h3>
			<p>{item?.description}</p>

			<button className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
		</div>
	);
};

export default ItemDetail;
