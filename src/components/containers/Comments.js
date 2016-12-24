'use strict';

import React, { Component } from 'react';
import Comment from '../presentation/Comment';
import styles from './styles';

class Comments extends Component {
  constructor() {
    super()
      this.state = {
        comments: {
          username: '',
          body: ''
        },

        list: [
          {body: 'comment 1', username: 'dump', timestamp: '1:20'},
          {body: 'comment 2', username: '2dump', timestamp: '1:20'},
          {body: 'comment 3', username: '3dump', timestamp: '1:20'}
        ]
      }
  }

  submitComment(){
    console.log('submitComment');
  }

  updateUsername(event){
    console.log('updateUsername: ', event.target.value);
    // this.state.comment['username'] = event.target.value WRONG WAY

  }

  updateComments(event){
    console.log('updateComments: ', event.target.value);
  }
  render(){
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment currentComment={comment}/></li>
      )
    })
    return (
      <div>
        <h2>Zone 1 Comments</h2>
          <div style = {styles.comment.commentsBox}>
            <ol style={styles.comment.commentsList}>
              { commentList }
            </ol>
            <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="UserName"/><br />
            <input onChange={this.updateComments.bind(this)} className="form-control" type="text" placeholder="Comments"/><br />
            <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit comment</button>
          </div>
      </div>
    )
  }
}

export default Comments;
