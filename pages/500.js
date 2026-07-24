import Link from "next/link";
import Seo from "../components/Seo";
import styles from "../styles/Error.module.css";

export default function Custom500() {
	return (
		<>
			<Seo
				description="Something went wrong at Burger Corner. Return home and try again."
				image="/BURGER.jpg"
				path="/500"
				title="Server Error | Burger Corner"
			/>
			<main className={styles.page}>
				<section className={styles.panel} aria-labelledby="error-title">
					<p className={styles.eyebrow}>500</p>
					<h1 id="error-title">Something went wrong in the kitchen.</h1>
					<p>
						We hit a snag while preparing this page. Head back home and
						try again in a moment.
					</p>
					<div className={styles.actions}>
						<Link href="/">
							<a className={styles.primaryButton}>Return Home</a>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
