'use strict';

import React, { Component } from 'react';
import Zone from '../presentation/Zone';

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      list: [
        {name: 'Zone 1', zipCode: '10012', numComments: 10},
        {name: 'Zone 2', zipCode: '12412', numComments: 120},
        {name: 'Zone 3', zipCode: '10012', numComments: 103},
        {name: 'Zone 4', zipCode: '92122', numComments: 210}
      ]
    }
  }

  render(){
    const listItems = this.state.list.map((zone, i) => {
      return (
        <li key={i}><Zone currentzone={zone} /></li>
      )
    });

    return(
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
};

export default Zones
