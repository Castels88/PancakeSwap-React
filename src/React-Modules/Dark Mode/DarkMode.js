import useLocalStorage from "use-local-storage";
import "../../SCSS-Modules/Dark Mode/darkmode.css";
import StartInSeconds from "../Start_in_seconds/StartInSeconds";

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
      <StartInSeconds switchTheme={switchTheme}/>
    </div>
  );
}

/* 
<span>Darkmode in React</span>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
*/