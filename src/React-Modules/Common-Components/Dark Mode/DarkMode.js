import useLocalStorage from "use-local-storage";
import "../../../SCSS-Modules/Dark Mode/darkmode.css";
import Navbar from "../../Navbar/Navbar";
import { EarnPassiveIncome } from "../../EarnPassiveIncome/EarnPassiveIncome";
import StartInSeconds from "../../Start_in_seconds/StartInSeconds";
import { Cake } from "../../Cake/Cake";
import { WinMillions } from "../../WinMillions/WinMillions";
import Footer from "../../footer/footer";
import Tradeanything from "../../tradeanything/tradeanything";
import { Moon } from "../../MoonMilions/Moon";
import { UsedBy } from "../../MoonMilions/UsedBy";
import Converter from "../../API/converter/Converter";

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
      <Moon />
      <UsedBy />
      <Tradeanything />
      <EarnPassiveIncome />
      <WinMillions />
      <Cake />
      <StartInSeconds switchTheme={switchTheme} />
      <Footer switchTheme={switchTheme} />
      <Converter/>
    </div>
  );
}

