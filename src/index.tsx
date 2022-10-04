import React from "react";
import ReactDOM from "react-dom/client";
import { DarkMode } from "./DarkMode";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DarkMode />
  </React.StrictMode>
);
