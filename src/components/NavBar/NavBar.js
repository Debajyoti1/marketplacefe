import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sellerAction } from "../../redux/reducers/sellerReducer";
import styles from "./NavBar.module.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();
  const goSearch = (e) => {
    navigate("/search");
  };

  const dispatch=useDispatch();

  const setSearchTerm = (text) => {
    dispatch(sellerAction.setSearchText(text));
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.nav_data}>
            <Link to="/" className={styles.nav_logo}>
              <i className="ri-planet-line"></i> MarketPlace
            </Link>

            <div className={styles.nav_toggle} onClick={toggleMenu}>
              <i
                className={`ri-menu-line ${styles.nav_burger} ${
                  menuOpen ? styles.hidden : ""
                }`}
              ></i>
              <i
                className={`ri-close-line ${styles.nav_close} ${
                  menuOpen ? "" : styles.hidden
                }`}
              ></i>
            </div>
          </div>
          <div className={styles.nav_search}>
            <i className={`ri-search-line ${styles.search_icon}`}></i>
            <input
              type="text"
              className={styles.nav_search_box}
              placeholder="Search Wholesale Jewellery Products"
              onClick={goSearch}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Link to="#" className={styles.nav_link}>
              Buyer's Account
            </Link>
            <Link to="#" className={styles.nav_link}>
              Seller's Account
            </Link>
          </div>
        </nav>
        <div
          className={`${styles.nav_menu} ${menuOpen ? styles.active : ""}`}
          id="nav-menu"
        >
          <ul className={styles.nav_list}>
            <li className={styles.dropdown_item}>
              <div className={styles.nav_link}>
                Gold{" "}
                <i
                  className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}
                ></i>
              </div>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-pie-chart-line"></i> Overview
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </Link>
                </li>
                <li className={styles.dropdown_subitem}>
                  <div className={styles.dropdown_link}>
                    <i className="ri-bar-chart-line"></i> Reports{" "}
                    <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                  </div>
                  <ul className={styles.dropdown_submenu}>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-file-list-line"></i> Documents
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-cash-line"></i> Payments
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-refund-2-line"></i> Refunds
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={styles.dropdown_item}>
              <div className={styles.nav_link}>
                Diamond{" "}
                <i
                  className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}
                ></i>
              </div>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-pie-chart-line"></i> Overview
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </Link>
                </li>
                <li className={styles.dropdown_subitem}>
                  <div className={styles.dropdown_link}>
                    <i className="ri-bar-chart-line"></i> Reports{" "}
                    <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                  </div>
                  <ul className={styles.dropdown_submenu}>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-file-list-line"></i> Documents
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-cash-line"></i> Payments
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-refund-2-line"></i> Refunds
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={styles.dropdown_item}>
              <div className={styles.nav_link}>
                Plain/CZ Casting{" "}
                <i
                  className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}
                ></i>
              </div>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-pie-chart-line"></i> Overview
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </Link>
                </li>
                <li className={styles.dropdown_subitem}>
                  <div className={styles.dropdown_link}>
                    <i className="ri-bar-chart-line"></i> Reports{" "}
                    <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                  </div>
                  <ul className={styles.dropdown_submenu}>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-file-list-line"></i> Documents
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-cash-line"></i> Payments
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-refund-2-line"></i> Refunds
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={styles.dropdown_item}>
              <div className={styles.nav_link}>
                Turkish/Italian{" "}
                <i
                  className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}
                ></i>
              </div>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-pie-chart-line"></i> Overview
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </Link>
                </li>
                <li className={styles.dropdown_subitem}>
                  <div className={styles.dropdown_link}>
                    <i className="ri-bar-chart-line"></i> Reports{" "}
                    <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                  </div>
                  <ul className={styles.dropdown_submenu}>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-file-list-line"></i> Documents
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-cash-line"></i> Payments
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-refund-2-line"></i> Refunds
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={styles.dropdown_item}>
              <div className={styles.nav_link}>
                Antique/Kudan{" "}
                <i
                  className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}
                ></i>
              </div>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-pie-chart-line"></i> Overview
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </Link>
                </li>
                <li className={styles.dropdown_subitem}>
                  <div className={styles.dropdown_link}>
                    <i className="ri-bar-chart-line"></i> Reports{" "}
                    <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                  </div>
                  <ul className={styles.dropdown_submenu}>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-file-list-line"></i> Documents
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-cash-line"></i> Payments
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-refund-2-line"></i> Refunds
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={styles.dropdown_item}>
              <div className={styles.nav_link}>
                Stone{" "}
                <i
                  className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}
                ></i>
              </div>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-pie-chart-line"></i> Overview
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-arrow-up-down-line"></i> Transactions
                  </Link>
                </li>
                <li className={styles.dropdown_subitem}>
                  <div className={styles.dropdown_link}>
                    <i className="ri-bar-chart-line"></i> Reports{" "}
                    <i className={`ri-add-line ${styles.dropdown_add}`}></i>
                  </div>
                  <ul className={styles.dropdown_submenu}>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-file-list-line"></i> Documents
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-cash-line"></i> Payments
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className={styles.dropdown_sublink}>
                        <i className="ri-refund-2-line"></i> Refunds
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className={styles.nav_link}>
                Products
              </Link>
            </li>
            <li className={styles.dropdown_item}>
              <div className={styles.nav_link}>
                Users{" "}
                <i
                  className={`ri-arrow-down-s-line ${styles.dropdown_arrow}`}
                ></i>
              </div>
              <ul className={styles.dropdown_menu}>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-user-line"></i> Profiles
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-lock-line"></i> Accounts
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.dropdown_link}>
                    <i className="ri-message-3-line"></i> Messages
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className={styles.nav_link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default NavBar;
