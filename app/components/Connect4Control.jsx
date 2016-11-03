import React, { Component } from 'react';

import {connect} from 'react-redux';

class Connect4Control extends Component {

  notifyStore(colIndex){
    let {dispatch, connect4} = this.props;
    console.log(connect4);
  }

  renderArrows() {
    var numOfCols = 7;
    var prefix = 'control';
    var arrows = [];

    for(let ii = 0; ii < numOfCols; ii++){
      arrows.push(<a key={prefix+ii} onClick={(e)=>{
        e.preventDefault();
        this.notifyStore(ii);
      }}><div className="arrow arrow-down"></div></a>);
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

function mapStateToProps(state){
  return {
    connect4: state.connect4
  }
}

export default connect(
  mapStateToProps
)(Connect4Control);
