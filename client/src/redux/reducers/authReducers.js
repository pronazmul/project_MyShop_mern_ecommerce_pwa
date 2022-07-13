import { USER_LOGIN, USER_LOGOUT } from '../constants/AuthConstants'

export const authReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, userInfo: action.payload }
    case USER_LOGOUT:
      return { ...state, userInfo: action.payload }
    default:
      return state
  }
}
