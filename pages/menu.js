import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";
import { allDayMenu } from "../data/menu";

const getCategoryId = (categoryName) =>
	`menu-${categoryName.toLowerCase().replace(/\s+/g, "-")}`;

const renderCategories = () => {
	return allDayMenu.categories.map((category) => {
		return (
			<section
				className={styles["menu-section"]}
				id={getCategoryId(category.name)}
				key={category.name}
			>
				<div className={styles["section-heading"]}>
					<span className={styles["section-accent"]} />
					<h2>{category.name}</h2>
				</div>
				<div className={styles["menu-grid"]}>
					{renderMenuItems(category.items)}
				</div>
			</section>
		);
	});
};

const renderMenuItems = (menuItems) => {
	return menuItems.map((menuItem) => (
		<div className={styles["menu-grid-item"]} key={menuItem.id}>
			<MenuItem addToCartMode="navigate" menuItem={menuItem} />
		</div>
	));
};

const Menu = () => {
	return (
		<div className={styles["menu"]}>
			<div className={styles["menu-shell"]}>
				<header className={styles["menu-intro"]}>
					<p className={styles["eyebrow"]}>Burger Corner</p>
					<h1>Our Menu</h1>
					<p className={styles["intro-copy"]}>
						Fresh burgers, crispy sides, and cold drinks—made to order.
					</p>
				</header>

				<main className={styles["menu-container"]}>
					{renderCategories()}
				</main>
			</div>
		</div>
	);
};

export default Menu;
