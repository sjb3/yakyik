'use strict';

import React, { Component } from 'react';
import { CreateComment, Comment } from '../presentation';
import styles from './styles';
import superagent from 'superagent';
import axios from 'axios';
// import { APIManager } from '../../utils';

class Comments extends Component {
  constructor() {
    super()
      this.state = {
        // comments: {
        //   username: '',
        //   body: ''
        // },
        list: []
      }
  }

  componentDidMount(){
      console.log('ComponentDidMount:');

      // APIManager
      // .get('/api/comment', null, (err, response) => {
      //   if(err){
      //     alert('ERROR' + err.message)
      //     return
      //   }
      //
      //   console.log('RESULTS: ' + JSON.stringify(response.results))
      //   this.setState({
      //     list: response.results
      //   })
      // })

      axios
      .get('/api/comment')
      .then((response) => {
        console.log(response.data);

        let results = response.data.results
        this.setState({
          list: results
        })
      })
      .catch((err) => {
        alert('ERROR' + err);
        return;
      });

      // superagent
      // .get('/api/comment')
      // .query(null)
      // .set('Accept', 'application/json')
      // .end((err, response) => {
      //   if(err){
      //     alert('ERROR' + err)
      //     return
      //   }
      //   console.log(JSON.stringify(response.body));
      //
      //   let results = response.body.results
      //   this.setState({
      //     list: results
      //   })
      // })
  }

  submitComment(comment){
    console.log('submitComment: '+ JSON.stringify(comment));

    let updatedComment = Object.assign({}, comment);

    axios
    .post('/api/comment')
    .then((response) => {
      console.log(response.data);

      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.data)
      this.setState({
        list: updatedList
      })
    })
    .catch((err) => {
      alert('ERROR' + err);
      return;
    });

  }
//updateUsername and updateBody no longer needed here, as they are being taken care of at CreateComment
  // updateUsername(event){
  //   // console.log('updateUsername: '+ event.target.value);
  //   // this.state.comment['username'] = event.target.value WRONG WAY
  //   let updatedComment = Object.assign({}, this.state.comment)
  //   updatedComment['username'] = event.target.value;
  //   this.setState({
  //     comment: updatedComment
  //   })
  // }
  //
  // updateBody(event){
  //   // console.log('updateBody: '+ event.target.value);
  //
  //   let updatedComment = Object.assign({}, this.state.comment)
  //   updatedComment['body'] = event.target.value;
  //   this.setState({
  //     comment: updatedComment
  //   })
  // }

  // updateTimeStamp(event){
  //   // console.log('updateTimeStamp'+ event.target.value);
  //
  //   let updatedComment = Object.assign({}, this.state.comment)
  //   updatedComment['timestamp'] = event.target.value;
  //   this.setState({
  //     comment: updatedComment
  //   })
  // }

  render(){
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment currentComment={comment}/></li>
      )
    })
    return (
      <div>
        <h2>COMMENTS</h2>
          <div style = {styles.comment.commentsBox}>
            <ol style={styles.comment.commentsList}>
              { commentList }
            </ol>
            <CreateComment onCreate={this.submitComment.bind(this)} />
          </div>
      </div>
    )
  }
}

export default Comments;
