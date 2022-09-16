import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({});

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
	const [ darkModeEnabled, setDarkModeEnabled ] = useState(false);

	return <ThemeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled }}>{children}</ThemeContext.Provider>;
}
