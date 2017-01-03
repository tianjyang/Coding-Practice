const subStringSum = (string) => {

  let dpArray = new Array(string.length);
  for (let i = 0; i < string.length; i++ ) {
    if ( i === 0 ) {
      dpArray[0] = parseInt(string[i]);
    } else {
      dpArray[i] =  dpArray[i-1]*11 + Math.pow(2, i) * parseInt(string[i]);
    }
  }
  return dpArray[string.length-1];
};

console.log("expect 16 to be 23");
console.log(subStringSum("16"));

console.log("expect 123 to be 164");
console.log(subStringSum("123"));
