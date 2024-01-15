import React, { useContext } from "react";
import { sun, moon } from "../utils/NamedExports";
import styles from "../styles/mobileMenu.module.css";
import { Context } from "../../App";

const NavMenu = () => {
  const { toggleMode, toggleMenu, menuOpen, darkMode } = useContext(Context);

  //classNames
  const navMenuClass = styles.navMenu;
  const fadeInClass = styles.fadeIn;
  const fadeOutClass = styles.fadeOut;

  const combinedClassNames = `${navMenuClass} ${
    menuOpen ? fadeInClass : fadeOutClass
  }`;

  return (
    <nav className={combinedClassNames}>
      <img
        className={styles.xmark}
        onClick={toggleMenu}
        style={{
          backgroundColor: darkMode ? "var(--text-color)" : "var(--text-color)",
        }}
      />
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
  );
};

export default NavMenu;
