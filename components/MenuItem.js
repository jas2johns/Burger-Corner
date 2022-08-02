import styles from "../styles/MenuItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const MenuItem = (props) => {
	const { description, image, id } = props;

	const router = useRouter();

	const goToDetailPage = (id) => {
		// navigate to the detail page, passing the item Id
		router.push(`/itemDetail?itemId=${id}`);
	};

	return (
		<>
			<div>
				<Image src={"/" + image} width="250" height="250" />
				<button className="button" onClick={() => goToDetailPage(id)}>
					Order
				</button>
				<br />
				<span>{description}</span>
			</div>
			<button className={styles.button}>Order</button>
		</>
	);
};

export default MenuItem;
