import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_RESET,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_SEARCH_FAIL,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
} from '../constants/productConstants'

// REDUCER TO LOAD ALL PRODUCT:
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// REDUCER TO LOAD Single Products:
export const productDetailsReducer = (
  state = { product: { reviews: [], images: [] }, related: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload.product,
        related: action.payload.related,
      }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_LIST_RESET:
      return { ...state, product: { reviews: [], images: [] } }
    default:
      return state
  }
}

// Searched Products Reducer:
export const productSearchReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_SEARCH_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_SEARCH_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
