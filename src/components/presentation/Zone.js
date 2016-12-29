'use strict';

import React, { Component } from 'react';
import styles from './styles';

class Zone extends Component {

  render(){
    const zoneStyle = styles.zone;

    return (
      <div style={zoneStyle.container}>
        <h2 style={zoneStyle.header}>
          <a style={zoneStyle.header}>{this.props.currentzone.title}</a>
        </h2>
          <span className="detail">{this.props.currentzone.text}</span><br />
          <span className="detail">{this.props.currentzone.type} project type</span>
      </div>
    )
  }
}

export default Zone
