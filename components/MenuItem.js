import styles from "../styles/MenuItem.module.css";
import burgerImg from "../public/BURGER.jpg";
import Image from "next/image";

const MenuItem = () => {
	return (
		<>
			<div>
				<Image className="img" src={burgerImg} />
				<button className="button">Order</button>
			</div>
		</>
	);
};

export default MenuItem;
