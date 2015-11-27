var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askifGreaterThan(el1, el2, callback) {
  reader.question("Is " + el1 + " greater than " + el2 + "? ",
    function(answer) {

    switch(answer) {
      case 'yes':
        callback(true);
        break;
      case 'no':
        callback(false);
        break;
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  var temp;
  if(i < arr.length - 1){
    askifGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
      if(isGreaterThan){
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if(i === (arr.length - 1)){
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps){
    console.log(arr);
    if(madeAnySwaps){
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
