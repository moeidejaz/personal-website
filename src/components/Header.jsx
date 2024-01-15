import React, { useState, useEffect, useContext } from "react";
import { sun, moon, burger } from "../utils/NamedExports";
import styles from "../styles/header.module.css";
import { Context } from "../../App";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { toggleMode, toggleMenu, darkMode } = useContext(Context);
  
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
        <img
          className={styles.burger}
          onClick={toggleMenu}
          style={{
            backgroundColor: darkMode
              ? "var(--text-color)"
              : "var(--text-color)",
          }}
        />
      )}
    </header>
  );
};

export default Header;
