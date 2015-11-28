function Board() {
  this.grid = [["#", "#", "#"], ["#", "#", "#"], ["#", "#", "#"]];
}

Board.prototype.print = function () {
  for(var row = 0; row < 3; row++){
    console.log(this.grid[row].join(' | '));
    if(row===0 || row===1){
      console.log("----------");
    }
  }
};

Board.prototype.placeMark = function (position, mark, reader){
  console.log(reader);
  var x = parseInt(position[0]);
  var y = parseInt(position[1]);

  if (this.grid[x][y] !== '#') {
    reader.question('Where would you like to place ' + mark + ': \n',
      function(answer) {
      this.placeMark(answer.split(','), mark);
    });
  }
  else {
    this.grid[x][y] = mark;
  }
};

Board.prototype.hasWon = function (mark) {
  if (this.rowChecker() || this.colChecker() || this.diagChecker()){
    return true;
  }
  return false;
};

Board.prototype.rowChecker = function () {
  this.grid.forEach( function (element, index) {
    var row = element.join();
    if (row === "XXX" || row === "OOO") {
      return true;
    }
  });
  return false;
};

Board.prototype.colChecker = function () {
  for (var i = 0; i < this.grid.length; i++) {
    if (this.grid[0][i] === this.grid[1][i] && this.grid[1][i] === this.grid[2][i]) {
      if (this.grid[0][i] !== '#') {
        return true;
      }
    }
  }
  return false;
  };

Board.prototype.diagChecker = function () {
  return false;
};

Board.prototype.hasTied = function () {
  var flattened = this.grid.reduce(function(a, b) {
    return a.concat(b);
  });
  if(flattened.indexOf('#') === -1){
    return true;
  }
  else {
    return false;
  }
};

Board.prototype.gameOver = function () {
  if(this.hasTied()){
    console.log("CATSGAME");
    this.print();
    return true;
  } else if (this.hasWon()) {
    console.log("GAME OVER");
    this.print();
    return true;
  }
  return false;
};

module.exports = Board;
