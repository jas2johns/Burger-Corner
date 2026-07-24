import Link from "next/link";
import Seo from "../components/Seo";
import styles from "../styles/Error.module.css";

export default function Custom404() {
	return (
		<>
			<Seo
				description="The Burger Corner page you requested could not be found. Return home or browse the menu."
				image="/BURGER.jpg"
				path="/404"
				title="Page Not Found | Burger Corner"
			/>
			<main className={styles.page}>
				<section className={styles.panel} aria-labelledby="error-title">
					<p className={styles.eyebrow}>404</p>
					<h1 id="error-title">Looks like this burger got lost.</h1>
					<p>
						The page you asked for could not be found. It may have moved,
						or the link may need another look.
					</p>
					<div className={styles.actions}>
						<Link href="/">
							<a className={styles.primaryButton}>Back to Home</a>
						</Link>
						<Link href="/menu">
							<a className={styles.secondaryButton}>View the Menu</a>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
