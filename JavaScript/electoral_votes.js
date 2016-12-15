// given an array of random values, write an algorithm to determine
// if a certain sum can be found.

// 8 in [1,5,10,11,7] => true
// 3 in [1,5,10,11,7] => false

let findCertainSum = (array,val) => {
  let numRows = val;
  let numCols = array.length;
  let dpGrid = [];
  let currentVal;
  let firstCheck, secondCheck;

  for (let i = 0; i <= numRows; i++) {
    dpGrid.push([]);
  }
// dpGrid[vals][arrayvals]
  for (let arrayValsIdx = 0; arrayValsIdx < array.length; arrayValsIdx++) {
    currentVal = array[arrayValsIdx];
    for (let valIdx = 0; valIdx <= val; valIdx++) {
      if (valIdx === currentVal) {
        dpGrid[valIdx][arrayValsIdx] = true;
      } else {
        if ((valIdx - currentVal >= 0) && (arrayValsIdx - 1 >=0)) {
          firstCheck = dpGrid[valIdx - currentVal][arrayValsIdx - 1];
        } else {
          firstCheck = false;
        }

        if (arrayValsIdx - 1 >= 0) {
          secondCheck = dpGrid[valIdx][arrayValsIdx-1];
        } else {
          secondCheck = false;
        }
        dpGrid[valIdx][arrayValsIdx] = firstCheck || secondCheck;
      }
    }
  }
  return dpGrid[numRows][numCols-1];
};

console.log("finding 8 in [1,5,10,11,7] should be true");
console.log("it is evaluated to be ", findCertainSum([1,5,10,11,7],8));
console.log("********");
console.log("finding 3 in [1,5,10,11,7] should be false");
console.log("it is evaluated to be ", findCertainSum([1,5,10,11,7],3));
