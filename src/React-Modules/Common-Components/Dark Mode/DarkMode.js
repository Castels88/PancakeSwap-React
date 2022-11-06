import useLocalStorage from "use-local-storage";
import "../../../SCSS-Modules/Dark Mode/darkmode.css";
import Navbar from "../../Navbar/Navbar.js";
import { EarnPassiveIncome } from "../../EarnPassiveIncome/EarnPassiveIncome.js";
import StartInSeconds from "../../Start_in_seconds/StartInSeconds.js";
import { Cake } from "../../Cake/Cake.js";
import { WinMillions } from "../../WinMillions/WinMillions.js";
import Footer from "../../footer/footer.js";
import Tradeanything from "../../tradeanything/tradeanything.js";
import { Moon } from "../../MoonMilions/Moon.js";
import { UsedBy } from "../../MoonMilions/UsedBy.js";
import Tokens from "../../API/tokens/Tokens";

export function DarkMode() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  window.dispatchEvent(new Event("storage"));

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
    </div>
  );
}
