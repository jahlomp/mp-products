import React from "react";
import { Modal, Form, Input } from "antd";

const SetProductNewPriceModal = Form.create({ name: "set_product_new_price" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, productName } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          title={`Set new price for ${productName}`}
          okText="Set"
          onCancel={onCancel}
          onOk={onCreate}
          destroyOnClose={true}
          maskClosable={false}
          centered
        >
          <Form layout="vertical">
            <Form.Item label="New Price">
              {getFieldDecorator("newPrice", {
                rules: [
                  {
                    required: true,
                    message: "Please provide the latest price of the product!"
                  }
                ]
              })(<Input type="number" autoFocus step="0.01" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);
export default SetProductNewPriceModal;
