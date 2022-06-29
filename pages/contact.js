import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Burger Corner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div>
					<h1>Contact us at Burger Corner</h1>

					<p>We know you like our burgers, now what else can we for you?</p>
					<p>Did you want a job with us? To send us fan mail?</p>
                    <p>Or to cater that special event for you, well if its yes to any of the above,
                        you're in the right place 😁
                    </p>
				</div>
			</main>

			<footer />
		</div>
	);
}