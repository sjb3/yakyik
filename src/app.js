'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Zones from './components/Zones';
import Home from './components/Home';

class App extends Component {
  render(){
    return(
      <div>
        <h1>Hello React!</h1>
        <Home />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
