// Footer.js
import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <div className={styles.footer_card}>
            <h5 className={styles.footer_title}>About Us</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Why Us</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_card}>
            <h5 className={styles.footer_title}>For Sellers</h5>
            <ul>
              <li>
                <a href="#">Become A Seller</a>
              </li>
              <li>
                <a href="#">Membership Plan</a>
              </li>
              <li>
                <a href="#">Backend Demo Videos</a>
              </li>
              <li>
                <a href="#">Green India</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_card}>
            <h5 className={styles.footer_title}>Shop</h5>
            <ul>
              <li>
                <a href="https://debajyotidutta.com">shop.debajyotidutta.com</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_card}>
            <img
              src="https://cdn.shopify.com/s/files/1/0374/8279/1051/files/DOWNLOAD_APP_1_922a3fae-f00b-468b-a2b7-e1def9e68bcc.png?v=1626424023"
              alt="download"
              height="198px"
              width="250px"
            />
          </div>
          <div className={styles.footer_card}>
            <h5 className={styles.footer_title}>Contact Us</h5>
            <ul>
              <li>
                <i className="ri-home-3-line"></i>715, Jewel World, Kalbadevi
                Road, Mumbai- 400 002
              </li>
              <li>
                <i className="ri-mail-line"></i>contact@sarafabazar.in
              </li>
              <li>
                <i className="ri-phone-line"></i>76683-77540
              </li>
            </ul>
          </div>
          <div className={styles.footer_card}>
            <h5 className={styles.footer_title}>Follow Us</h5>
            <ul className={styles.flex_row}>
              <li>
                <a href="#">
                  <i className="ri-facebook-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ri-youtube-line"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_card}>
            <h5 className={styles.footer_title}>Signup for newsletter</h5>
            <form className={styles.footer_form}>
              <input
                type="email"
                placeholder="email@example.com"
                className={styles.form_input}
                required
              />
              <button
                type="submit"
                className={styles.footer_button}
                disabled={!isChecked}
              >
                Subscribe
              </button>
            </form>
            <div className={styles.form_checkbox}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheck}
              />
              <p>
                I agree that{" "}
                <a href="#" className={styles.footer_link}>
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>
            <a href="#">Privacy Policy</a> | 
            <a href="#">Terms and Condition</a> | 
            Copyright © 2024 <a href="#">MarketPlace</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
