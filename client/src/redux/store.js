// External Modules
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Custom Reducers
import { authReducer } from './reducers/authReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  productDetailsReducer,
  productListReducer,
  productSearchReducer,
} from './reducers/productReducers'
import { wishlistReducer } from './reducers/wishlistReducers'

const reducer = combineReducers({
  productList: productListReducer,
  searchProducts: productSearchReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  userLogin: authReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const wishlistItemsFromLocalStorage = localStorage.getItem('wishlistItems')
  ? JSON.parse(localStorage.getItem('wishlistItems'))
  : []

const userFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {}

const initialState = {
  cart: {
    cartSidebar: false,
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
  },
  wishlist: { wishlistItems: wishlistItemsFromLocalStorage },
  userLogin: {
    userInfo: userFromLocalStorage,
  },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
