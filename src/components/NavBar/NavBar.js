import React, { useState } from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.nav_data}>
            <a href="#" className={styles.nav_logo}>
              <i className="ri-planet-line"></i> MarketPlace
            </a>
            
            <div className={styles.nav_toggle} onClick={toggleMenu}>
              <i className={`ri-menu-line ${styles.nav_burger} ${menuOpen ? styles.hidden : ''}`}></i>
              <i className={`ri-close-line ${styles.nav_close} ${menuOpen ? '' : styles.hidden}`}></i>
            </div>
          </div>
          <div className={styles.nav_search}>
          <i className={`ri-search-line ${styles.search_icon}`}></i>
          <input type='text' className={styles.nav_search_box} placeholder='Search Wholesale Jewellery Products' />
          </div>
          <div>
          <a href="#" className={styles.nav_link}>Buyer's Account</a>
          <a href="#" className={styles.nav_link}>Seller's Account</a>
          </div>

        </nav>
        <div className={`${styles.nav_menu} ${menuOpen ? styles.active : ''}`} id="nav-menu">
            <ul className={styles.nav_list}>
            <li className={styles.dropdown_item}>
                <div className={styles.nav_link}>
                  Gold <i className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}></i>
                </div>
                <ul className={styles.dropdown_menu}>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-pie-chart-line"></i> Overview
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>
                  <li className={styles.dropdown_subitem}>
                    <div className={styles.dropdown_link}>
                      <i className="ri-bar-chart-line"></i> Reports <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                    </div>
                    <ul className={styles.dropdown_submenu}>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-cash-line"></i> Payments
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown_item}>
                <div className={styles.nav_link}>
                  Diamond <i className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}></i>
                </div>
                <ul className={styles.dropdown_menu}>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-pie-chart-line"></i> Overview
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>
                  <li className={styles.dropdown_subitem}>
                    <div className={styles.dropdown_link}>
                      <i className="ri-bar-chart-line"></i> Reports <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                    </div>
                    <ul className={styles.dropdown_submenu}>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-cash-line"></i> Payments
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown_item}>
                <div className={styles.nav_link}>
                  Plain/CZ Casting <i className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}></i>
                </div>
                <ul className={styles.dropdown_menu}>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-pie-chart-line"></i> Overview
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>
                  <li className={styles.dropdown_subitem}>
                    <div className={styles.dropdown_link}>
                      <i className="ri-bar-chart-line"></i> Reports <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                    </div>
                    <ul className={styles.dropdown_submenu}>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-cash-line"></i> Payments
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown_item}>
                <div className={styles.nav_link}>
                  Turkish/Italian <i className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}></i>
                </div>
                <ul className={styles.dropdown_menu}>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-pie-chart-line"></i> Overview
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>
                  <li className={styles.dropdown_subitem}>
                    <div className={styles.dropdown_link}>
                      <i className="ri-bar-chart-line"></i> Reports <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                    </div>
                    <ul className={styles.dropdown_submenu}>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-cash-line"></i> Payments
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown_item}>
                <div className={styles.nav_link}>
                  Antique/Kudan <i className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}></i>
                </div>
                <ul className={styles.dropdown_menu}>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-pie-chart-line"></i> Overview
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>
                  <li className={styles.dropdown_subitem}>
                    <div className={styles.dropdown_link}>
                      <i className="ri-bar-chart-line"></i> Reports <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                    </div>
                    <ul className={styles.dropdown_submenu}>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-cash-line"></i> Payments
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown_item}>
                <div className={styles.nav_link}>
                  Stone <i className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}></i>
                </div>
                <ul className={styles.dropdown_menu}>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-pie-chart-line"></i> Overview
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-arrow-up-down-line"></i> Transactions
                    </a>
                  </li>
                  <li className={styles.dropdown_subitem}>
                    <div className={styles.dropdown_link}>
                      <i className="ri-bar-chart-line"></i> Reports <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                    </div>
                    <ul className={styles.dropdown_submenu}>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-file-list-line"></i> Documents
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-cash-line"></i> Payments
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.dropdown_sublink}>
                          <i className="ri-refund-2-line"></i> Refunds
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#" className={styles.nav_link}>Products</a></li>
              <li className={styles.dropdown_item}>
                <div className={styles.nav_link}>
                  Users <i className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}></i>
                </div>
                <ul className={styles.dropdown_menu}>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-user-line"></i> Profiles
                    </a>                          
                  </li>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-lock-line"></i> Accounts
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.dropdown_link}>
                      <i className="ri-message-3-line"></i> Messages
                    </a>
                  </li>
                </ul>
              </li>
              <li><a href="#" className={styles.nav_link}>Contact</a></li>
            </ul>
          </div>
      </header>
    </>
  );
}

export default NavBar;
