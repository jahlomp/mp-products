import React from "react";
import { Form, Input, Button } from "antd";

const SetProductNewPriceFormFC = ({ form, setNewPrice }) => {
  const { getFieldDecorator } = form;

  const handleOnSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      setNewPrice(values);
    });
  };
  return (
    <Form layout="vertical" onSubmit={handleOnSubmit}>
      <Form.Item label="New Price">
        {getFieldDecorator("newPrice", {
          rules: [
            {
              required: true,
              message: "Please provide the latest price of the product!"
            }
          ]
        })(<Input type="number" autoFocus step="0.01" placeholder="New price" className="set-product-latest-price-input" />)}
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
const SetProductNewPriceForm = Form.create({
  name: "set_product_new_price_form"
})(SetProductNewPriceFormFC);

export default SetProductNewPriceForm;
