import styles from "../styles/MenuItem.module.css";
import burgerImg from "../public/BURGER.jpg";
import Image from "next/image";

const MenuItem = () => {
	return (
		<>
			<div>
				<Image src={burgerImg} />
				<button>Order</button>
			</div>
		</>
	);
};

export default MenuItem;
