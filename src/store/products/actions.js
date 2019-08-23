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
          let products = response.data.products;

          products = products.map(product => {
            return {
              ...product,
              deleted: false
            };
          });
          console.log(products);

          localStorage.setItem("mproducts", JSON.stringify(products));
          dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            products
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

export const setProductNewPrice = (id, price) => {
  return dispatch => {
    setNewPrice(id, price).then(() => {
      const products = JSON.parse(localStorage.getItem("mproducts")) || [];
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, products });
    });
  };
};

const remove = id => {
  return new Promise((resolve, reject) => {
    try {
      let products = JSON.parse(localStorage.getItem("mproducts")) || [];
      const currectProduct = products.find(product => product.id === id);
      const idx = products.indexOf(currectProduct);

      products[idx] = { ...currectProduct, deleted: true };

      localStorage.setItem("mproducts", JSON.stringify(products));

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
      products.unshift({
        id: products.length + 1,
        name,
        prices: [
          {
            id: 1,
            price: parseFloat(latestPrice),
            date: new Date(),
            deleted: false
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

const setNewPrice = (id, price) => {
  return new Promise((resolve, reject) => {
    try {
      let products = JSON.parse(localStorage.getItem("mproducts")) || [];
      const currectProduct = products.find(product => product.id === id);
      const idx = products.indexOf(currectProduct);

      const { prices } = currectProduct;
      const newPrices = [
        ...prices,
        {
          id: prices.length + 1,
          price: parseFloat(price),
          date: new Date()
        }
      ];

      products[idx] = { ...currectProduct, prices: newPrices };

      localStorage.setItem("mproducts", JSON.stringify(products));

      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};
