import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/navbar.module.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
	const { darkModeEnabled, setDarkModeEnabled } = useTheme();
	const userInfo = useUser();
	console.log("user", userInfo?.user);

	return (
		<nav
			className={`navbar navbar-expand-lg navbar sticky-top ${
				darkModeEnabled === true ? "navbar-dark bg-dark" : "bg-light"
			}`}
		>
			{/* // <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<Link className={`${styles["logo"]}`} href="/">
					<a>
						<img
							className={`${styles["logo"]}`}
							src="/Burger_Corner__1_-removebg-preview.png"
						/>
					</a>
				</Link>
				<div
					className="collapse navbar-collapse nav nav-stacked"
					id="navbarTogglerDemo01"
				>
					<div className="mx-auto d-flex flex-column flex-lg-row flex-fill align-items-center">
						<Link href="/">
							<a className="navbar-brand m0">Burger Corner</a>
						</Link>
						<ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center justify-content-md-evenly flex-fill">
							<li className="nav-item">
								<Link href="/menu">
									<a className="nav-link">Menu</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/shoppingCart">
									<a className="nav-link">
										<ShoppingBagOutlinedIcon />
										My Cart
									</a>
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
							<li className="nav-item">
								{userInfo.user && (
									<>
										Hi, {userInfo.user?.given_name}! &nbsp;
										<Link href="/api/auth/logout">
											<a>Logout</a>
										</Link>
									</>
								)}
								{!userInfo.user && (
									<Link href="/api/auth/login">
										<a>Login</a>
									</Link>
								)}
							</li>
						</ul>

						<div className="form-check form-switch">
							<input
								checked={darkModeEnabled}
								className="form-check-input"
								onChange={() =>
									setDarkModeEnabled(!darkModeEnabled)
								}
								type="checkbox"
								role="switch"
								id="flexSwitchCheckDefault"
							/>
							<label
								className={`form-check-label ${
									darkModeEnabled ? "text-light bg-dark" : ""
								}`}
								htmlFor="flexSwitchCheckDefault"
							>
								Dark Mode
							</label>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
