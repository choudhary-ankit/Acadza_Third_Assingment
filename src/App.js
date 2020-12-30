import React, { Component } from 'react'
import Homepage from './Component/Homepage/Homepage';
import NavBar from './Component/Homepage/NavBar';
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
         <Homepage/>
      </div>
    )
  }
}
