var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function TowersOfHanoi() {
  this.stacks = [[3, 2, 1], [], []];
}

TowersOfHanoi.prototype.isWon = function () {
  if (this.stacks[0].length === 0 && this.stacks[1].length === 0) {
    return true;
  }
};

TowersOfHanoi.prototype.isValidMove = function (startTower, endTower) {
  if (this.stacks[startTower].length === 0) {
    return false;
  } else if (this.stacks[startTower][this.stacks[startTower].length - 1 ] >
    this.stacks[endTower][this.stacks[endTower].length - 1 ]) {
      return false;
    } else {
      return true;
    }
};

TowersOfHanoi.prototype.move = function (startTower, endTower) {
  if (this.isValidMove(startTower, endTower)) {
   this.stacks[endTower].push(this.stacks[startTower].pop());
  }
};

TowersOfHanoi.prototype.print = function () {
  console.log();
  console.log("Stack 0: " + this.stacks[0]);
  console.log("Stack 1: " + this.stacks[1]);
  console.log("Stack 2: " + this.stacks[2]);
};

TowersOfHanoi.prototype.promptMove = function (callback) {
  this.print();
  var that = this;
  reader.question("From Which Tower? ", function(startTower) {
    reader.question("To Which Tower? ", function(endTower) {
      if (!Number.isInteger(startTower) || !Number.isInteger(endTower) ) {
        console.log("PLEASE TYPE IN VALID NUMBER");
        that.promptMove(callback);
      }
      else {
        callback(startTower, endTower);
      }
    });
  });
};

TowersOfHanoi.prototype.run = function (completionCallback) {
  var that = this;

  this.promptMove(
    function (startTower, endTower) {
      that.move(startTower, endTower);

      if (!that.isWon()) {
        that.run(completionCallback);
      }
      else{console.log("YOU WIN MAN");
      completionCallback();}
    });
};


var game = new TowersOfHanoi();
game.run(function () {reader.close();
});
