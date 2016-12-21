'use strict';

import React, { Component } from 'react';
import Zone from './Zone';

class Zones extends Component {
  render(){
    return(
      <div>
        <ul>
          <div>
            <li>< Zone name="Zone1" zipCode="98101" numComment={2} /></li>
            <li>< Zone name="Zone2" zipCode="98102" numComment={2}/></li>
            <li>< Zone name="Zone3" zipCode="98103" numComment={22}/></li>
            <li>< Zone name="Zone4" zipCode="98106" numComment={21}/></li>
          </div>
          </ul>
      </div>
    )
  }
};

export default Zones
