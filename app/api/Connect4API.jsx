module.exports = {
  getCurrentPlayer: (connect4)=>{
    return connect4.currentPlayer
  },
  getNextPlayer: (connect4)=>{
    var currentPlayer = connect4.currentPlayer;
    return currentPlayer === 1 ? 2 : 1;
  },
  isGameEnded: (connect4)=>{
    return connect4.winner !== null || isBoardFull(connect4.board);
  },
  getSlotInfo: (connect4, row, column)=>{
    return connect4.board[row][column];
  },
  //Some Private Functions
  isBoardFull: (board)=>{
    return !(board.some(function(row){
      return row.some(function(slot){
        return slot === null;
      });
    }));
  },
};
