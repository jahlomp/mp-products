import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

const ProductModal = ({ title, visible, onCancel, children }) => (
  <Modal
    visible={visible}
    title={title}
    onCancel={onCancel}
    destroyOnClose={true}
    maskClosable={false}
    centered
    footer={null}
  >
    {children}
  </Modal>
);

ProductModal.defaultProps = {
  visible: false,
  title: ""
};

ProductModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default ProductModal;
