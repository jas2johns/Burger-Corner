import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";
import { allDayMenu } from "../data/menu";

const renderCategories = () => {
	return allDayMenu.categories.map((category) => {
		return (
			<>
				<h1>{category.name}</h1>
				<div className={styles["menu-category"]} key={category.name}>
					{renderMenuItems(category.items)}
				</div>
			</>
		);
	});
};

const renderMenuItems = (menuItems) => {
	return menuItems.map((menuItem) => (
		// being carefull
		// <div className={styles["grid-even-columns"]}>

		<div key={menuItem.id}>
			<MenuItem
				id={menuItem.id}
				description={menuItem.description}
				image={menuItem.image}
			/>
		</div>
	));
};

const Menu = () => {
	return (
		<>
			<div className={styles["menu"]}>
				<header>
					{/* needs illumination */}
					<h1>Menu</h1>
				</header>
				<main className={styles["menu-container"]}>
					{renderCategories()}
				</main>
			</div>
		</>
	);
};

export default Menu;
