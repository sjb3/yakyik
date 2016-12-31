'use strict';

import React, { Component } from 'react';

class CreateComment extends Component{
  constructor(){
    super()
    this.state = {
      comment: {
        body: '',
        username: ''
      }
    }
  }

updatedComment(event){
  console.log('updatedComment: ' + event.target.id + '==' + event.target.value);

  let updatedComment = Object.assign({}, this.state.comment)
  updatedComment[event.target.id] = event.target.value
  this.setState({
    comment: updatedComment
  })
}

submitComment(event){
  console.log('submitComment: ' + JSON.stringify(this.state.comment));
}

  render(){
    return (
      <div>
        <h3>Create Comment</h3>
        <input onChange = {this.updatedComment.bind(this)} id="username" className="form-control" type="text" placeholder="Username"/><br />
        <input onChange = {this.updatedComment.bind(this)} id="body" className="form-control" type="text" placeholder="Comment"/><br />
        <button onClick = {this.submitComment.bind(this)} className="btn btn-info">Submit comment</button>
      </div>
    )
  }
}

export default CreateComment;