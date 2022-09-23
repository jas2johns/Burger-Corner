import styles from "../styles/MenuItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "react-bootstrap";

const MenuItem = (props) => {
	const { description, image, id } = props;

	const router = useRouter();

	const goToDetailPage = (id) => {
		// navigate to the detail page, passing the item Id
		router.push(`/itemDetail?itemId=${id}`);
	};

	return (
		<>
			<div className={styles["menu-item"]}>
				<Image src={"/" + image} width="250" height="250" />
				<br />
				<Button className="button" onClick={() => goToDetailPage(id)}>
					Add to Cart
				</Button>
				<br />
				<span>{description}</span>
			</div>
		</>
	);
};

export default MenuItem;
