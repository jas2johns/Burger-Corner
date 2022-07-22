import Link from "next/link";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/menu">
				<a>Menu!</a>
			</Link>
			<Link href="/shoppingCart">
				<a>My Cart</a>
			</Link>
			<Link href="/about">
				<a>About Page</a>
			</Link>
			<Link href="/contact">
				<a>Contact Page</a>
			</Link>
		</nav>
	);
};

export default Navbar;
