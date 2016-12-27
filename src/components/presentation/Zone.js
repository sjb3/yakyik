'use strict';

import React, { Component } from 'react';
import styles from './styles';

class Zone extends Component {

  render(){
    const zoneStyle = styles.zone
    const zipCode = this.props.currentzone.zipCodes[0]
    return (
      <div style={zoneStyle.container}>
        <h2>
        <a style={zoneStyle.title} href="#">{this.props.currentzone.name}</a>
        </h2>
        <span className="detail">zip: {zipCode}</span><br />
        <span className="detail">{this.props.currentzone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone;
