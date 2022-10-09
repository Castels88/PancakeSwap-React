import React from "react";
import { DarkMode } from "./React-Modules/Dark Mode/DarkMode";
import { Moon } from "./React-Modules/MoonMillions/Moon";
import { UsedBy } from "./React-Modules/MoonMillions/UsedBy";
import "./style.css";

export default function App() {
  return (
    <>
      {/* <DarkMode /> */}
      <Moon />
      <UsedBy />
    </>
  );
}
