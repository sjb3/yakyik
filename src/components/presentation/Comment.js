'use strict';

import React, { Component } from 'react';

class Comment extends Component{
  render(){
    return (
      <div style={{marginBottom: 16}}>
        <p style={{fontSize: 42, fontWeight: 500}}>{this.props.currentComment.body}</p><br />
        <span style={{fontWeight: 200}}>{this.props.currentComment.username}</span>
        <span style={{marginLeft:12, marginRight:12}}>|</span>
        <span>{this.props.currentComment.timestamp}</span>

      </div>
    )
  }
}

export default Comment
