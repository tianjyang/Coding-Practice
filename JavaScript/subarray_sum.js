const dpSubArraySum = (array) =>{
  if (array.length === 0) {
    return 0
  }
  let multiplicationFactor;
  let dpArray = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      dpArray[i] = array[i];
    } else {
      multiplicationFactor = Math.pow(2,i);
      dpArray[i] = multiplicationFactor * array[i];
      dpArray[i] += dpArray[i-1]* 2;
    }
  }
  return dpArray[array.length-1];
};


console.log("expect an empty array to return 0");
console.log(dpSubArraySum([]));

console.log("expect a single element array to return its only value");
console.log("expect this to be 1");
console.log(dpSubArraySum([1]));

console.log("expect this to be 999");
console.log(dpSubArraySum([999]));

console.log("expect two elements to be correct");
console.log("expect this to be 6");
console.log(dpSubArraySum([1,2]));
console.log("expect this to be 22");
console.log(dpSubArraySum([1,10]));

console.log("expect three elements to be correct");
console.log("expect this to be 24");
console.log(dpSubArraySum([1,2,3]));

console.log("expect three elements to be correct");
console.log("expect this to be 61");
console.log(dpSubArraySum([4,5,6]));
