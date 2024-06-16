import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <h5>PRODUCT</h5>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={styles.sidebarItem}>
        <h5>CITY</h5>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={styles.sidebarItem}>
        <h5>FOR</h5>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={styles.sidebarItem}>
        <h5>VENDORS</h5>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
