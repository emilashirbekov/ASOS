import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footer} ${styles.padding}`}>
      <div className={styles.footer__body}>
        <div className={styles.footer__links}>
          <div className={styles.footer__links_div}>
            <h3>HELP & INFORMATION</h3>
            <a href="/help">
              <p>Track order</p>
            </a>
            <a href="/help">
              <p>Delivery & returns</p>
            </a>
            <a href="/help">
              <p>Sitemap</p>
            </a>
          </div>
          <div className={styles.footer__links_div}>
            <h3>ABOUTS ASOS</h3>
            <a href="/help">
              <p>About us</p>
            </a>
            <a href="/help">
              <p>Career at ASOS</p>
            </a>
            <a href="/help">
              <p>Corporate-responsibility</p>
            </a>
            <a href="/help">
              <p>Investor's site</p>
            </a>
          </div>
          <div className={styles.footer__links_div}>
            <h3>MORE FROM ASOS</h3>
            <a href="/help">
              <p>Mobile and ASOS apps</p>
            </a>
            <a href="/help">
              <p>ASOS marketplace</p>
            </a>
            <a href="/help">
              <p>Gift vouchers</p>
            </a>
            <a href="/help">
              <p>Black Friday</p>
            </a>
            <a href="/help">
              <p>ASOS x Thriftl+</p>
            </a>
          </div>
          <div className={styles.footer__links_div}>
            <h3>SHOPING FROM:</h3>
            <a href="/help">
              <p>ASOS x Thriftl+</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
