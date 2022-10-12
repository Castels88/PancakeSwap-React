import { useEffect, useState } from "react";
import './darktest.css'

export function DarkTest() {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    window.addEventListener("storage", () => {
      const theme = localStorage.getItem("theme");
      console.log(theme.replaceAll('"', ""));
      setCurrentTheme(theme.replaceAll('"', ""));
    });
  }, []);

  return <div  className={currentTheme}>
    <h1>The theme is: {currentTheme}</h1>
  </div>
}
