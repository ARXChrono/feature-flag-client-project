import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import { LoginScreen } from './pages/login'
import { DashboardScreen } from './pages/dashboard'

import './assets/app.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/dashboard" component={DashboardScreen} />
        <Route component={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
