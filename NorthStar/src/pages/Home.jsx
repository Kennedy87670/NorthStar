import React from "react";
import ViewPort from "../components/carasoel/ViewPort";
import TopSellersTop from "../components/TopSeller/TopSellersTop";
import IconsComponent from "../components/iconsTab/IconsComponent";
import Buy from "../components/peace/Buy";
import TopSellers from "../components/TopSeller/TopSellers";
import Footers from "../components/Footers/Footers";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <ViewPort />
      <TopSellersTop />
      <IconsComponent />
      <Buy />
      <TopSellers />
    </div>
  );
};

export default Home;
