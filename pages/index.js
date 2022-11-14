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
					
						<div className={styles["home"]}>
							<div className={styles["homeContent"]}>
							<div className="glass">
									<div className={styles["txt"]}>
									<h2>Welcome to Burger Corner!</h2>
									<p>
										Here at Burger Corner, we strive to make excellent burgers at 
										a fair price.
										<br/>
										Please try anything from our menu, I promise you wont regret it!

									</p>							
								</div>
							</div>
							<span>
							<Link href="/menu">
								<a>
								<button type="button" className="btn btn-primary btn-lg">
									<h3>Order</h3>
								</button>
								</a>
							</Link>
							</span>
							</div>

						</div>
					
				</main>

				<footer />
			</div>
		</ShoppingCartProvider>
	);
}
