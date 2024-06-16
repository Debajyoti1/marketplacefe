import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";

const Layout = () => (
  <div>
    <NavBar />
    <Outlet />
    <Home />
    <Footer />
  </div>
);

export default Layout;
