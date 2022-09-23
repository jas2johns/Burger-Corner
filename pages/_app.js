import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { ThemeProvider } from "../context/ThemeContext";
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);
	return (
		<ThemeProvider>
			<ShoppingCartProvider>
				<Navbar />
				<div className="container">
					<Component {...pageProps} />
				</div>
			</ShoppingCartProvider>
		</ThemeProvider>
	);
}

export default MyApp;
