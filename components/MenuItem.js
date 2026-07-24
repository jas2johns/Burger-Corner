import styles from "../styles/MenuItem.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getMenuItemVisual } from "../data/menuImages";
import { formatCurrency } from "../utilities/formatCurrency";

const MenuItem = (props) => {
	const { addToCartMode } = props;
	const { description, name, price } = props.menuItem;

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

	const isNavigateMode = addToCartMode === "navigate";
	const actionLabel = isNavigateMode ? "View Item" : "Add to Cart";
	const actionAriaLabel = isNavigateMode
		? `View ${name}`
		: `Add ${name} to cart`;
	const visual = getMenuItemVisual(props.menuItem);
	const imageClassName = `${styles["item-image"]} ${
		styles[
			visual.kind === "photo"
				? "productPhoto"
				: "productIllustration"
		]
	}`;

	return (
		<article className={styles["menu-item"]}>
			<div className={styles["image-stage"]}>
				<Image
					alt={visual.alt}
					className={imageClassName}
					src={visual.src}
					style={{
						objectPosition: visual.position,
						transform: `scale(${visual.scale})`,
						transformOrigin: visual.transformOrigin,
					}}
					width={360}
					height={260}
				/>
			</div>

			<div className={styles["item-content"]}>
				<div className={styles["item-copy"]}>
					<div className={styles["item-heading"]}>
						{name && <h3>{name}</h3>}
						{Number.isFinite(price) && (
							<p className={styles["price"]}>
								{formatCurrency(price)}
							</p>
						)}
					</div>
					<p className={styles["description"]}>{description}</p>
				</div>

				<button
					aria-label={actionAriaLabel}
					className={styles["action"]}
					onClick={handleAddToCart}
					type="button"
				>
					{actionLabel}
				</button>
			</div>
		</article>
	);
};

export default MenuItem;
