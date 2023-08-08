import React from "react";
import Product from "../product";

const Price = () => {
  return <div>&#8358;{Product.price.toLocaleString()}</div>;
};

export default Price;
// 