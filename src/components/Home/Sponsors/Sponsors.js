import styles from "./Sponsors.module.css";
const Sponsors = () => {
  return <>
  <div className={styles.sponsors}>
    <h2>
        Sponsors
    </h2>
    <div className={styles.sponsors_images}>
        <img src="https://sarafabazar.in/cdn/shop/files/Sunbera_Logo_New_360x.png?v=1688195691" />
        <img src="https://sarafabazar.in/cdn/shop/files/Creative_Jewels_Logo_360x.png?v=1688194348" />
        <img src="https://sarafabazar.in/cdn/shop/files/NL_Jewels__2_360x.jpg?v=1704276495" />
        <img src="https://sarafabazar.in/cdn/shop/files/Logo_Kalinga_Jewellers_2fafdbf1-f58b-4004-9ae3-67fb6f1088e4_360x.jpg?v=1688193664" />
        <img src="https://sarafabazar.in/cdn/shop/files/Maxsell_Logo_360x.png?v=1688403234" />
    </div>
  </div>
  </>;
};
export default Sponsors;
