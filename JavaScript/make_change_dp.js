const makeChange = (num,coins) => {
  let dpTable = [];
  for (let i = 0; i <= num; i++) {
    dpTable.push([]);
  }

  for (let i = 0; i<coins.length;i++) {
    dpTable[0].push(1);
  }

  let maxCoinIdx = coins.length;
  let maxNum = num;
  let latestCoin;
  let secondLatestCoin;
  let firstThingtoAdd;
  let secondThingtoAddArray = [];
  let secondThingtoAdd;

  for (let coinIdx = 0; coinIdx < maxCoinIdx; coinIdx++) {
    latestCoin = coins[coinIdx];
    for (let subNum = 1; subNum <= maxNum; subNum++) {
      if (subNum - latestCoin >= 0 ) {
        firstThingtoAdd = dpTable[subNum-latestCoin][coinIdx];
      } else {
        firstThingtoAdd = 0;
      }
        if (coinIdx >= 1) {
          secondThingtoAdd = dpTable[subNum][coinIdx-1];
        } else {
          secondThingtoAdd = 0;
        }


      dpTable[subNum][coinIdx] = firstThingtoAdd + secondThingtoAdd;
    }
  }
  return dpTable[maxNum][maxCoinIdx-1];

};

// console.log(makeChange(10,[1,5,12]));
console.log(makeChange(166,[5,37,8,39,33,17,22,32,13,7,10,35,40,2,43,49,46,19,41,1,12,11,28]));
