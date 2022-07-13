import axios from 'axios'
import {
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from './../constants/wishlistConstants'

export const addToWishlistAction = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/products/${id}`
  )
  dispatch({
    type: WISHLIST_ADD_ITEM,
    payload: {
      _id: data._id,
      name: data.name,
      image: data.images[0],
      price: data.price,
      countInStock: data.countInStock,
    },
  })
  localStorage.setItem(
    'wishlistItems',
    JSON.stringify(getState().wishlist.wishlistItems)
  )
}

export const removeFromWishlistAction = (id) => (dispatch, getState) => {
  dispatch({ type: WISHLIST_REMOVE_ITEM, payload: id })
  localStorage.setItem(
    'wishlistItems',
    JSON.stringify(getState().wishlist.wishlistItems)
  )
}
