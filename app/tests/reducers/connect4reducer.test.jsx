import {expect} from '../helper';

import connect4Reducer from '../../reducers/connect4Reducer';


describe('Connect4Reducer', ()=>{

  it('should exist', ()=>{
    expect(connect4Reducer).to.exist;
  });

  function generateBoardArray(numOfRows, numOfCols){
    let board = [];
    for(let rowIndex = 0; rowIndex < numOfRows; rowIndex++){
      let row = [];
      for(let colIndex = 0; colIndex < numOfCols; colIndex++){
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  var Connect4 = function(){
    this.rows = 7;
    this.cols = 6;
    this.board = generateBoardArray(this.rows, this.cols);
    this.winner = null;
    this.currentPlayer = null;
  }

  var connect4 = null;

  beforeEach(()=>{
    connect4 = new Connect4();
  });

  describe('ACTION TYPE', ()=>{
    it('should return default state if action type is unknown', ()=>{
      let action = {
        type:'GIBISH',
        state: null
      };
      var response = connect4Reducer(undefined, action);
      expect(response).to.be.eql(connect4);
    });
  });

});
