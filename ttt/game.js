var Board = require('./board');

function Game(reader) {
  this.gameBoard = new Board();
  this.player = 'X';
}

Game.prototype.turn = function(reader, callback) {
  this.gameBoard.print();
  var that = this;
  reader.question('Where would you like to place ' + that.player + ': \n',
    function(answer) {
      callback(answer.split(','), that.player, reader);
    }
  );
};

Game.prototype.run = function(reader, completionCallback) {
  var that = this;

  this.turn(reader, function(position, mark) {
    that.gameBoard.placeMark(position, mark);
    if (!that.gameBoard.gameOver()) {
      that.player = (that.player === "X" ? 'O' : "X");
      that.run(reader, completionCallback);
    } else {
      completionCallback();
    }
  });
};

module.exports = Game;
