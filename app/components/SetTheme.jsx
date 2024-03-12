"use client";
import { useState, useEffect } from "react";
import { useAppContext } from "../context";
import { SunIcon, MoonIcon } from "./Icons";

const SetTheme = () => {
  const [theme, setTheme] = useState(global.window?.__theme || "light");
  const { thememode, setthememode } = useAppContext();
  const isDark = theme === "light";

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(theme === "light" ? "dark" : "light");
    console.log("settheme component - toggleTheme is: " + theme);
    setthememode(theme);
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
    setthememode(theme);
  }, [setthememode, theme]);

  return (
    <>
      <div
        className={`lekton400 text-sm ${
          theme === "dark" ? "tooltip-accent" : null
        } text-sm`}
      >
        <button onClick={toggleTheme}>
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </>
  );
};

export default SetTheme;
