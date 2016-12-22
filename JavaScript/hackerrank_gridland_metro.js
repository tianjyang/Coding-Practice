let gridLandMetro = (input) => {
  let inputArray = input.split("\n");
  let gridSettings = inputArray.shift();
  gridSettings = gridSettings.split(" ");
  let numRows = gridSettings.shift();
  numRows = parseInt(numRows);
  let numCols = gridSettings.shift();
  numCols = parseInt(numCols);
  let numTracks = gridSettings.shift();
  numTracks = parseInt(numTracks);
  let countMap = {};

  for (let i = 1; i <= numTracks; i++) {
    let trackInputArray = inputArray.shift().split(" ");
    let currRow = parseInt(trackInputArray.shift());
    let startCol = parseInt(trackInputArray.shift());
    let endCol = parseInt(trackInputArray.shift());
    let smaller;
    let larger;
    let currentSet;
    if (!countMap[currRow]) {
      countMap[currRow] = new Set;
      currentSet = countMap[currRow];
    } else {
      currentSet = countMap[currRow];
    }

    if (startCol<endCol) {
      smaller = startCol;
      larger = endCol;
    } else {
      smaller = endCol;
      larger = startCol;
    }
    for (let i = smaller; i <= larger; i++) {
      currentSet.add(i);
    }
  }

  let sum = 0;
  Object.keys(countMap).forEach((el)=>{
    sum += countMap[el].size;
  });

  console.log(numRows*numCols - sum);
};
