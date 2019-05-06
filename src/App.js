import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GuestProvider } from './providers/GuestProvider'
import GuestList from './components/GuestList/GuestList'
import GuestAdd from './components/GuestAdd/GuestAdd'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <GuestProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/add" component={GuestAdd} />
            <Route exact path="/" component={GuestList} />
          </Switch>
        </div>
      </Router>
    </GuestProvider>
  )
}

export default App
