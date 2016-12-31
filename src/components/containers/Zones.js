'use strict';

import React, { Component } from 'react';
import { CreateZone, Zone } from '../presentation';
import superagent from 'superagent';
import axios from 'axios';
// import { APIManager } from '../../utils/APIManager';

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      // zone: {
      //   name: '',
      //   zipCode: '',
      //   type: ''
      // },
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
// no need to keep
  // updateZone(event){
  //   console.log('updateZone: '+event.target.id+ ' == ' +event.target.value);
  //
  //   let updatedZone = Object.assign({}, this.state.zone)
  //   updatedZone[event.target.id] = event.target.value
  //   this.setState({
  //     zone: updatedZone
  //   })
  // }

  addZone(zone){
    console.log('Add ZONE' + JSON.stringify(zone));

    let updatedZone = Object.assign({}, zone) // originally list

    // updatedZone['zipCode'] = updatedZone.zipCode.split(',')//necessary>

    axios
    .post('/api/zone')
    .then((response) => {
      console.log('Add ZONE: '+ data.results);
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(data.results)
      this.setState({
        list: updatedList
      })

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
        <CreateZone onCreate={this.addZone.bind(this)} />
      </div>
    )
  }
};

export default Zones;
