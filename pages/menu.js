import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";
import { useRouter } from "next/router";
import { allDayMenu } from "../data/menu";

const renderCategories = () => {
	return allDayMenu.categories.map((category) => {
		return (
			<>
				<h2 className="text-center">{category.name}</h2>
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
			<MenuItem addToCartMode="navigate" menuItem={menuItem} />
		</div>
	));
};

const Menu = () => {
	return (
		<>
			<div className={styles["menu"]}>
				<header>
					{/* needs illumination */}
					<h1 className={`${styles["menuTitle"]} glass my-0`}>
						Menu
					</h1>
				</header>
				<main className={`${styles["menu-container"]} glass`}>
					{renderCategories()}
				</main>
			</div>
		</>
	);
};

export default Menu;
