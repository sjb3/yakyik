'use strict';

import React, { Component } from 'react';
import Comment from './Comment';
import styles from './styles';

class Comments extends Component {
  constructor() {
    super()
      this.state = {
        list: [
          {body: 'comment 1', username: 'dump', timestamp: '1:20'},
          {body: 'comment 2', username: '2dump', timestamp: '1:20'},
          {body: 'comment 3', username: '3dump', timestamp: '1:20'}
        ]
      }
  }

  render(){
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li><Comment currentComment={comment}/></li>
      )
    })
    return (
      <div>
        <h2>Zone 1 Comments</h2>
          <div style = {styles.comment.commentsBox}>
            <ol style={{listStyleType: 'none'}}>
              { commentList }
            </ol>
          </div>
      </div>
    )
  }
}

export default Comments;
