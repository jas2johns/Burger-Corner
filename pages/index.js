import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export default function Home() {
	return (
		<ShoppingCartProvider>
			<div>
				<Head>
					<title>Burger Corner</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main>
					{
						/* 
				content
				content
				content
				content
			
			*/
						<div className="home1">
							<Image
								src="/home1.jpg"
								alt="Burger and fries on a serving board"
								layout="fill"
							/>
						</div>
					}
				</main>

				<footer />
			</div>
		</ShoppingCartProvider>
	);
}
