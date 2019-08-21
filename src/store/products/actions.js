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
    axios({
      method: "GET",
      url: `${API_URL}/5c3e15e63500006e003e9795`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        notification.error({
          message: "Get Products Error",
          description: "An error occured when getting products"
        });
        dispatch({ type: FETCH_PRODUCTS_FAILED });
      });
  };
};
