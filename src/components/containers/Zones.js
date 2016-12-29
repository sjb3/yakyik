'use strict';

import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent from 'superagent';
import axios from 'axios';
import { APIManager } from '../../utils/APIManager';

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      zone: {
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
    .get('/api/zone')
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
    // .get('/api/zone', null, (err, response) => {
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

  updateZone(event){
    console.log('updateZone: '+event.target.id+ ' == ' +event.target.value);

    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  addZone(){
    console.log('Add ZONE' + JSON.stringify(this.state.zone));

    let updatedZone = Object.assign({}, this.state.zone) // originally list
    updatedZone['zipCode'] = updatedZone.zipCode.split(',')

    axios
    .post('/api/zone')
    .then((updatedZone) => {
      console.log('Add ZONE: '+ data.results);

    })
    .catch((err) => {
      alert('ERROR' + err.message);
    });


    // APIManager
    // .post('/api/zone', updatedZone, (err, response) => {
    //   if(err) return alert('ERROR: '+ err.message)
    //
    //   console.log('ZONE CREATED: ' + JSON.stringify(response.results))
    // })
  }

  render(){
    const listItems = this.state.list.map((zone, i) => {
      return (
        <li key={i}><Zone currentzone={zone} /></li>
      )
    });

    return(
      <div>
        <ul>
          {listItems}
        </ul>
        <input id="title" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Title"/><br />
        <input id="text" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Text"/><br />

        <button onClick={this.addZone.bind(this)} className="btn btn-danger" type="submit">Add Zone</button>
      </div>
    )
  }
};

export default Zones
