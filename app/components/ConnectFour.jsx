import React, { Component }from 'react';

import Connect4Control from 'Connect4Control';
import Connect4Board from 'Connect4Board';

export default class ConnectFour extends Component {
  render() {
    return (
      <div className="small-centered small-11 medium-7 medium-centerd large-8 large-centered columns">
          <h1 className="page-title">Connect Four</h1>
          <Connect4Control/>
          <Connect4Board/>
      </div>
    );
  }
}
