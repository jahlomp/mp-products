import React from "react";
import { Card, Button, Dropdown, Menu, Typography } from "antd";

const Product = ({ name, prices = [] }) => {
  const menu = (
    <Menu>
      <Menu.Item key="delete">Delete</Menu.Item>
      <Menu.Item key="set-price">Set new price</Menu.Item>
    </Menu>
  );
  return (
    <Card
      title={name}
      bordered={false}
      extra={
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button type="link" icon="more" />
        </Dropdown>
      }
    >
      <Typography>
        <Typography.Title level={4}>Latest Price</Typography.Title>
        <Typography.Text>{prices[prices.length - 1].date}</Typography.Text>
      </Typography>
    </Card>
  );
};

export default Product;
