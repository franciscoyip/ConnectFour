import React, { Component } from 'react';

export default class Connect4Control extends Component {

  renderArrows() {
    var numOfCols = 7;
    var prefix = 'control';
    var arrows = [];

    for(var ii = 0; ii < numOfCols; ii++){
      arrows.push(<a key={prefix+ii}><div className="arrow arrow-down"></div></a>);
    }

    return arrows;
  }


  render() {
    return (
      <div className='connect-control'>
        { this.renderArrows() }
      </div>
    );
  }

}
