import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeWrapper from "../components/ThemeWrapper";

function MyApp({ Component, pageProps }) {
	+useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);
	return (
		<ThemeProvider>
			<ShoppingCartProvider>
				<Navbar />
				<ThemeWrapper>
					<Component {...pageProps} />
				</ThemeWrapper>
			</ShoppingCartProvider>
		</ThemeProvider>
	);
}

export default MyApp;
