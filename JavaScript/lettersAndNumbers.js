let lettersAndNums = (array) => {
  let outputArray = [];
  let subArray = [];
  let charCount = 0;
  let intCount = 0;
  for (let i = 0;i < array.length;i++){
    charCount = 0;
    intCount = 0;
    for (let j = i; j < array.length;j++){
      if (typeof array[j] === 'string') {
        charCount += 1;
      } else {
        intCount += 1;
      }
      if (charCount === intCount) {
        subArray = array.slice(i,j+1);
        if (subArray.length > outputArray.length) {
          outputArray = subArray;
        }
      }

    }
  }
  return outputArray;
};

module.exports = lettersAndNums;
