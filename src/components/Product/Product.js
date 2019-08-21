import React from "react";
import { Card } from "antd";

const Product = ({ name, prices = [] }) => {
  return (
    <Card title={name} bordered={false}>
      {prices.map(price => (
        <>Card content</>
      ))}
    </Card>
  );
};

export default Product;
