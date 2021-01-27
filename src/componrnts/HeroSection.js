import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../color";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme Toggler</h1>
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
        style={{
          padding: "10px 150px",
          backgroundColor: "#26ae60",
          color: "#FFF",
          boder: `${currentTheme.boder}`,
          fontSize: "20px",
        }}
      >
        {themeMode === "light" ? "Change to Dark Mode" : "Change to Light Mode"}
      </button>
    </div>
  );
};

export default HeroSection;
