import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Burger Corner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div>
					<h1>Burger Corner</h1>

					<p>Here at the burger corner we want one thing... to make good burgers, plain and simple.</p>
					<p>If you're not happy with your burger your next one is on us, honest.</p>
				</div>
			</main>

			<footer />
		</div>
	);
}
