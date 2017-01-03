const encryption = (string) => {
  let numChars, numRows, numCols;
  let encrypt = [];
  let temp;
  let output = "";
  numChars = string.length;
  numRows = Math.floor(Math.sqrt(numChars));
  numCols = Math.ceil(Math.sqrt(numChars));
  if (numRows * numCols < numChars) {
    numRows = numCols;
  }

  for (let i = 0; i < numRows; i++) {
    encrypt[i] = "";
  }

  for (let i = 0; i < numChars; i++) {
    temp = encrypt[Math.floor(i/numCols)];
    encrypt[Math.floor(i/numCols)] = temp.concat(string[i]);
  }

  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      if (encrypt[j][i]) {
        output = output.concat(encrypt[j][i]);
      }
    }

    if (i !== numCols - 1) {
      output = output.concat(" ");
    }
  }

  console.log(output);

};

// encryption("ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots")
encryption("chillout");
