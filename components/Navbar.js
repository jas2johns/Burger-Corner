import Link from 'next/link';
import styles from '../styles/navbar.module.css';
//import { Button, Card } from "react-bootstrap";
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-light">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
					<Link href="/">
						<a className="navbar-brand">Burger Corner</a>
					</Link>
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link href="/menu">
								<a className="nav-link">Menu!</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/shoppingCart">
								<a className="nav-link">My Cart!</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/about">
								<a className="nav-link">About Page</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/contact">
								<a className="nav-link">Contact Page</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
