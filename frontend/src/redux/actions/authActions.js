import { USER_LOGIN, USER_LOGOUT } from '../constants/AuthConstants'

// process.env.REACT_APP_SERVER_URL

export const userLoginAction = (user) => (dispatch) => {
  dispatch({ type: USER_LOGIN, payload: user })
  localStorage.setItem('userInfo', JSON.stringify(user))
}

export const userLogoutAction = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT, payload: {} })
  localStorage.removeItem('userInfo')
}
