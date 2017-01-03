const matrixEqual = (matrixMain,i,j,matrixSub) => {
  let output = true;
  for (let currentRow = 0; currentRow < matrixSub.length; currentRow++) {
    for (let currentCol = 0; currentCol < matrixSub[0].length; currentCol++) {
      output = output && (matrixSub[currentRow][currentCol] === matrixMain[currentRow+i][currentCol+j])
    }
  }
  return output;
};

const gridSearch = (
  matrixMain,
  numRowsMain,
  numColsMain,
  matrixSub,
  numRowsSub,
  numColssub) => {
    for (let i = 0; i < numRowsMain; i++) {
      for (let j = 0; j < numColsMain; j++) {
        if (matrixMain[i][j] === matrixSub[0][0]) {
          if (matrixEqual(matrixMain,i,j,matrixSub)) {
            console.log("YES");
            return;
          }
        }
      }
    }
    console.log("NO");
  };
