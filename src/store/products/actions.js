import axios from "axios";
import { notification } from "antd";
import { API_URL } from "../../utils/environment";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED
} from "./types";

export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS });
    const products = JSON.parse(localStorage.getItem("mproducts"));

    if (Array.isArray(products)) {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, products });
    } else {
      axios({
        method: "GET",
        url: `${API_URL}/5c3e15e63500006e003e9795`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          localStorage.setItem(
            "mproducts",
            JSON.stringify(response.data && response.data.products)
          );
          dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            products: response.data && response.data.products
          });
        })
        .catch(error => {
          notification.error({
            message: "Get Products Error",
            description: "An error occured when getting products"
          });
          dispatch({ type: FETCH_PRODUCTS_FAILED });
        });
    }
  };
};

export const deleteProduct = id => {
  return dispatch => {
    remove(id).then(() => {
      const products = JSON.parse(localStorage.getItem("mproducts")) || [];
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, products });
    });
  };
};

export const addProduct = (name, latestPrice) => {
  return dispatch => {
    add(name, latestPrice).then(() => {
      const products = JSON.parse(localStorage.getItem("mproducts")) || [];
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, products });
    });
  };
};

export const setProductNewPrice = (id, price, date) => {
  return dispatch => {
    // const products = JSON.parse(localStorage.getItem("mproducts")) || [];
    // const otherProducts = products.filter(product => product.id !== id);
    // dispatch({ type: SET_PRODUCT_NEW_PRICE, id, price, date });
  };
};

const remove = id => {
  return new Promise((resolve, reject) => {
    try {
      const products = JSON.parse(localStorage.getItem("mproducts")) || [];
      const otherProducts = products.filter(product => product.id !== id);

      localStorage.setItem(
        "mproducts",
        otherProducts.length < 1 ? null : JSON.stringify(otherProducts)
      );
      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};

const add = (name, latestPrice) => {
  return new Promise((resolve, reject) => {
    try {
      let products = JSON.parse(localStorage.getItem("mproducts")) || [];
      products.push({
        id: products.length + 1,
        name,
        prices: [
          {
            id: 1,
            price: parseFloat(latestPrice),
            date: new Date()
          }
        ]
      });
      localStorage.setItem("mproducts", JSON.stringify(products));
      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};
