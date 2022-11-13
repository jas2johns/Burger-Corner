import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Burger Corner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className={styles["img"]}>
					<h1>Contact us at Burger Corner</h1>

					<div className="glass">
						<p>
							We know you like our burgers, now what else can we
							for you?
						</p>
						<p>Did you want a job with us? To send us fan mail?</p>
						<p>
							Or to cater that special event for you, well if its
							yes to any of the above, you&apos;re in the right
							place 😁
						</p>
					</div>
				</div>
			</main>

			<footer />
		</div>
	);
}
