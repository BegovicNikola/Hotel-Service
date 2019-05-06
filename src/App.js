import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GuestProvider } from './providers/GuestProvider'
import Navigation from './components/Navigation/Navigation'
import GuestList from './components/GuestList/GuestList'
import GuestAdd from './components/GuestAdd/GuestAdd'
import NotFound from './utils/pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <GuestProvider>
      <Router>
        <div className="App">
          <Navigation />
          <div className="container mt-3">
            <Switch>
              <Route exact path="/" component={GuestList} />
              <Route exact path="/add" component={GuestAdd} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GuestProvider>
  )
}

export default App
