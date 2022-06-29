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
						<span>The Go 2 classic Single Mustard Grilled Patty, 
							"white" American Cheese, fresh shredded lettuce, tomato.
						</span>
					</div>
					<div>
						<MenuItem />
						<span>Double, (2) Mustard Grilled Patties, 
							"white" American Cheese, fresh shredded lettuce, tomato
						</span>

					</div>
					<div>
						<MenuItem />
						<span>The Hawaiian burger; BBQ Grilled burger 6oz, Chopped 
							Grilled onions, grilled pineapple slice, Monterey jack crisp, 
							and a choice of our house teriyaki Sauce or BBQ sauce.
						</span>

					</div>
					<div>
						<MenuItem />
						<span>Western, Monterey jack, crispy shallots, chipotle BBQ sauce, 
							caramelized onions
						</span>

					</div>
					<div>
						<MenuItem />
						<span>California,Mustard Grilled Patty, Oaxacan Cheese, 
							fresh shredded lettuce, avo slices and a side of "Pico de gallo"
						</span>

					</div>
					<div>
						<MenuItem />
						<span>Patty melt with caramelized onions sourdough bread or rye bread</span>

					</div>
				</main>
			</div>
		</>
	);
};

export default Menu;
