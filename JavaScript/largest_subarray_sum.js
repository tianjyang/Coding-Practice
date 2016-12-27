// const maximumContiguousSum = (input) => {
//   let dpArray = [];
//   for (let i = 0; i < input.length; i++) {
//     dpArray.push(0);
//   }
//   console.log(dpArray);
//
//   if (input[0] < 0) {
//     dpArray[0] = 0;
//   } else {
//     dpArray[0] = input[0];
//   }
//
//   for (let i = 1; i < input.length; i++) {
//     if (input[i] + dpArray[i-1] < 0) {
//       dpArray[i] = 0;
//     } else {
//       dpArray[i] = input[i] + dpArray[i-1];
//     }
//   }
//   console.log(dpArray);
//   return dpArray[input.length-1]
//
// };
//
//
// console.log(maximumContiguousSum([2,-1,2,3,4,-5]));
