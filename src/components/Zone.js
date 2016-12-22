'use strict';

import React, { Component } from 'react';
import styles from './styles';

class Zone extends Component {

  render(){
    const zoneStyle = styles.zone

    return (
      <div style={zoneStyle.container}>
        <h2>
        <a style={zoneStyle.title} href="#">{this.props.currentzone.name}</a>
        </h2>
        <span>zip: {this.props.currentzone.zipCode}</span><br />
        <span>{this.props.currentzone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone;
