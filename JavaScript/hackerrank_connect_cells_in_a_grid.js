const adjacentCells = [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]];

const findRegionSize = (coord, grid, count) => {
  if (!Boolean(count)) {
    count = 0;
  }
  let xCoord = coord[0];
  let yCoord = coord[1];
  if (xCoord > grid.length || xCoord < 0) {
    return count;
  }

  if (yCoord > grid[0].length || xCoord < 0) {
    return count;
  }
  if (grid[coord[0]][coord[1]]) {
    count += 1;
    grid[coord[0]][coord[1]] = 0;
    adjacentCells.forEach((el)=>{
      let nextCoord = [coord[0]+el[0],coord[1]+el[1]];
      count = findRegionSize(nextCoord,grid,count);
    });
  }
  return count;

};

// let region = [[1,0,0],[1,1,0],[0,0,0]];
// console.log("expect this test case to return 3");
// console.log(findRegionSize([0,0],region));
//
// region = [[0,0,0],[1,1,0],[0,0,0]];
// console.log("expect this test case to return 0");
// console.log(findRegionSize([0,0],region));
//
// region = [[0,0,0],[1,1,0],[0,0,0]];
// console.log("expect this test case to return 2");
// console.log(findRegionSize([1,0],region));
//
// region = [[0,0,0],[1,1,0],[0,0,0]];
// console.log("expect this test case to return 2");
// console.log(findRegionSize([1,1],region));
