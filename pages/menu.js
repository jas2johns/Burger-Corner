import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";
import Image from "next/image";
import data from "../data/menu";

const Menu = () => {
	return (
		<>
			<div>
							<Image
								src="/menu.jpg"
								alt="table with people eating around it"
								layout="fill"
								opacity="0.45"
								max-height="500px"
								min-height= "500px"

								/* Create the parallax scrolling effect */
								background-attachment= "fixed"
								background-position= "center"
								background-repeat= "no-repeat"
								background-size= "cover"
							/>
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
