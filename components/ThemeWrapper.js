import { useTheme } from "../context/ThemeContext";

const ThemeWrapper = ({ children }) => {
	const { darkModeEnabled } = useTheme();

	return (
		<div
			className={`container-fluid mx-0 px-0 ${
				darkModeEnabled === true ? "bg-dark text-light" : ""
			}`}
		>
			{children}
		</div>
	);
};

export default ThemeWrapper;
