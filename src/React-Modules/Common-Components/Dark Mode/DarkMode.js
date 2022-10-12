import useLocalStorage from "use-local-storage";
import "../../../SCSS-Modules/Dark Mode/darkmode.css";
import Navbar from "../../Navbar/Navbar";
import { EarnPassiveIncome } from "../../EarnPassiveIncome/EarnPassiveIncome";

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
      <Navbar switchTheme={switchTheme} />
      <EarnPassiveIncome switchTheme={switchTheme} />
    </div>
  );
}

/* 
<span>Darkmode in React</span>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
*/
