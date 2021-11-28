import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from './../constants/cartConstants'

export const addToCartAction =
  (id, qty = 1) =>
  async (dispatch, getState) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/products/${id}`
    )
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        _id: data._id,
        name: data.name,
        image: data.images[0],
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }

export const saveShippingAddressAction = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const removeFromCartAction = (id) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
