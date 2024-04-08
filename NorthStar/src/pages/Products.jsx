import React from "react";
import Footers from "../components/Footers/Footers";
import NavBar from "../components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import ProductView from "../Productpage/ProductView";

const Products = () => {
  const { initials } = useLocation();

  console.log(initials);
  return (
    <div>
      <ProductView />
    </div>
  );
};

export default Products;
