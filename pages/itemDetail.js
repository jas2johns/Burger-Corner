import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Add, Remove } from "@mui/icons-material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { allDayMenu } from "../data/menu";
import { getMenuItemVisual } from "../data/menuImages";
import styles from "../styles/ItemDetail.module.css";

const menuItems = allDayMenu.categories.flatMap((category) => category.items);

const ItemDetail = () => {
	const router = useRouter();
	const {
		decreaseCartQuantity,
		getItemQuantity,
		increaseCartQuantity,
	} = useShoppingCart();

	const itemId = router.query.itemId;
	const item = useMemo(() => {
		if (!router.isReady) {
			return undefined;
		}

		const parsedItemId = Number.parseInt(itemId, 10);

		if (!Number.isFinite(parsedItemId)) {
			return null;
		}

		return (
			menuItems.find((menuItem) => menuItem.id === parsedItemId) || null
		);
	}, [itemId, router.isReady]);

	if (!router.isReady) {
		return (
			<main className={styles.page}>
				<section className={styles.recovery} aria-live="polite">
					<p className={styles.eyebrow}>Burger Corner</p>
					<h1>Loading your order...</h1>
				</section>
			</main>
		);
	}

	if (!item) {
		return (
			<main className={styles.page}>
				<section className={styles.recovery}>
					<p className={styles.eyebrow}>Burger Corner</p>
					<h1>We couldn&apos;t find that item.</h1>
					<p>
						The menu item may have moved, or the link may be incomplete.
						Head back to the menu to keep building your order.
					</p>
					<Link href="/menu">
						<a className={styles.menuLink}>Back to Menu</a>
					</Link>
				</section>
			</main>
		);
	}

	const visual = getMenuItemVisual(item);
	const quantity = getItemQuantity(item);
	const hasQuantity = quantity > 0;

	const handleDecreaseQuantity = () => {
		if (hasQuantity) {
			decreaseCartQuantity(item);
		}
	};

	const handleIncreaseQuantity = () => {
		increaseCartQuantity(item);
	};

	return (
		<main className={styles.page}>
			<section
				className={styles.product}
				aria-labelledby="product-detail-heading"
			>
				<div className={styles.mediaColumn}>
					<div className={styles.imageFrame}>
						<Image
							alt={visual.alt}
							className={styles.productImage}
							src={visual.src}
							style={{
								objectPosition: visual.position,
								transform: `scale(${visual.scale})`,
								transformOrigin: visual.transformOrigin,
							}}
							width={900}
							height={675}
							priority
						/>
					</div>
				</div>

				<div className={styles.copyColumn}>
					<p className={styles.eyebrow}>Made fresh at Burger Corner</p>
					<h1 id="product-detail-heading">{item.name}</h1>
					<p className={styles.description}>{item.description}</p>

					<div className={styles.orderPanel}>
						<div className={styles.quantityHeader}>
							<span>Quantity in cart</span>
							<strong>{quantity}</strong>
						</div>

						<div
							className={styles.quantityControls}
							aria-label={`${item.name} quantity controls`}
						>
							<button
								aria-label={`Decrease ${item.name} quantity`}
								className={styles.quantityButton}
								disabled={!hasQuantity}
								onClick={handleDecreaseQuantity}
								type="button"
							>
								<Remove fontSize="small" aria-hidden="true" />
							</button>
							<span
								className={styles.quantityValue}
								aria-live="polite"
								aria-label={`${quantity} ${
									quantity === 1 ? "item" : "items"
								} in cart`}
							>
								{quantity}
							</span>
							<button
								aria-label={`Increase ${item.name} quantity`}
								className={styles.quantityButton}
								onClick={handleIncreaseQuantity}
								type="button"
							>
								<Add fontSize="small" aria-hidden="true" />
							</button>
						</div>

						<button
							className={styles.addButton}
							onClick={handleIncreaseQuantity}
							type="button"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ItemDetail;
