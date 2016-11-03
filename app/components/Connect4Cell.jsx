import React, { Component } from 'react';

import { connect } from 'react-redux';

class Connect4Cell extends Component {
  render() {

    return (
      <td className="connect-cell"></td>
    );
  }
}

export default connect(
  //dispatch already at props after we connect
)(Connect4Cell);
