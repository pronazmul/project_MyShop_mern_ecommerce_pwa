import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userInfo.email ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { form: location } }} />
        )
      }
    ></Route>
  )
}

export default ProtectedRoute
