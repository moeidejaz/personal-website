import React, { useState, useEffect } from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      <h2>Abdul Moeid</h2>
      {windowWidth > 490 ? (
        <nav>
          <ul>
            <li>Profile</li>
            <li>Projects</li>
            <li>Contact</li>
            <img src="/public/img/sun.svg" alt="" />
          </ul>
        </nav>
      ) : <img src="/public/img/burger.svg" alt="" />}
    </header>
  );
};

export default Header;
