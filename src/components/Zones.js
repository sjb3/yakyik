'use strict';

import React, { Component } from 'react';

class Zones extends Component {
  render(){
    return(
      <div>
        <ul>
          <div>
            <li><a href="#">Zone 1</a></li>
            <span>10012</span><br />
            <span>10 comments</span>
          </div>

          <div>
            <li><a href="#">Zone 2</a></li>
            <span>10012</span><br />
            <span>10 comments</span>
          </div>

          <div>
            <li><a href="#">Zone 3</a></li>
            <span>10012</span><br />
            <span>10 comments</span>
          </div>

          <div>
            <li><a href="#">Zone 4</a></li>
            <span>10012</span><br />
            <span>10 comments</span>
          </div>
        </ul>
      </div>
    )
  }
};

export default Zones
