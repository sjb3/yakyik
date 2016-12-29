'use strict';

import React, { Component } from 'react';
import Entry from '../presentation/Entry';
import superagent from 'superagent';
import axios from 'axios';
// import { APIManager } from '../../utils';

class Entries extends Component {
  constructor(){
    super()
    this.state = {
      entry: {
        name: '',
        zipCode: '',
        type: ''
      },

      list: []
    }
  }

  componentDidMount(){
    console.log('ComponentDidMount:')

    axios
    .get('/api/entry')
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

    // APIManager
    // .get('/api/entry', null, (err, response) => {
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

  }

  updateEntry(event){
    console.log('updateEntry: '+event.target.id+ ' == ' +event.target.value);

    let updatedEntry = Object.assign({}, this.state.entry)
    updatedEntry[event.target.id] = event.target.value
    this.setState({
      entry: updatedEntry
    })
  }

  addEntry(){
    console.log('Add ENTRY' + JSON.stringify(this.state.entry));

    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.entry)
    this.setState({
      list: updatedList
    })
  }

  render(){
    const listItems = this.state.list.map((entry, i) => {
      return (
        <li key={i}><Entry currententry={entry} /></li>
      )
    });

    return(
      <div>
        <ul>
          {listItems}
        </ul>
        <input id="title" onChange={this.updateEntry.bind(this)} className="form-control" type="text" placeholder="Title"/><br />
        <input id="text" onChange={this.updateEntry.bind(this)} className="form-control" type="text" placeholder="Text"/><br />
        <input id="type" onChange={this.updateEntry.bind(this)} className="form-control" type="text" placeholder="Type"/><br />

        <button onClick={this.addEntry.bind(this)} className="btn btn-danger" type="submit">Add Entry</button>
      </div>
    )
  }
};

export default Entries
