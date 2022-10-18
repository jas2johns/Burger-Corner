import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";
import Image from "next/image";
import { allDayMenu, data } from "../data/menu";

const renderCategories = () => {
	return allDayMenu.categories.map((category) => {
		return (
			<div key={category.name}>
				<h1>{category.name}</h1>
				{renderMenuItems(category.items)}
			</div>
		);
	});
};

const renderMenuItems = (menuItems) => {
	return menuItems.map((menuItem) => (

			// being carefull		
			// <div className={styles["grid-even-columns"]}>

			<div>
				<MenuItem
					id={menuItem.id}
					key={menuItem.id}
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
