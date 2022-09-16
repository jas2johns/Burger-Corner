import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);
	return (
		<ShoppingCartProvider>
			<div className="container" >
				<Navbar />
				<Component {...pageProps} />
			</div>
		</ShoppingCartProvider>
	);
}

export default MyApp;
