import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Burger Corner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Link href="menu">Menu</Link>
			</main>

			<footer></footer>
		</div>
	);
}
