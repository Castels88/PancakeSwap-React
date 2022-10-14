import useLocalStorage from "use-local-storage";
import "../../SCSS-Modules/Dark Mode/darkmode.css";
import { Moon } from "../MoonMillions/Moon";
import { UsedBy } from "../MoonMillions/UsedBy";
import { Square } from "./Square";

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
      <Moon />
      <UsedBy />
    </div>
  );
}
