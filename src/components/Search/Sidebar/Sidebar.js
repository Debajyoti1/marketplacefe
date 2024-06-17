import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sellerAction, sellerSelector } from "../../../redux/reducers/sellerReducer";

const Sidebar = () => {
  const {searchData}=useSelector(sellerSelector);
  const {product,city,forc,vendors}=searchData;

  const [selectedOptions, setSelectedOptions] = useState({
    product: "",
    city: "",
    forc: "",
    vendors: ""
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions({ ...selectedOptions, [name]: value });

  };
  const dispatch=useDispatch();
  useEffect(()=>{
    // console.log("Selected Options:", selectedOptions); // Print selected options
    dispatch(sellerAction.setSearchCategory(selectedOptions));
  },[selectedOptions])
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <h5>PRODUCT</h5>
        <select name="product" id="product" value={selectedOptions.product}
          onChange={handleSelectChange}>
          <option value="">All</option>
          {product.map((p)=>(
            <option key={p} value={p}>{p}</option>
            ))}
        </select>
      </div>
      <div className={styles.sidebarItem}>
        <h5>CITY</h5>
        <select name="city" id="city" value={selectedOptions.city}
          onChange={handleSelectChange}>
        <option value="">All</option>
          {city.map((p)=>(
            <option key={p} value={p}>{p}</option>
            ))}
        </select>
      </div>
      <div className={styles.sidebarItem}>
        <h5>FOR</h5>
        <select name="forc" id="forc" value={selectedOptions.forc}
          onChange={handleSelectChange}>
        <option value="">All</option>
          {forc.map((p)=>(
            <option key={p} value={p}>{p}</option>
            ))}
        </select>
      </div>
      <div className={styles.sidebarItem}>
        <h5>VENDORS</h5>
        <select name="vendors" id="vendors" value={selectedOptions.vendors}
          onChange={handleSelectChange}>
        <option value="">All</option>
          {vendors.map((p)=>(
            <option key={p} value={p}>{p}</option>
            ))}
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
