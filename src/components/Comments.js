'use strict';

import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  constructor() {
    super()
    
  }

  render(){
    return (
      <div>
        <h2>Zone 1 Comments</h2>
        <ol>
          <li><Comment /></li>
          <li><Comment /></li>
          <li><Comment /></li>
          <li><Comment /></li>
          <li><Comment /></li>
        </ol>
      </div>
    )
  }
}

export default Comments;
