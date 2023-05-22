import React from "react";
import styles from "./Header.module.css";
import "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.body}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a style={{ textDecoration: "none" }} href="/marketplace">
              Marketplace
            </a>
          </li>
          <li className={styles.list__item}>
            <a style={{ textDecoration: "none" }} href="/help">
              Help & FAQ
            </a>
          </li>
          <li className={styles.list__item}>
            <a style={{ textDecoration: "none" }} href="/modal">
              You are in Kyrgyzstan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
