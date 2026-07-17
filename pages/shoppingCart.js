import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Add, DeleteOutline, Remove } from "@mui/icons-material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getMenuItemVisual } from "../data/menuImages";
import styles from "../styles/Cart.module.css";

const EmptyCart = () => {
	return (
		<section className={styles.emptyState} aria-labelledby="empty-cart-heading">
			<p className={styles.eyebrow}>Your Burger Corner order</p>
			<h1 id="empty-cart-heading">Your cart is empty</h1>
			<p>Add a burger, side, or drink to get your order started.</p>
			<Link href="/menu">
				<a className={styles.primaryLink}>Browse the Menu</a>
			</Link>
		</section>
	);
};

const ThankYou = () => {
	return (
		<section className={styles.emptyState} aria-labelledby="checkout-heading">
			<p className={styles.eyebrow}>Order received</p>
			<h1 id="checkout-heading">Thanks for shopping with us</h1>
			<p>Your Burger Corner order has been submitted.</p>
			<Link href="/menu">
				<a className={styles.primaryLink}>Order More</a>
			</Link>
		</section>
	);
};

const CartItem = ({
	cartItem,
	decreaseCartQuantity,
	increaseCartQuantity,
	removeFromCart,
}) => {
	const { menuItem, quantity } = cartItem;
	const visual = getMenuItemVisual(menuItem);

	return (
		<article className={styles.cartItem}>
			<div className={styles.itemImageFrame}>
				<Image
					alt={visual.alt}
					className={styles.itemImage}
					src={visual.src}
					style={{
						objectPosition: visual.position,
						transform: `scale(${visual.scale})`,
						transformOrigin: visual.transformOrigin,
					}}
					width={180}
					height={135}
				/>
			</div>

			<div className={styles.itemInfo}>
				<div className={styles.itemCopy}>
					<h2>{menuItem.name}</h2>
					<p>{menuItem.description}</p>
				</div>

				<div className={styles.itemControls}>
					<div
						className={styles.quantityControls}
						aria-label={`${menuItem.name} quantity controls`}
					>
						<button
							aria-label={`Decrease ${menuItem.name} quantity`}
							className={styles.quantityButton}
							onClick={() => decreaseCartQuantity(menuItem)}
							type="button"
						>
							<Remove fontSize="small" aria-hidden="true" />
						</button>
						<span
							className={styles.quantityValue}
							aria-label={`${quantity} ${
								quantity === 1 ? "item" : "items"
							} in cart`}
						>
							{quantity}
						</span>
						<button
							aria-label={`Increase ${menuItem.name} quantity`}
							className={styles.quantityButton}
							onClick={() => increaseCartQuantity(menuItem)}
							type="button"
						>
							<Add fontSize="small" aria-hidden="true" />
						</button>
					</div>

					<button
						aria-label={`Remove ${menuItem.name} from cart`}
						className={styles.removeButton}
						onClick={() => removeFromCart(menuItem)}
						type="button"
					>
						<DeleteOutline fontSize="small" aria-hidden="true" />
						Remove
					</button>
				</div>
			</div>
		</article>
	);
};

const ShoppingCart = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		cartItems,
		decreaseCartQuantity,
		increaseCartQuantity,
		removeFromCart,
		totalCartItems,
	} = useShoppingCart();
	const uniqueProductCount = cartItems.length;

	const handleCheckout = () => {
		setIsSubmitted(true);
	};

	if (cartItems.length === 0) {
		return (
			<main className={styles.cartPage}>
				<EmptyCart />
			</main>
		);
	}

	if (isSubmitted) {
		return (
			<main className={styles.cartPage}>
				<ThankYou />
			</main>
		);
	}

	return (
		<main className={styles.cartPage}>
			<div className={styles.cartShell}>
				<section
					className={styles.cartItemsSection}
					aria-labelledby="cart-heading"
				>
					<p className={styles.eyebrow}>Your Burger Corner order</p>
					<h1 id="cart-heading">Your Cart</h1>
					<p className={styles.intro}>
						Review your order, adjust quantities, and check out when
						you&apos;re ready.
					</p>

					<div className={styles.cartList}>
						{cartItems.map((cartItem) => (
							<CartItem
								cartItem={cartItem}
								decreaseCartQuantity={decreaseCartQuantity}
								increaseCartQuantity={increaseCartQuantity}
								key={cartItem.menuItem.id}
								removeFromCart={removeFromCart}
							/>
						))}
					</div>
				</section>

				<aside className={styles.summary} aria-labelledby="summary-heading">
					<p className={styles.eyebrow}>Order summary</p>
					<h2 id="summary-heading">Ready when you are.</h2>

					<div className={styles.summaryRows}>
						<div className={styles.summaryRow}>
							<span>Total items</span>
							<strong>{totalCartItems}</strong>
						</div>
						<div className={styles.summaryRow}>
							<span>Unique products</span>
							<strong>{uniqueProductCount}</strong>
						</div>
					</div>

					<button
						className={styles.checkoutButton}
						onClick={handleCheckout}
						type="button"
					>
						Proceed to Checkout
					</button>

					<Link href="/menu">
						<a className={styles.continueLink}>Continue Shopping</a>
					</Link>
				</aside>
			</div>
		</main>
	);
};

export default ShoppingCart;
