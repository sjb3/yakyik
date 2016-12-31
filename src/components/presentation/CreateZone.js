'use strict';

import React, { Component } from 'react';

class CreateZone extends Component{
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: '',
        type: ''
      }
    }
  }

updateZone(event){
  console.log('updateZone: ' + event.target.id + '==' + event.target.value);

  let updated = Object.assign({}, this.state.zone)
  updated[event.target.id] = event.target.value
  this.setState({
    zone: updated
  })
}

submitZone(event){
  console.log('submitZone: ' + JSON.stringify(this.state.zone));
  let updated = Object.assign({}, this.state.zone)
  updated['zipCode'] = updated.zipCode.split(',')
  this.props.onCreate(updated)
}

  render(){
    return (
      <div>
        <h3>Create Zone</h3>
        <input onChange = {this.updateZone.bind(this)} id="name" className="form-control" type="text" placeholder="Name"/><br />
        <input onChange = {this.updateZone.bind(this)} id="zipcode" className="form-control" type="text" placeholder="Zipcode"/><br />
        <button onClick = {this.submitZone.bind(this)} className="btn btn-info">Submit zone</button>
      </div>
    )
  }
}

export default CreateZone;
