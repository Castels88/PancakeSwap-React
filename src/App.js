import React from "react";
import ReactSwitch from "react-switch";
import { useState, createContext } from "react";
import { EarnPassiveIncome } from "./React-Modules/EarnPassiveIncome/EarnPassiveIncome";
// import { ReactDOM } from "react-dom/client";
import Navbar from "./React-Modules/Navbar/Navbar";
import { SettingsComponent } from "./React-Modules/Navbar/SettingsComponent";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="darkMode" id={theme}>
        {/* inizio Navbar */}
        <Navbar>
          <SettingsComponent />
        </Navbar>
        {/* fine Navbar */}
        {/* inizio EranPassiveIncome */}
        <EarnPassiveIncome />
        {/* fine EranPassiveIncome */}
        <ReactSwitch onChange={toogleTheme} checked={theme === "dark"} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
