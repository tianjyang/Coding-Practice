const returnOpenCells = (grid, point) => {
  let numRows = grid.length;
  let numCols = grid[0].length;
  let row = point[0];
  let col = point[1];
  let output = [];

  if ((grid[row+1] && grid[row+1][col] !== "X") && (row+1 < numRows)) {
    output.push([row+1,col]);
  }

  if ((grid[row][col+1] !== "X") && (col+1 < numCols)) {
    output.push([row,col+1]);
  }
  if ((grid[row-1] && grid[row-1][col] !== "X") && (row-1 >= 0)) {
    output.push([row-1,col]);
  }
  if ((grid[row][col-1] !== "X") && (col-1 >= 0)) {
    output.push([row,col-1]);
  }
  return output;
};


const countLuck = (grid,numRows,numCols) => {
  let startPoint = findStartPoint(grid,"M");
  let queue = [];
  let visitedPoints = [];
  for (let i = 0; i < numRows; i++) {
    visitedPoints.push(new Array(numCols));
  }
  let currentCase, currentCoord, currentCount;
  let currentOpenPaths;
  for (let i = 0; i < numRows; i++) {
    visitedPoints.push(new Array(numCols));
  }
  queue.push({coord: startPoint, count: 0});
  visitedPoints[startPoint[0]][startPoint[1]] = true;
  while (queue.length !== 0) {
    currentCase = queue.shift();
    currentCoord = currentCase.coord;
    currentCount = currentCase.count;
    currentOpenPaths = returnOpenCells(grid,currentCoord);
    if (grid[currentCoord[0]][currentCoord[1]] === "*") {
      return currentCount;
    }

    if ( currentOpenPaths.length <= 2 ) {
      currentOpenPaths.forEach((el)=>{
        if (!visitedPoints[el[0]][el[1]]) {
          visitedPoints[el[0]][el[1]] = true;
          queue.push({coord:el,count:currentCount});
        }
      });
    } else if ( currentOpenPaths.length > 2) {
      currentOpenPaths.forEach((el)=>{
        console.log(currentCoord);
        console.log("current paths are");
        console.log(currentOpenPaths);
        console.log("node found!");
        if (!visitedPoints[el[0]][el[1]]) {
          visitedPoints[el[0]][el[1]] = true;
          queue.push({coord:el,count:currentCount+1});
        }
      });
    }
  }
};

const findStartPoint = (grid,target) => {
  let numRows = grid.length;
  let numCols = grid[0].length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === target) {
        return [i,j];
      }
    }
  }
};



// console.log("find starting point can find a starting point");
let grid = [[".",".",".","."],[".",".",".","X"]];
// console.log("expect this to return [1,3]");
// console.log(findStartPoint(grid,"X"));
//
// grid =[[".","."],[".","."]];
// console.log("returnOpenCells will return all the cells with open spaces");
// console.log("expect this to return [1,0],[0,1]");
// console.log(returnOpenCells(grid,[0,0]));
// console.log("expect this to return [0,0],[1,1]");
// console.log(returnOpenCells(grid,[1,0]));
// console.log("expect this to return [0,0],[1,1]");
// console.log(returnOpenCells(grid,[0,1]));
// console.log("expect this to return [1,0],[0,1]");
// console.log(returnOpenCells(grid,[1,1]));

grid = [];

let stringArray = "*.M\n.X.";
stringArray = stringArray.split("\n");
stringArray.forEach((el)=>{
  grid.push(el.split(""));
});
let numRows = grid.length;
let numCols = grid[0].length;

console.log(countLuck(grid,numRows,numCols));
