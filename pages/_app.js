import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeWrapper from "../components/ThemeWrapper";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
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
