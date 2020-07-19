import React from "react";
import styles from "./Header.module.css";
import ellipse from "../../assets/images/Ellipse-header.png";
import logo from "../../assets/images/Logo.png";

export default function () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.headerMenu}>
          <li>
            <a>UX/UI Design</a>
            <img src={ellipse} />
          </li>
          <li>Usability Testing</li>
          <li>Blog</li>
          <li>
            <img src={logo} />
          </li>
          <li>About us</li>
          <li>Contacts</li>
          <li>
            <a>ilove@optium.pro</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
