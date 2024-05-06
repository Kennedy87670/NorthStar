import React from "react";
import ViewPort from "../components/homepage/ViewPort";
import TopSellersTop from "../components/homepage/TopSellersTop";
import TopSellers from "../components/homepage/TopSellers";
import IconsComponent from "../components/homepage/IconsComponent";
import Buy from "../components/homepage/Buy";

export default function Home() {
  return (
    <>
      <ViewPort />
      <TopSellersTop />
      <IconsComponent />
      <Buy />
      <TopSellers />
    </>
  );
}
