import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import styles from "../styles/About.module.css";

const features = [
	{
		icon: LunchDiningIcon,
		title: "Fresh Ingredients",
		description:
			"We prep crisp vegetables, toast soft buns, and build every burger with ingredients we would serve our own friends.",
	},
	{
		icon: OutdoorGrillIcon,
		title: "Cooked to Order",
		description:
			"Nothing sits around waiting. Patties hit the grill when your order comes in, so every burger reaches the table hot.",
	},
	{
		icon: SentimentSatisfiedAltIcon,
		title: "Friendly Service",
		description:
			"We keep things easy, welcoming, and honest. Good food tastes better when the people serving it care.",
	},
];

export default function About() {
	return (
		<div className={styles.page}>
			<Head>
				<title>About Burger Corner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<section className={styles.hero} aria-labelledby="about-title">
					<div className={styles.heroCopy}>
						<p className={styles.eyebrow}>About Burger Corner</p>
						<h1 id="about-title">Simple burgers. Done right.</h1>
						<p className={styles.lede}>
							Burger Corner is a neighborhood burger spot built
							around fresh ingredients, honest portions, and the
							kind of food people come back for after a long day.
						</p>
					</div>

					<div className={styles.heroImageFrame}>
						<Image
							alt="A freshly made Burger Corner cheeseburger"
							className={styles.heroImage}
							src="/BURGER.jpg"
							layout="fill"
							priority
							sizes="(max-width: 900px) 100vw, 46vw"
						/>
					</div>
				</section>

				<section className={styles.story} aria-labelledby="story-title">
					<div className={styles.sectionIntro}>
						<p className={styles.eyebrow}>Our Story</p>
						<h2 id="story-title">Started with a grill and a small crew.</h2>
					</div>
					<div className={styles.storyBody}>
						<div className={styles.storyImageFrame}>
							<Image
								alt="Friends sharing burgers and fries around a table"
								className={styles.storyImage}
								src="/menu.jpg"
								layout="fill"
								sizes="(max-width: 900px) 100vw, 42vw"
							/>
						</div>
						<div className={styles.storyCopy}>
							<p>
								Burger Corner began with a few friends who cared a
								little too much about getting a burger just right.
								They wanted a place where the menu was simple, the
								grill stayed busy, and nobody had to choose between
								good food and a relaxed meal.
							</p>
							<p>
								That idea still guides the kitchen. We season our
								patties well, keep the toppings fresh, and make each
								order when it is placed. No shortcuts, no fuss, just
								burgers, fries, and sides made with care.
							</p>
							<p>
								We like being the corner place: easy to stop by,
								familiar after a couple visits, and proud to feed
								the neighborhood well.
							</p>
						</div>
					</div>
				</section>

				<section
					className={styles.features}
					aria-labelledby="features-title"
				>
					<div className={styles.sectionIntro}>
						<p className={styles.eyebrow}>What Makes Us Different</p>
						<h2 id="features-title">The small things matter here.</h2>
					</div>

					<div className={styles.featureGrid}>
						{features.map((feature) => {
							const Icon = feature.icon;

							return (
								<article
									className={styles.featureCard}
									key={feature.title}
								>
									<span className={styles.iconWrap}>
										<Icon aria-hidden="true" />
									</span>
									<h3>{feature.title}</h3>
									<p>{feature.description}</p>
								</article>
							);
						})}
					</div>
				</section>

				<section className={styles.closing} aria-labelledby="visit-title">
					<div>
						<p className={styles.eyebrow}>Pull Up A Chair</p>
						<h2 id="visit-title">Hungry yet?</h2>
						<p>
							Take a look at the menu and find your regular. We
							will get the grill ready.
						</p>
					</div>
					<Link href="/menu">
						<a className={styles.menuButton}>Explore the Menu</a>
					</Link>
				</section>
			</main>
		</div>
	);
}
