'use strict';

import React, { Component } from 'react';
import Comment from '../presentation/Comment';
import styles from './styles';
import superagent from 'superagent';

class Comments extends Component {
  constructor() {
    super()
      this.state = {
        comments: {
          username: '',
          body: '',
          timestamp: ''
        },
        list: []
      }
  }

  ComponentDidMount(){
      console.log('ComponentDidMount:');
  }

  submitComment(){
    console.log('submitComment: '+ JSON.stringify(this.state.comment));

    let updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.comment)
    this.setState({
      list: updatedList
    })
  }

  updateUsername(event){
    // console.log('updateUsername: '+ event.target.value);
    // this.state.comment['username'] = event.target.value WRONG WAY
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = event.target.value;
    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event){
    // console.log('updateBody: '+ event.target.value);

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = event.target.value;
    this.setState({
      comment: updatedComment
    })
  }

  updateTimeStamp(event){
    // console.log('updateTimeStamp'+ event.target.value);

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['timestamp'] = event.target.value;
    this.setState({
      comment: updatedComment
    })
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
            <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comments"/><br />
            <input onChange={this.updateTimeStamp.bind(this)} className="form-control" type="text" placeholder="TimeStamp"/><br />
            <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit comment</button>
          </div>
      </div>
    )
  }
}

export default Comments;
