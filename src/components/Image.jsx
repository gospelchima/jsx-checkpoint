import React from "react";
import Product from "../product";
import { Card } from "react-bootstrap";
const Image = () => {
  return <Card.Img variant="top" src={Product.image} />;
};


export default Image