import React, { useState, useEffect } from "react";
import styles from "./Home.module.css"; 
import MainCarousel from "./MainCarousel/MainCarousel";
import Sponsors from "./Sponsors/Sponsors";
import Brands from "./Brands/Brands";



const Home = () => {

  return (
    <>
    <MainCarousel />
    <Sponsors />
    <Brands />
    </>
  )
};

export default Home;
