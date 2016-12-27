'use strict';

import React, { Component } from 'react';
import styles from './styles';

class Entry extends Component {

  render(){
    const entryStyle = styles.entry;

    return (
      <div style={entryStyle.container}>
        <h2 style={entryStyle.header}>
          <a style={entryStyle.header}>{this.props.currententry.title}</a>
        </h2>
          <span className="detail">{this.props.currententry.text}</span><br />
          <span className="detail">{this.props.currententry.type} project type</span>        
      </div>
    )
  }
}

export default Entry
