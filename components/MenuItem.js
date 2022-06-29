import styles from '../styles/MenuItem.module.css';
import burgerImg from '../public/BURGER.jpg';
import Image from 'next/image';

const MenuItem = () => {
	return (
		<div className={styles.MenuItem}>
			<div className={styles.img}>
				<Image src={burgerImg} />
			</div>
			<button className={styles.button}>Order</button>
		</div>
	);
};

export default MenuItem;
