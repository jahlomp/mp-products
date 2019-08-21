import React from "react";
import { Card, Button, Dropdown, Menu, Modal } from "antd";
import PropTypes from "prop-types";

const Product = ({ id, name, price, deleteProduct, setProductNewPrice }) => {
  const handleDeleteProduct = id => {
    Modal.confirm({
      title: `Are you sure you want to delete "${name}"?`,
      centered: true,
      onOk() {
        deleteProduct(id);
      },
      okButtonProps: { type: "danger" }
    });
  };
  const handleSetProductNewPrice = id => {};

  const hanleProductMenuClick = ({ key }) => {
    switch (key) {
      case "delete":
        handleDeleteProduct(id);
        break;
      case "set-price":
        handleSetProductNewPrice(id);
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={hanleProductMenuClick}>
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
      Price: {price}
    </Card>
  );
};

Product.defaultProps = {
  id: "",
  name: "",
  price: 0.0,
  deleteProduct: () => {},
  setProductNewPrice: () => {}
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  setProductNewPrice: PropTypes.func.isRequired
};
export default Product;
