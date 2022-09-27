import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";
import Image from "next/image";
import data from "../data/menu";
// new
import menu from './menu.jpg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

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
					object-position= "center"
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
