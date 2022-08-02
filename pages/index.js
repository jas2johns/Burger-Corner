import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

export default function Home() {
	return (
		<ShoppingCartProvider>
			<div>
				<Head>
					<title>Burger Corner</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main>{/* 
				content
				content
				content
				content
			
			*/}</main>

				<footer />
			</div>
		</ShoppingCartProvider>
	);
}
