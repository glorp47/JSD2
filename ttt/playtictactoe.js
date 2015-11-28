var tictactoe = require('./index');

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new tictactoe.Game();
game.run(reader, function() {reader.close();});
