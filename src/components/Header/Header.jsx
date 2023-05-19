import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.body}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a href="#">Marketplace</a>
          </li>
          <li className={styles.list__item}>
            <a href="#">Help & FAQ</a>
          </li>
          <li className={styles.list__item}>
            <a href="#">Modal</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
