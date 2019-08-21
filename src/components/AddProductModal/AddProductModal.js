import React from "react";
import { Modal, Form, Input } from "antd";

const CreateProductModal = Form.create({ name: "add_product_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          title="Add a new product"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
          destroyOnClose={true}
          maskClosable={true}
          centered
        >
          <Form layout="vertical">
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
          </Form>
        </Modal>
      );
    }
  }
);
export default CreateProductModal;
