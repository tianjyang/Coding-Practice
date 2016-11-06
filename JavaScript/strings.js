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

console.log(isUnique("abcdef"));
console.log(isUnique("bbbbb"));
