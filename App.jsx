import React, { useState, useEffect, createContext } from "react";
import { Header, MobileMenu, SwitchTheme } from "./src/utils/NamedExports";

export const Context = createContext();
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(null);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  // function openMenu() {
  //   setMenuOpen(true);
  // }

  // function closeMenu() {
  //   setMenuOpen(false);
  // }

  function toggleMenu(){
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    SwitchTheme(darkMode);
  }, [darkMode]);

  const contextValues = {
    darkMode,
    menuOpen,
    toggleMode,
    toggleMenu,
  };

  return (
    <>
      <Context.Provider value={contextValues}>
        <Header />
        <MobileMenu />
      </Context.Provider>
    </>
  );
};

export default App;
