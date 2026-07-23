import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";

const ThemeContext = createContext({});
const THEME_STORAGE_KEY = "theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

function readSavedTheme() {
	try {
		return window.localStorage.getItem(THEME_STORAGE_KEY);
	} catch {
		return null;
	}
}

function saveThemePreference(theme) {
	try {
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	} catch {
		return;
	}
}

function getSystemPrefersDark() {
	if (!window.matchMedia) {
		return false;
	}

	return window.matchMedia(COLOR_SCHEME_QUERY).matches;
}

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
	const [darkModeEnabled, setDarkModeEnabledState] = useState(false);
	const hasManualPreference = useRef(false);

	useIsomorphicLayoutEffect(() => {
		const savedTheme = readSavedTheme();
		const hasSavedTheme =
			savedTheme === DARK_THEME || savedTheme === LIGHT_THEME;

		hasManualPreference.current = hasSavedTheme;

		if (hasSavedTheme) {
			setDarkModeEnabledState(savedTheme === DARK_THEME);
			return;
		}

		setDarkModeEnabledState(getSystemPrefersDark());
	}, []);

	useEffect(() => {
		if (hasManualPreference.current || !window.matchMedia) {
			return undefined;
		}

		const systemTheme = window.matchMedia(COLOR_SCHEME_QUERY);
		const handleSystemThemeChange = (event) => {
			if (!hasManualPreference.current) {
				setDarkModeEnabledState(event.matches);
			}
		};

		if (systemTheme.addEventListener) {
			systemTheme.addEventListener("change", handleSystemThemeChange);

			return () => {
				systemTheme.removeEventListener(
					"change",
					handleSystemThemeChange
				);
			};
		}

		systemTheme.addListener(handleSystemThemeChange);

		return () => {
			systemTheme.removeListener(handleSystemThemeChange);
		};
	}, []);

	const setDarkModeEnabled = useCallback((nextValue) => {
		setDarkModeEnabledState((currentValue) => {
			const resolvedValue =
				typeof nextValue === "function"
					? nextValue(currentValue)
					: nextValue;
			const nextDarkModeEnabled = Boolean(resolvedValue);

			hasManualPreference.current = true;
			saveThemePreference(
				nextDarkModeEnabled ? DARK_THEME : LIGHT_THEME
			);

			return nextDarkModeEnabled;
		});
	}, []);

	const themeContextValue = useMemo(
		() => ({ darkModeEnabled, setDarkModeEnabled }),
		[darkModeEnabled, setDarkModeEnabled]
	);

	return (
		<ThemeContext.Provider value={themeContextValue}>
			{children}
		</ThemeContext.Provider>
	);
}
