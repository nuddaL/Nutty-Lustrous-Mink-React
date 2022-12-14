import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Subscriptions from './views/subscriptions'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Subscriptions} path="/subscriptions" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
