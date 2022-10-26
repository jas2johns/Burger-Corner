import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import MenuItem from "../components/MenuItem";
import { allDayMenu } from "../data/menu";
import styles from "../styles/ItemDetail.module.css";

const ItemDetail = () => {
	const router = useRouter();
	const [item, setItem] = useState();

	useEffect(() => {
		if (router.isReady) {
			const itemId = router.query.itemId;

			for (let i = 0; i < allDayMenu.categories.length; i++) {
				const category = allDayMenu.categories[i];

				for (let j = 0; j < category.items.length; j++) {
					const menuItem = allDayMenu.categories[i].items[j];

					if (menuItem.id === parseInt(itemId)) {
						setItem(menuItem);
					}
				}
			}
		}
	}, [router.isReady]);

	return (
		<div className={styles["item-container"]}>
			<h1>The Detail Page</h1>
			{item && <MenuItem addToCartMode="quantity" menuItem={item} />}
		</div>
	);
};

export default ItemDetail;
