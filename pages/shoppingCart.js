import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Add, DeleteOutline, Remove } from "@mui/icons-material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getMenuItemVisual } from "../data/menuImages";
import Seo from "../components/Seo";
import { formatCurrency } from "../utilities/formatCurrency";
import styles from "../styles/Cart.module.css";

const TAX_RATE = 0.08;

const getCartSubtotal = (cartItems) => {
	return cartItems.reduce((total, cartItem) => {
		const itemPrice = Number(cartItem?.menuItem?.price) || 0;
		const quantity = Number(cartItem?.quantity) || 0;

		return total + itemPrice * quantity;
	}, 0);
};

const EmptyCart = () => {
	const emptyVisual = getMenuItemVisual({ id: 2, name: "Corner Burger" });

	return (
		<section className={styles.emptyState} aria-labelledby="empty-cart-heading">
			<div className={styles.emptyCopy}>
				<p className={styles.eyebrow}>Your Burger Corner order</p>
				<h1 id="empty-cart-heading">Your cart is empty.</h1>
				<p>
					Build your order from the menu and come back when you have a
					burger, side, or shake ready to go.
				</p>
				<Link href="/menu">
					<a className={styles.primaryLink}>Browse the Menu</a>
				</Link>
			</div>
			<div className={styles.emptyImageFrame} aria-hidden="true">
				<Image
					alt=""
					className={styles.emptyImage}
					src={emptyVisual.src}
					style={{
						objectPosition: emptyVisual.position,
						transform: `scale(${emptyVisual.scale})`,
						transformOrigin: emptyVisual.transformOrigin,
					}}
					width={520}
					height={390}
				/>
			</div>
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
	const unitPrice = Number(menuItem.price) || 0;
	const itemSubtotal = unitPrice * quantity;

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
					<p className={styles.itemPrice}>{formatCurrency(unitPrice)} each</p>
				</div>

				<div className={styles.itemControls}>
					<div
						className={styles.quantityControls}
						aria-label={`${menuItem.name} quantity controls`}
					>
						<button
							aria-label={`Decrease quantity of ${menuItem.name}`}
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
							aria-live="polite"
						>
							{quantity}
						</span>
						<button
							aria-label={`Increase quantity of ${menuItem.name}`}
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

					<p className={styles.itemSubtotal}>
						<span>Item subtotal</span>
						<strong>{formatCurrency(itemSubtotal)}</strong>
					</p>
				</div>
			</div>
		</article>
	);
};

const ShoppingCart = () => {
	const [cartStatus, setCartStatus] = useState("");
	const [isCheckoutNoticeVisible, setIsCheckoutNoticeVisible] = useState(false);
	const {
		cartItems,
		decreaseCartQuantity,
		increaseCartQuantity,
		removeFromCart,
		totalCartItems,
	} = useShoppingCart();
	const uniqueProductCount = cartItems.length;
	const itemSubtotal = getCartSubtotal(cartItems);
	const estimatedTax = itemSubtotal * TAX_RATE;
	const estimatedTotal = itemSubtotal + estimatedTax;

	const announceCartChange = (message) => {
		setCartStatus(message);
	};

	const handleIncreaseCartQuantity = (menuItem) => {
		increaseCartQuantity(menuItem);
		announceCartChange(`Increased quantity of ${menuItem.name}.`);
	};

	const handleDecreaseCartQuantity = (menuItem) => {
		decreaseCartQuantity(menuItem);
		announceCartChange(`Decreased quantity of ${menuItem.name}.`);
	};

	const handleRemoveFromCart = (menuItem) => {
		removeFromCart(menuItem);
		announceCartChange(`Removed ${menuItem.name} from your cart.`);
	};

	const handleCheckout = () => {
		setIsCheckoutNoticeVisible(true);
		announceCartChange("Checkout notice opened.");
	};

	if (cartItems.length === 0) {
		return (
			<>
				<Seo
					description="Review your Burger Corner order before checkout."
					image="/BURGER.jpg"
					path="/shoppingCart"
					title="Shopping Cart | Burger Corner"
				/>
				<main className={styles.cartPage}>
					<EmptyCart />
				</main>
			</>
		);
	}

	return (
		<>
			<Seo
				description="Review your Burger Corner order before checkout."
				image="/BURGER.jpg"
				path="/shoppingCart"
				title="Shopping Cart | Burger Corner"
			/>
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
						<p className={styles.cartStatus} aria-live="polite">
							{cartStatus}
						</p>

						<div className={styles.cartList}>
							{cartItems.map((cartItem) => (
								<CartItem
									cartItem={cartItem}
									decreaseCartQuantity={handleDecreaseCartQuantity}
									increaseCartQuantity={handleIncreaseCartQuantity}
									key={cartItem.menuItem.id}
									removeFromCart={handleRemoveFromCart}
								/>
							))}
						</div>
					</section>

					<aside className={styles.summary} aria-labelledby="summary-heading">
						<p className={styles.eyebrow}>Order summary</p>
						<h2 id="summary-heading">Ready when you are.</h2>

						<div className={styles.summaryRows}>
							<div className={styles.summaryRow}>
								<span>Number of items</span>
								<strong>{totalCartItems}</strong>
							</div>
							<div className={styles.summaryRow}>
								<span>Item subtotal</span>
								<strong>{formatCurrency(itemSubtotal)}</strong>
							</div>
							<div className={styles.summaryRow}>
								<span>Estimated tax (8%)</span>
								<strong>{formatCurrency(estimatedTax)}</strong>
							</div>
							<div className={`${styles.summaryRow} ${styles.totalRow}`}>
								<span>Estimated total</span>
								<strong>{formatCurrency(estimatedTotal)}</strong>
							</div>
						</div>

						<p className={styles.summaryNote}>
							{uniqueProductCount}{" "}
							{uniqueProductCount === 1 ? "menu item" : "menu items"} in
							your cart. Taxes are estimated for this demo.
						</p>

						<button
							className={styles.checkoutButton}
							onClick={handleCheckout}
							type="button"
						>
							Proceed to Checkout
						</button>

						{isCheckoutNoticeVisible && (
							<div
								className={styles.checkoutNotice}
								role="status"
								aria-live="polite"
							>
								<p>
									This project is a portfolio demonstration. Checkout is not
									implemented.
								</p>
								<button
									aria-label="Dismiss checkout notice"
									className={styles.noticeDismiss}
									onClick={() => setIsCheckoutNoticeVisible(false)}
									type="button"
								>
									Dismiss
								</button>
							</div>
						)}

						<Link href="/menu">
							<a className={styles.continueLink}>Continue Shopping</a>
						</Link>
					</aside>
				</div>
			</main>
		</>
	);
};

export default ShoppingCart;
