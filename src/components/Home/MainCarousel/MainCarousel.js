import React, { useState, useEffect } from "react";
import styles from "./MainCarousel.module.css"; // Import module CSS for carousel styles

const images = [
  "https://sarafabazar.in/cdn/shop/files/Creative_Jewels_mumbai_manufacturer_turkey_fancy_gold_jewellery_sarafa_bazar_india_mobile_1024x1024.jpg?v=1689920503",
  "https://sarafabazar.in/cdn/shop/files/Sarafa_Bazar_India_Main_Banner_Mobile_1024x1024.jpg?v=1689919967",
  "https://sarafabazar.in/cdn/shop/files/Kalinga_jewellers_mumbai_manufacturer_fancy_gold_mangalsutra_sarafa_bazar_india_1296x.jpg?v=1689920016",
];

const MainCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`${styles.carouselImage} ${
            index === currentImageIndex ? styles.active : ""
          }`}
        />
      ))}
      <button
        className={`${styles.navButton} ${styles.prev}`}
        onClick={goToPrevious}
      >
        &#8249;
      </button>
      <button
        className={`${styles.navButton} ${styles.next}`}
        onClick={goToNext}
      >
        &#8250;
      </button>
    </div>
  );
};

export default MainCarousel;
