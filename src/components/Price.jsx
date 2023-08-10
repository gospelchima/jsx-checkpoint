import React from "react";
import Product from "../product";

const Price = () => {
  return <div style={{marginBottom:"10px"}}>&#8358;{Product.price.toLocaleString()}</div>;
};

export default Price;
// 