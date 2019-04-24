import React, { Component } from 'react'
import { GuestProvider } from './providers/GuestProvider'
import GuestList from './components/GuestList/GuestList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <GuestProvider>
        <div className="App">
          <GuestList />
        </div>
      </GuestProvider>
    )
  }
}

export default App
