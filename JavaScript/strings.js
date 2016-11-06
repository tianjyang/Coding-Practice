let isUnique = (string) =>{
  if (string.length === 0){
    return false;
  }
  let count = {};
  for (let x = 0; x < string.length; x++) {
    if (count[string[x]]) {
      count[string[x]] += 1;
    } else {
      count[string[x]] = 1;
    }
  }

  let output = true;
  let keys = Object.keys(count);
  keys.forEach((el)=>{
    if (count[el] > 1) {
      output = false;
    }
  });
  return output;
};
//
// console.log(isUnique("abcdef"));
// console.log(isUnique("bbbbb"));

let isUniqueDataStruct = (string) => {
  let firstChar, secondChar;
  for (let i = 0; i < string.length; i++) {
    firstChar = string[i];
    for (let j = i + 1; j < string.length; j++) {
      secondChar = string[j];
      if (firstChar === secondChar) {
        return false;
      }
    }
  }
  return true
};


console.log(isUniqueDataStruct("abcdef"));
console.log(isUniqueDataStruct("gggggg"));
