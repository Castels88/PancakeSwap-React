import { Route, Routes } from "react-router-dom";
import { DarkMode } from "./React-Modules/Common-Components/Dark Mode/DarkMode";
import NFT from "./React-Modules/Navbar/NFT";

// import { ReactDOM } from "react-dom/client";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DarkMode />}/>
        <Route path="/NFT" element={<NFT />}/>
      </Routes>
    </div>
  );
}

export default App;
