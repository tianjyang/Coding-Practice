const nextLexicographicPermutation = (array) => {




}

const findNextLargestIndex = (array,target) => {
  console.log(array);
  if (array.length === 0) {
    return -1;
  }

  if (array.length === 1) {
    if ((array[0]) > target) {
      return 0;
    } else {
      return -1;
    }
  }

  let middle = Math.floor(array.length/2);
  if (target < array[middle]) {
    let leftResult = findNextLargestIndex(array.slice(0,middle),target);
    if (leftResult === -1) {
      return middle;
    } else {
      return leftResult;
    }
  } else {
    let rightResult = findNextLargestIndex(array.slice(middle + 1,array.length),target);
    if (rightResult === -1) {
      return -1;
    } else {
      return rightResult + middle + 1;
    }
  }
};

//
// array = [1,2,3];
// target = 0;
// console.log("expect this to be 0");
// console.log(findNextLargestIndex(array,target));
//
// array = [1,2,3];
// target = 1;
// console.log("expect this to be 1");
// console.log(findNextLargestIndex(array,target));
//
// array = [1,2,3];
// target = 2;
// console.log("expect this to be 2");
// console.log(findNextLargestIndex(array,target));
//
// array = [1,2,3];
// target = 3;
// console.log("expect this to be -1");
// console.log(findNextLargestIndex(array,target));
//
// array = [1,2,3,4,5,6,8,9,10];
// target = 6;
// console.log("expect this to be 6");
// console.log(findNextLargestIndex(array,target));

// array = [1,2,2,2,2,2,2,2,10];
// target = 6;
// console.log("expect this to be 8");
// console.log(findNextLargestIndex(array,target));

const findNextLargestIndexAlt = (array,search,start,end) => {
  if (end === 0) {
    if (array[end] > search) {
      return end;
    } else {
      return -1;
    }
  }

  if (start === (array.length - 1)) {
    if (array[start] > search) {
      return start;
    } else {
      return -1;
    }
  }

  if ( start > end ){
    return -1;
  }

  // console.log("search params are");
  // console.log(array);
  // console.log(search);
  // console.log(start);
  // console.log(end);
  // console.log("end of params");

  let middleIndex = Math.floor((end+start)/2);
  let middleValue = array[middleIndex];
  //
  // console.log("params to be passed to left are");
  // console.log(array);
  // console.log(search);
  // console.log(start);
  // console.log(middleIndex-1);

  if ( middleValue > search ) {
    let leftRecursiveCall = findNextLargestIndexAlt(array,search,start,middleIndex-1);
    if (leftRecursiveCall === -1) {
      return middleIndex;
    } else {
      return leftRecursiveCall;
    }
  } else {
    let rightRecursiveCall = findNextLargestIndexAlt(array,search,middleIndex+1,end);
    if ( rightRecursiveCall === -1 ) {
      return -1;
    } else {
      return rightRecursiveCall;
    }
  }
};

let array, target;

array = [1,2,3];
target = 0;
console.log("expect this to be 0");
console.log(findNextLargestIndexAlt(array,target,0,array.length-1));

array = [1,2,3];
target = 1;
console.log("expect this to be 1");
console.log(findNextLargestIndexAlt(array,target,0,array.length-1));

array = [1,2,3];
target = 2;
console.log("expect this to be 2");
console.log(findNextLargestIndexAlt(array,target,0,array.length-1));

array = [1,2,3];
target = 3;
console.log("expect this to be -1");
console.log(findNextLargestIndexAlt(array,target,0,array.length-1));

array = [1,2,3,4,5,6,8,9,10];
target = 6;
console.log("expect this to be 6");
console.log(findNextLargestIndexAlt(array,target,0,array.length-1));

array = [1,2,2,2,2,2,2,2,10];
target = 6;
console.log("expect this to be 8");
console.log(findNextLargestIndexAlt(array,target,0,array.length-1));
