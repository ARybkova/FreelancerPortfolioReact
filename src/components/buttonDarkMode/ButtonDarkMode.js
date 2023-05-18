import {useEffect} from "react";
import {useLocalStorage} from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import "./style.css";

import sun from "./sun.svg";
import moon from "./moon.svg";

const ButtonDarkMode = function () {
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

	useEffect(() => {
		if (darkMode === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				const newColorScheme = event.matches ? "dark" : "light";
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);

	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === "light" ? "dark" : "light";
		});
	};

	const buttonNormal = "dark-mode-btn";
	const buttonActive = "dark-mode-btn dark-mode-btn--active";

	return (
		<button
			className={darkMode === "dark" ? buttonActive : buttonNormal}
			onClick={toggleDarkMode}
		>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	);
};

export default ButtonDarkMode;
