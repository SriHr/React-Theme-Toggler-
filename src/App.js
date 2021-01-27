import React, { useState } from "react";
import HeroSection from "./componrnts/HeroSection";
import Themecontext from "./context/ThemeContext";

const App = () => {
  const themeHook = useState("light");
  return (
    <Themecontext.Provider value={themeHook}>
      <div>
        <h1 style={{ textAlign: "center" }}>Theme Toggler</h1>
        <HeroSection />
      </div>
    </Themecontext.Provider>
  );
};
export default App;
