const oneSwapTest = (array) => {
  let arrayDup = array.slice(0);
  arrayDup.sort();
  let numDiffs = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== arrayDup[i]) {
      numDiffs += 1;
    }
  }

  if (numDiffs <= 2) {
    return true;
  } else {
    return false;
  }

};
