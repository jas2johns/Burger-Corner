import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";
import Image from "next/image";
import { allDayMenu, data } from "../data/menu";

/* 
      <Parallax pages={1} ref={ref}>
		<ParallaxLayer
		  offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${menu})`,
            backgroundSize: 'cover',
          }}>

		</ParallaxLayer>
      </Parallax>


*/

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
		<MenuItem
			id={menuItem.id}
			key={menuItem.id}
			description={menuItem.description}
			image={menuItem.image}
		/>
	));
};

const Menu = () => {
	return (
		<>
			<div className={styles["menu"]}>
				<Image
					src="/menu.jpg"
					alt="table with people eating around it"
					className={styles["menu-background"]}
					layout="fill"
					objectFit="fill"
					object-position="center"
				/>
				<header>
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
