'use strict';

import React, { Component } from 'react';
import Entry from '../presentation/Entry';
import superagent from 'superagent';
//use axios for god sake

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

  ComponentDidMount(){
    console.log('ComponentDidMount:');

    superagent
    .get('/api/entry')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if(err){
        alert('ERROR' + err)
        return
      }
      console.log(JSON.stringify(response.body));

      let results = response.body.results
      this.setState({
        list: results
      })
    })
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
        <input id="name" onChange={this.updateEntry.bind(this)} className="form-control" type="text" placeholder="Name"/><br />
        <input id="zipCode" onChange={this.updateEntry.bind(this)} className="form-control" type="text" placeholder="Zip Code"/><br />
        <button onClick={this.addEntry.bind(this)} className="btn btn-danger" type="submit">Add Entry</button>
      </div>
    )
  }
};

export default Entries
