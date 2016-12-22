const maximumSubArray = (input) => {
  let inputArray = input.split("\n");
  let numCases = parseInt(inputArray.shift());
  let currCase, targetNumber, currArray;
  let sum;
  let maxMod = -1;

  for (let i = 0; i < numCases; i++) {
    currCase = inputArray.shift();
    currCase = currCase.split(" ");
    targetNumber = parseInt(currCase[1]);
    currArray = inputArray.shift();
    currArray = JSON.parse( "[" + currArray.split(" ").join(",") + "]");

    for (let j = 0; j < currArray.length; j++) {
      sum = 0;
      for (let k = i; k < currArray.length; k++) {
        sum += currArray[k];
        if (sum%targetNumber > maxMod) {
          maxMod = sum%targetNumber;
        }
      }
    }
    console.log(maxMod);
  }
}
