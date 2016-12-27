const memo = {};

const findNumPairs = (input) => {
  if ( input.length <= 1 ) {
    return 0;
  }

  if ( input.length === 2 ) {
    if (input[0]===input[1]) {
      return 1;
    } else {
      return 0;
    }
  }

  let count = 0;
  let firstChar = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i] === firstChar) {
      count += 1;
    }
  }

  let subString = input.slice(1);

  if (memo[subString]) {
    return count + memo[subString];
  } else {
    memo[subString] = findNumPairs(subString);
    return count + memo[subString];
  }
};

const findNumShortPalindromes = (input) => {
  let count = 0;
  let currentFrontChar;
  let currentBackChar;

  for (let i = 0; i < input.length; i++) {
    currentFrontChar = input[i];
    for (let j = i + 3; j < input.length; j++ ) {
      currentBackChar = input[j];
      if (currentFrontChar === currentBackChar) {
        count += findNumPairs(input.slice(i+1,j));
      }
    }
  }
  // return count;

  // hacker rank output here
  console.log(count%(Math.pow(10,9)+7));
};


// console.log("ensure find num pairs works");
// console.log("expect answer to be 3");
// console.log(findNumPairs("aaa"));
//
// console.log("ensure find num pairs works");
// console.log("expect answer to be 6");
// console.log(findNumPairs("aaaa"));
//
// console.log("ensure find num pairs works");
// console.log("expect answer to be 28");
// console.log(findNumPairs("aaaaaaaa"));
//
// console.log("ensure find num pairs works");
// console.log("expect answer to be 0");
// console.log(findNumPairs("ab"));
//
// console.log("ensure find num pairs works");
// console.log("expect answer to be 1");
// console.log(findNumPairs("aba"));
//
// console.log("ensure find num pairs works");
// console.log("expect answer to be 3");
// console.log(findNumPairs("abaa"));

console.log("ensure find num short palindromes works");
console.log("expect kkkkkkz to be 15");
(findNumShortPalindromes("kkkkkkz"));

console.log("expect ghhggh to be 4");
(findNumShortPalindromes("ghhggh"));
