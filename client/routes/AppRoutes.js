import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import Welcome from '../components/Welcome'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const AppRoutes = () => {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default AppRoutes