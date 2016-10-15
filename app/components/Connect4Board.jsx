import React, { Component } from 'react';

import Connect4Cell from 'Connect4Cell';

export default class Connect4Board extends Component {

  renderCells() {
    let numOfCols = 7;
    let cells = [];
    let pre = 'td'
    for(let jj = 0; jj < numOfCols; jj++){
      cells.push(<Connect4Cell key={pre+jj}/>);
    }
    return cells;
  }

  renderRows() {

    let numOfRows = 6;
    let rows = [];
    let pre = 'tr';
    for(let ii = 0; ii < numOfRows; ii++){
      rows.push(<tr key={pre+ii}>{this.renderCells()}</tr>);
    }
    return rows;
  }

  render() {
    return (
      <div className='connect-board'>
        <table className='connect-table'>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <div className="connect-legend">
          <div className="disc red">1</div>
          <div className="disc yellow">2</div>
        </div>
      </div>
    );
  }

}
