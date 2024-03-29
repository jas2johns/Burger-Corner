import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Burger Corner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className={styles["about"]}>
					<h1>Burger Corner</h1>
					<div className="glass">
						<p>
							Here at the burger corner we want one thing... to
							make good burgers, plain and simple.
						</p>
						<p>
							If you&apos;re not happy with your burger your next
							one is on us, honest.
						</p>
					</div>
				</div>
			</main>

			<footer />
		</div>
	);
}
