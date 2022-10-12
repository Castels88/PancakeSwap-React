import useLocalStorage from "use-local-storage";
import "../../../SCSS-Modules/Dark Mode/darkmode.css";
import { Cake } from "../../Cake/Cake";
import { WinMillions } from "../../WinMillions/WinMillions";
import { DarkModeBtn } from "./DarkModeBtn.js";

export function DarkMode() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  window.dispatchEvent(new Event('storage'))

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="darkswitch" data-theme={theme}>
      <WinMillions switchTheme={switchTheme}/>
      <Cake switchTheme={switchTheme}/>
      <DarkModeBtn switchTheme={switchTheme}/>
    </div>
  );
}

/*
<span>Darkmode in React</span>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
*/
