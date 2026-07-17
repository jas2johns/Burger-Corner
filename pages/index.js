import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles["page"]}>
			<Head>
				<title>Burger Corner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<section className={styles["home"]}>
					<div className={styles["homeContent"]}>
						<div className={styles["heroPanel"]}>
							<div className={styles["txt"]}>
								<h2>Welcome to Burger Corner!</h2>
								<p>
									Here at Burger Corner, we strive to make excellent burgers at a
									fair price.
									<br />
									Please try anything from our menu, I promise you wont regret it!
								</p>
							</div>

							<div className={styles["ctaWrap"]}>
								<Link href="/menu">
									<a className={styles["orderButton"]}>Order</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer />
		</div>
	);
}
