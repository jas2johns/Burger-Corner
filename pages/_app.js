import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

function MyApp({ Component, pageProps }) {
	return (
		<ShoppingCartProvider>
			<Navbar />
			<Component {...pageProps} />
		</ShoppingCartProvider>
	);
}

export default MyApp;
