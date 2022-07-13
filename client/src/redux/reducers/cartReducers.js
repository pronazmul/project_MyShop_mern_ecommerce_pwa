import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SIDEBAR_ACTIVE,
  CART_SIDEBAR_HIDE,
} from './../constants/cartConstants'
export const cartReducer = (
  state = { cartItems: [], cartSidebar: false, shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const newProduct = action.payload
      const existItem = state.cartItems.find((x) => x._id === newProduct._id)
      if (existItem) {
        return {
          ...state,
          cartSidebar: true,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? newProduct : x
          ),
        }
      } else {
        return {
          ...state,
          cartSidebar: true,
          cartItems: [...state.cartItems, newProduct],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      }
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case CART_SIDEBAR_ACTIVE:
      return {
        ...state,
        cartSidebar: true,
      }
    case CART_SIDEBAR_HIDE:
      return {
        ...state,
        cartSidebar: false,
      }
    default:
      return state
  }
}
