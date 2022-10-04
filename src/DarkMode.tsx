import useLocalStorage from "use-local-storage";
import "./darkmode.css";
import { Square } from "./components/Square";

export function DarkMode() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="darkswitch" data-theme={theme}>
      <input
        onClick={switchTheme}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label">
        <i className="gg-moon"></i>
        <i className="gg-sun"></i>
        <div className="ball"></div>
      </label>
      <Square />
    </div>
  );
}

/* 
<span>Darkmode in React</span>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
*/
