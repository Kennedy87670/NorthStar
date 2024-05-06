import React from "react";

import { useLocation } from "react-router-dom";
import ProductView from "../components/productpage/ProductView";

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
