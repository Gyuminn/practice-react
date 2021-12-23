import React, { createContext } from "react";
import Parent from "./Parent";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext(themes.light);

const GrandParent = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Parent />
    </ThemeContext.Provider>
  );
};

export default GrandParent;
