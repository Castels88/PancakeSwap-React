import useLocalStorage from "use-local-storage";
import "../../../SCSS-Modules/Dark Mode/darkmode.css";
import Navbar from "../../Navbar/Navbar";
import { EarnPassiveIncome } from "../../EarnPassiveIncome/EarnPassiveIncome";
import StartInSeconds from "../../Start_in_seconds/StartInSeconds";
import { Cake } from "../../Cake/Cake";
import { WinMillions } from "../../WinMillions/WinMillions";
import Footer from "../../footer/footer";

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
      <Navbar switchTheme={switchTheme} />
      <EarnPassiveIncome switchTheme={switchTheme} />
      <WinMillions switchTheme={switchTheme}/>
      <Cake switchTheme={switchTheme}/>
      <StartInSeconds switchTheme={switchTheme} />
      <Footer />
    </div>
  );
}

