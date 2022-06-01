import styles from "../styles/Menu.module.css";
import MenuItem from "../components/MenuItem";

const Menu = () => {
	return (
		<>
			<div>
				<header>
					<h1>Menu</h1>
				</header>
				<main className={styles["menu-container"]}>
					<div>
						<MenuItem />
					</div>
					<div>
						<MenuItem />
					</div>
					<div>
						<MenuItem />
					</div>
					<div>
						<MenuItem />
					</div>
					<div>
						<MenuItem />
					</div>
					<div>
						<MenuItem />
					</div>
				</main>
			</div>
		</>
	);
};

export default Menu;
