import Link from 'next/link';
const Navbar = () => {
	const styles = {
		display: 'flex',
		backgroundColor: '#bfe3b4',
		justifyContent: 'space-between',
        padding: '0.5rem'
	};
	return (
		<div style={styles}>
			<Link href="/">
				<a>Home</a>
			</Link>
            <Link href="/menu">
				<a>Menu!</a>
			</Link>
			<Link href="/about">
				<a>About Page</a>
			</Link>
			<Link href="/contact">
				<a>Contact Page</a>
			</Link>
		</div>
	);
};

export default Navbar;
