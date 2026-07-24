import Image from "next/image";
import Link from "next/link";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { allDayMenu } from "../data/menu";
import { getMenuItemVisual } from "../data/menuImages";
import Seo, { homeStructuredData } from "../components/Seo";
import { formatCurrency } from "../utilities/formatCurrency";
import styles from "../styles/Home.module.css";

const menuItems = allDayMenu.categories.flatMap((category) => category.items);
const featuredItemIds = [1, 2, 9];

const values = [
	{
		icon: LunchDiningIcon,
		title: "Fresh Ingredients",
		description: "Crisp toppings, toasted buns, and the kind of simple details that make a burger worth slowing down for.",
	},
	{
		icon: OutdoorGrillIcon,
		title: "Cooked to Order",
		description: "Patties go on the grill when you order, so every burger reaches the table hot and ready.",
	},
	{
		icon: SentimentSatisfiedAltIcon,
		title: "Friendly Service",
		description: "Easygoing counter service, honest portions, and a neighborhood feel from the first visit.",
	},
];

const featuredItems = featuredItemIds
	.map((itemId) => menuItems.find((menuItem) => menuItem.id === itemId))
	.filter(Boolean);

export default function Home() {
	return (
		<div className={styles.page}>
			<Seo
				description="Burger Corner serves fresh, made-to-order burgers, crispy sides, and neighborhood favorites in a relaxed local setting."
				image="/BURGER.jpg"
				path="/"
				structuredData={homeStructuredData}
				title="Burger Corner | Fresh Burgers Made to Order"
			/>

			<main className={styles.main}>
				<section className={styles.hero} aria-labelledby="home-title">
					<div className={styles.heroCopy}>
						<p className={styles.eyebrow}>Welcome to Burger Corner</p>
						<h1 id="home-title">Big flavor. No shortcuts.</h1>
						<p className={styles.lede}>
							Burgers cooked when you order, fresh toppings on
							soft toasted buns, and a relaxed neighborhood spot
							to settle in for a good meal.
						</p>
						<div className={styles.heroActions}>
							<Link href="/menu">
								<a className={styles.primaryButton}>View the Menu</a>
							</Link>
							<Link href="/about">
								<a className={styles.secondaryButton}>Our Story</a>
							</Link>
						</div>
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

				<section className={styles.favorites} aria-labelledby="favorites-title">
					<div className={styles.sectionHeader}>
						<p className={styles.eyebrow}>Fresh from the grill</p>
						<h2 id="favorites-title">Customer favorites</h2>
					</div>

					<div className={styles.favoriteGrid}>
						{featuredItems.map((item) => {
							const visual = getMenuItemVisual(item);

							return (
								<article className={styles.favoriteCard} key={item.id}>
									<div className={styles.favoriteImageFrame}>
										<Image
											alt={visual.alt}
											className={styles.favoriteImage}
											src={visual.src}
											style={{
												objectPosition: visual.position,
												transform: `scale(${visual.scale})`,
												transformOrigin: visual.transformOrigin,
											}}
											width={460}
											height={330}
										/>
									</div>
									<div className={styles.favoriteContent}>
										<div>
											<h3>{item.name}</h3>
											<p>{item.description}</p>
										</div>
										<div className={styles.favoriteFooter}>
											<span>{formatCurrency(item.price)}</span>
											<Link href="/menu">
												<a>View Menu</a>
											</Link>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</section>

				<section className={styles.story} aria-labelledby="story-title">
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
						<p className={styles.eyebrow}>Our Story</p>
						<h2 id="story-title">Made for burger people.</h2>
						<p>
							Burger Corner keeps the menu simple and the food
							focused. We make burgers when they are ordered, pile
							on fresh ingredients, and keep the room easy enough
							for lunch breaks, family dinners, and last-minute
							cravings.
						</p>
						<Link href="/about">
							<a className={styles.textLink}>Read Our Story</a>
						</Link>
					</div>
				</section>

				<section className={styles.values} aria-labelledby="values-title">
					<div className={styles.sectionHeader}>
						<p className={styles.eyebrow}>What matters here</p>
						<h2 id="values-title">Built around the basics.</h2>
					</div>

					<div className={styles.valueGrid}>
						{values.map((value) => {
							const Icon = value.icon;

							return (
								<article className={styles.valueCard} key={value.title}>
									<span className={styles.iconWrap}>
										<Icon aria-hidden="true" />
									</span>
									<h3>{value.title}</h3>
									<p>{value.description}</p>
								</article>
							);
						})}
					</div>
				</section>

				<section className={styles.closing} aria-labelledby="closing-title">
					<div>
						<p className={styles.eyebrow}>Pull up hungry</p>
						<h2 id="closing-title">Ready for your next favorite burger?</h2>
						<p>
							Browse the menu, pick your stack, and we will get
							the grill going.
						</p>
					</div>
					<Link href="/menu">
						<a className={styles.primaryButton}>Explore the Menu</a>
					</Link>
				</section>
			</main>
		</div>
	);
}
