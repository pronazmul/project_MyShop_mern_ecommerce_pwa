import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FooterDextop from './components/common/FooterDextop'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import HomeScreen from './components/screens/HomeScreen'
import ShopScreen from './components/screens/ShopScreen'
import AboutScreen from './components/screens/AboutScreen'
import ContractScreen from './components/screens/ContractScreen'
import LoginScreen from './components/screens/LoginScreen'
import ProductDetailsScreen from './components/screens/ProductDetailsScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import AccountScreen from './components/screens/AccountScreen'
import CheckoutScreen from './components/screens/CheckoutScreen'
import CartScreen from './components/screens/CartScreen'
import MobileFooter from './components/common/MobileFooter'
import MobileHeader from './components/common/MobileHeader'
import CartSidebar from './components/sections/CartSidebar'
import NotificationScreen from './components/screens/NotificationScreen'
import OrderScreen from './components/screens/OrderScreen'
import TestScreen from './components/TestScreen'
import ProtectedRoute from './components/authentication/ProtectedRoute'
import SearchScreen from './components/screens/SearchScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <MobileHeader />
      <Navbar />
      <CartSidebar />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/search/:product' component={SearchScreen} exact />
        <Route path='/shop/:searchedCategory?' component={ShopScreen} exact />
        <Route path='/shop/product/:id' component={ProductDetailsScreen} />
        <ProtectedRoute path='/account' exact>
          <AccountScreen />
        </ProtectedRoute>
        <ProtectedRoute path='/checkout'>
          <CheckoutScreen />
        </ProtectedRoute>
        <ProtectedRoute path='/notification'>
          <NotificationScreen />
        </ProtectedRoute>
        <ProtectedRoute path='/order'>
          <OrderScreen />
        </ProtectedRoute>
        <Route path='/about' component={AboutScreen} />
        <Route path='/contract' component={ContractScreen} />
        <Route path='/cart' component={CartScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/test' component={SearchScreen} />
      </Switch>
      <FooterDextop />
      <MobileFooter />
    </Router>
  )
}

export default App
