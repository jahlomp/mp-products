import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { Button, Typography, Layout, Row, Col } from "antd";
import {
  fetchProducts,
  deleteProduct,
  setProductNewPrice,
  addProduct
} from "../../store/products/actions";
import Product from "../../components/Product/Product";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import ProductModal from "../../components/ProductModal/ProductModal";

const Products = ({
  fetchProducts,
  products,
  fetchingProducts,
  deleteProduct,
  setProductNewPrice,
  addProduct
}) => {
  const [showAddProductModalState, setShowAddProductModalState] = useState(
    false
  );
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showAddProductModal = () => {
    setShowAddProductModalState(true);
  };
  const handleCancel = () => {
    setShowAddProductModalState(false);
  };

  const handleAdd = values => {
    addProduct(values.name, values.latestPrice);
    setShowAddProductModalState(false);
  };

  return (
    <Layout>
      <Layout.Content className="main-layout">
        <div className="page-toolbar">
          <Typography>
            <Typography.Title>Products</Typography.Title>
          </Typography>
          <Button icon="plus" type="primary" onClick={showAddProductModal}>
            Add new product
          </Button>
        </div>
        {fetchingProducts ? (
          <Loader />
        ) : (
          <Row gutter={16}>
            {products &&
              []
                .concat(products)
                .filter(product => !product.deleted)
                .map((product, index) => (
                  <Col
                    key={index}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={4}
                    className="product-column"
                  >
                    <Product
                      deleteProduct={deleteProduct}
                      setProductNewPrice={setProductNewPrice}
                      id={product.id}
                      name={product.name}
                      price={product.prices[product.prices.length - 1].price}
                    />
                  </Col>
                ))}
          </Row>
        )}
      </Layout.Content>
      <ProductModal
        title="Add a new product"
        visible={showAddProductModalState}
        onCancel={handleCancel}
      >
        <AddProductForm addProduct={handleAdd} />
      </ProductModal>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    fetchingProducts: state.products.fetchingProducts,
    products: state.products.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    deleteProduct: id => {
      dispatch(deleteProduct(id));
    },
    setProductNewPrice: (id, price) => {
      dispatch(setProductNewPrice(id, price));
    },
    addProduct: (name, latestPrice) => {
      dispatch(addProduct(name, latestPrice));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
