import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'
import TestScreen from './components/screens/TestScreen'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomeScreen />
        </Route>
        <Route path='/test' exact>
          <TestScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
