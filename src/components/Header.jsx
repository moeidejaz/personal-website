import React, { useState, useEffect } from "react";
import {sun , moon , burger} from "../utils/NamedExports";
import styles from "../styles/header.module.css";
import SwitchTheme from "../utils/ThemeSwitcher";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Subscribe to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    SwitchTheme(darkMode);
  }, [darkMode]);

  return (
    <header>
      <h2>Abdul Moeid.</h2>
      {windowWidth > 490 ? (
        <nav>
          <ul>
            <li>Profile</li>
            <li>Projects</li>
            <li>Contact</li>
            <img
              src={darkMode ? sun : moon}
              onClick={toggleMode}
              style={{
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </ul>
        </nav>
      ) : (
        <img src={burger} alt="burger" />
      )}
    </header>
  );
};

export default Header;
