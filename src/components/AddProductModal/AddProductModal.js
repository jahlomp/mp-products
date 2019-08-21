import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

const AddProductModal = ({ visible, onCancel, children }) => (
  <Modal
    visible={visible}
    title="Add a new product"
    okText="Add"
    onCancel={onCancel}
    destroyOnClose={true}
    maskClosable={false}
    centered
    footer={null}
  >
    {children}
  </Modal>
);

AddProductModal.defaultProps = {
  visible: false
};

AddProductModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default AddProductModal;
