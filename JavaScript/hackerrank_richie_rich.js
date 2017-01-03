const isPalindrome = (string) => {
  let output = true;
  for (let i = 0; i < string.length; i++){
    output = output && (string[i] === string[string.length - 1 - i]);
  }
  return output;
};

const richieRich = (string,k) => {
  if (k < 0) {
    return "-1";
  }

  if (string.length === 0) {
    return "-1";
  }

  if (k === 0) {
    if (isPalindrome(string)) {
      return string;
    } else {
      return "-1";
    }
  }

  if (string.length === 1 && k >= 1) {
    return '9';
  }

  if (string.length === 2 && k === 1) {
    if (parseInt(string[0]) > parseInt(string[1])) {
      return string[0] + string[0];
    } else {
      return string[1] + string[1];
    }
  }

  if (string.length === 2 && k === 2) {
    return '99';
  }

  let first = "-1";
  let second = "-1";
  let third = "-1";
  let firstRecursive, secondRecursive, thirdRecursive;
  if (string[0] === string[string.length-1]) {
    firstRecursive = richieRich(string.slice(1,-1),k);
    if (firstRecursive === "-1") {
      first = "-1";
    } else {
      first = string[0] + firstRecursive + string[string.length -1];
    }
  }
  secondRecursive = richieRich(string.slice(1,-1),k-1);
  if (secondRecursive !== "-1") {
    if (parseInt(string[0]) > parseInt(string[string.length-1])) {
      second = string[0] + secondRecursive + string[0];
    } else {
      second = string[string.length-1] + secondRecursive + string[string.length-1];
    }
  }

  thirdRecursive = richieRich(string.slice(1,-1),k-2);
  if (thirdRecursive !== "-1") {
    third = 9 + thirdRecursive + 9;
  }
  let max = Math.max(first,second,third);
  if (max === -1) {
    return "-1";
  } else {
    return max;
  }


};

console.log("richieRich with '1' and k = 0 should return 1");
console.log(richieRich("1",0));
console.log("richieRich with '89' and k = 0 should return -1");
console.log(richieRich("89",0));
console.log("richieRich with '17' and k = 1 should return 77");
console.log(richieRich("17",1));
console.log("richieRich with '171' and k = 1 should return 191");
console.log(richieRich("171",1));
console.log("richieRich with '123456' and k = 2 should return -1");
console.log(richieRich("123456",2));
