import fakeApi from "../../api";
import { ACTION_TYPES } from "../constants/action-types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await fakeApi().get("")
      dispatch({
        type: ACTION_TYPES.FETCH_PRODUCTS,
        payload: data
      })
    } catch (error) {
      console.log("error", error)
    }
  }
}

export const fetchProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data } = await fakeApi().get(`/${productId}`)
      dispatch({
        type: ACTION_TYPES.FETCH_PRODUCT,
        payload: data
      })
    } catch (error) {
      console.log("error", error)
    }
  }
}
