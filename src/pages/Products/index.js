import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Typography, Layout, Row, Col } from "antd";
import { fetchProducts } from "../../store/products/actions";
import Product from "../../components/Product/Product";

const Products = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Layout.Content className="main-layout">
        <Typography>
          <Typography.Title>Products</Typography.Title>
        </Typography>

        <Row gutter={16}>
          {products &&
            products.products &&
            [].concat(products.products).map((product, index) => (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={4}
                className="product-column"
              >
                <Product name={product.name} />
              </Col>
            ))}
        </Row>
      </Layout.Content>
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
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
