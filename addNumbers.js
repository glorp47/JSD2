var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// put stuff here!!!!!!
var addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft === 0){
    reader.close();
    completionCallback(sum);
  } else {
      reader.question("Please enter number: ", function (answer) {
        sum += parseInt(answer);
        console.log(sum);
        numsLeft -= 1;
        addNumbers(sum, numsLeft, completionCallback);
      });
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);

});
