import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/navbar.module.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useUser } from "@auth0/nextjs-auth0";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
	const { darkModeEnabled, setDarkModeEnabled } = useTheme();
	const { totalCartItems } = useShoppingCart();
	const userInfo = useUser();
	const router = useRouter();

	const navigationItems = [
		{ href: "/menu", label: "Menu" },
		{ href: "/shoppingCart", label: "My Cart", icon: true },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	];

	const isActivePath = (href) => router.pathname === href;
	const themeToggleLabel = darkModeEnabled
		? "Switch to Light Mode"
		: "Switch to Dark Mode";
	const displayedCartCount =
		totalCartItems > 99 ? "99+" : totalCartItems.toString();
	const cartAriaLabel =
		totalCartItems === 0
			? "Shopping cart, empty"
			: `Shopping cart, ${totalCartItems} ${
					totalCartItems === 1 ? "item" : "items"
			  }`;

	return (
		<nav
			className={`navbar navbar-expand-lg sticky-top ${
				styles.navbar
			} ${darkModeEnabled ? styles.dark : styles.light} ${
				darkModeEnabled ? "navbar-dark bg-dark" : "navbar-light bg-light"
			}`}
			aria-label="Primary navigation"
		>
			<div className={`container-fluid ${styles.navbarInner}`}>
				<Link href="/">
					<a
						className={styles.logoLink}
						aria-label="Burger Corner home"
					>
						<Image
							alt="Burger Corner logo"
							className={styles.logo}
							src="/Burger_Corner__1_-removebg-preview.png"
							width={42}
							height={42}
						/>
					</a>
				</Link>

				<button
					className={`navbar-toggler ${styles.toggler}`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#burgerCornerNavbar"
					aria-controls="burgerCornerNavbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className={`collapse navbar-collapse ${styles.navCollapse}`}
					id="burgerCornerNavbar"
				>
					<div className={styles.navContent}>
						<Link href="/">
							<a
								className={`${styles.brand} ${
									isActivePath("/") ? styles.activeLink : ""
								}`}
								aria-current={
									isActivePath("/") ? "page" : undefined
								}
							>
								Burger Corner
							</a>
						</Link>

						<ul className={`navbar-nav ${styles.navList}`}>
							{navigationItems.map((item) => (
								<li className="nav-item" key={item.href}>
									<Link href={item.href}>
										<a
											className={`${styles.navLink} ${
												isActivePath(item.href)
													? styles.activeLink
													: ""
											}`}
											aria-current={
												isActivePath(item.href)
													? "page"
													: undefined
											}
											aria-label={
												item.icon
													? cartAriaLabel
													: undefined
											}
										>
											{item.icon && (
												<span className={styles.cartIconWrap}>
													<ShoppingBagOutlinedIcon
														className={styles.cartIcon}
														fontSize="small"
														aria-hidden="true"
													/>
													{totalCartItems > 0 && (
														<span
															className={styles.cartBadge}
															aria-hidden="true"
														>
															{displayedCartCount}
														</span>
													)}
												</span>
											)}
											{item.label}
										</a>
									</Link>
								</li>
							))}
						</ul>

						<div className={styles.navActions}>
							<div className={styles.authAction}>
								{userInfo.user && (
									<>
										<span className={styles.greeting}>
											Hi, {userInfo.user?.given_name}
										</span>
										<Link href="/api/auth/logout">
											<a className={styles.navLink}>
												Logout
											</a>
										</Link>
									</>
								)}
								{!userInfo.user && (
									<Link href="/api/auth/login">
										<a className={styles.navLink}>Login</a>
									</Link>
								)}
							</div>

							<button
								aria-pressed={darkModeEnabled}
								className={styles.themeButton}
								onClick={() =>
									setDarkModeEnabled(!darkModeEnabled)
								}
								type="button"
							>
								{themeToggleLabel}
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
