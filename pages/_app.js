// import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeWrapper from "../components/ThemeWrapper";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return (
		<UserProvider>
			<ThemeProvider>
				<ShoppingCartProvider>
					<Navbar />
					<ThemeWrapper>
						<Component {...pageProps} />
					</ThemeWrapper>
				</ShoppingCartProvider>
			</ThemeProvider>
		</UserProvider>
	);
}

export default MyApp;
