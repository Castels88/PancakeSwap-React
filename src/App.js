import React from "react";
import { EarnPassiveIncome } from "./React-Modules/EarnPassiveIncome/EarnPassiveIncome";
// import { ReactDOM } from "react-dom/client";
import Navbar from "./React-Modules/Navbar/Navbar";
function App() {
  return (
    <div>
      {/* inizio Navbar */}
      <Navbar />
      {/* fine Navbar */}
      {/* inizio EranPassiveIncome */}
      <EarnPassiveIncome />
      {/* fine EranPassiveIncome */}
    </div>
  );
}

export default App;
