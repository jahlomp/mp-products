import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

const SetProductNewPriceModal = ({
  children,
  visible,
  onCancel,
  productName
}) => {
  return (
    <Modal
      visible={visible}
      title={`Set new price for ${productName}`}
      okText="Set"
      onCancel={onCancel}
      destroyOnClose={true}
      maskClosable={false}
      centered
      footer={null}
    >
      {children}
    </Modal>
  );
};

SetProductNewPriceModal.defaultProps = {
  visible: false
};

SetProductNewPriceModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  productName: PropTypes.string.isRequired
};

export default SetProductNewPriceModal;
