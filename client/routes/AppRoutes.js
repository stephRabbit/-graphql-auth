import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import Welcome from '../components/Welcome'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Dashboard from '../components/Dashboard'
import requireAuth from '../hoc/requireAuth'

const AppRoutes = () => {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={requireAuth(Dashboard)} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default AppRoutes