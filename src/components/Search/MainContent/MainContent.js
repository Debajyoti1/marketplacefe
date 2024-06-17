import React from "react";
import styles from "./MainContent.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { sellerSelector } from "../../../redux/reducers/sellerReducer";

const MainContent = () => {
  const { searchData } = useSelector(sellerSelector);
  const { products } = searchData;

  return (
    <main className={styles.mainContent}>
      <h1 key={`headline`}>Search & Filter</h1>
      <div className={styles.product_cards}>
        {products.map((c) => (
          <Card key={c.id} c={c} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
