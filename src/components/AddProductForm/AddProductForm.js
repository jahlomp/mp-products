import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";

const AddProductFormFC = ({ form, addProduct }) => {
  const { getFieldDecorator } = form;

  const handleOnSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      addProduct(values);
    });
  };

  return (
    <Form layout="vertical" onSubmit={handleOnSubmit}>
      <Form.Item label="Name">
        {getFieldDecorator("name", {
          rules: [
            {
              required: true,
              message: "Please provide the name of the product!"
            }
          ]
        })(<Input autoFocus />)}
      </Form.Item>
      <Form.Item label="Latest Price">
        {getFieldDecorator("latestPrice", {
          rules: [
            {
              required: true,
              message: "Please provide the latest price of the product!"
            }
          ]
        })(<Input type="number" step="0.01" />)}
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

AddProductFormFC.defaultProps = {
  addProduct: false
};

AddProductFormFC.propTypes = {
  addProduct: PropTypes.func.isRequired
};

const AddProductForm = Form.create({ name: "add_product_form" })(
  AddProductFormFC
);

export default AddProductForm;
