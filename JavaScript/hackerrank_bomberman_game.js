const bomberMan = (R,C,N,grid) => {
  let currentTime = (N-1)%4;
  let fullGrid = [];
  let subfullGrid = "O".repeat(C);

  for (let i = 0; i < R; i++) {
    fullGrid.push(subfullGrid);
  }

  if (N === 0) {
    return grid;
  } else {
    if (currentTime === 0) {
      return grid;
    } else if (currentTime === 2) {
      for (let currentRow = 0; currentRow < R; currentRow++) {
        for (let currentCol = 0; currentCol < C; currentCol++ ) {
          if (grid[currentRow][currentCol] === "O") {
            fullGrid[currentRow][currentCol] = ".";
            if (currentRow - 1 >= 0 ) {
              fullGrid[currentRow-1][currentCol] = ".";
            }
            if (currentRow + 1 < R ) {
              fullGrid[currentRow + 1][currentCol] = ".";
            }

            if (currentCol - 1 >= 0 ) {
              fullGrid[currentRow][currentCol-1] = ".";
            }
            if (currentCol + 1 < C ) {
              fullGrid[currentRow][currentCol + 1] = ".";
            }
          }
        }
      }
      return fullGrid;
    } else {
      return fullGrid;
    }
  }
};
