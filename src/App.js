import React from "react";
import { DarkMode } from "./React-Modules/Common-Components/Dark Mode/DarkMode";

import { EarnPassiveIncome } from "./React-Modules/EarnPassiveIncome/EarnPassiveIncome";
// import { ReactDOM } from "react-dom/client";

function App() {
  
  return (
      <div>
        {/* inizio Navbar */}
        <DarkMode />
        {/* fine Navbar */}
        {/* inizio EranPassiveIncome */}
        <EarnPassiveIncome />
        {/* fine EranPassiveIncome */}
      </div>
  );
}

export default App;
