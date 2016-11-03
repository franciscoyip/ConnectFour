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

var defaultConnect4 = new Connect4();

export default function connect4Reducer(state = defaultConnect4, action) {
  switch (action.type) {
    case 'SET_WINNER':
      var newState = Object.assign({}, state);
      newState.winner = action.state;
      return newState;
      //break;
    default:
      return state;
  }
}
