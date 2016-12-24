const validString = (string) => {
  let charCountMap = {};
  let countMap = {};
  let baseCount, deviantCount;

  for (let i = 0; i < string.length; i++) {
    if (charCountMap[string[i]]) {
      charCountMap[string[i]] += 1;
    } else {
      charCountMap[string[i]] = 1;
    }
  }

  Object.keys(charCountMap).forEach((el)=>{
    if (countMap[el]) {
      countMap[el] += 1;
    } else {
      countMap[el] = 1;
    }
  });
  let countsArray = Object.keys(countMap);

  if (countsArray.length === 1) {
    console.log("YES");
  } else if ( countsArray.length === 2 ) {
    // find the baseCount and the deviantCount
    if (countMap[countsArray[0]] > countMap[countsArray[1]]) {
      baseCount = countsArray[0];
      deviantCount = countsArray[1];
    } else {
      baseCount = countsArray[1];
      deviantCount = countsArray[0];
    }
    if (deviantCount === 1) {
      console.log("YES");
    } else if (deviantCount - baseCount === 1) {
      console.log("YES");
    }
  } else {
    console.log("NO");
  }


};
