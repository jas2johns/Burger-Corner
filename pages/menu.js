import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";
import data from "../data/menu";

const Menu = () => {
	return (
		<>
			<div>
				<header>
					<h1>Menu</h1>
				</header>
				<main className={styles["menu-container"]}>
					{data.menuItems.map((menuItem) => (
						<MenuItem
							id={menuItem.id}
							key={menuItem.id}
							description={menuItem.description}
							image={menuItem.image}
						/>
					))}
				</main>
			</div>
		</>
	);
};

export default Menu;
