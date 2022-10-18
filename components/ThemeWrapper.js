import { useTheme } from "../context/ThemeContext";

const ThemeWrapper = ({ children }) => {
	const { darkModeEnabled } = useTheme();

	return (
		<div
			className={`container-fluid ${
				darkModeEnabled === true ? "body-dark" : ""
			}`}
		>
			{children}
		</div>
	);
};

export default ThemeWrapper;
