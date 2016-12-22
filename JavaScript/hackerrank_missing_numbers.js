let missingNumbers = (input) => {
  let inputArray = input.split("\n");
  let bArray = inputArray.pop();
  bArray=bArray.split(" ");
  bArray=bArray.join(",");
  bArray = JSON.parse('['+ bArray + ']');
  inputArray.pop();
  let aArray = inputArray.pop();
  aArray=aArray.split(" ");
  aArray=aArray.join(",");
  aArray = JSON.parse('['+ aArray + ']');
  let numMap = {};
  bArray.forEach((el,idx)=>{
    if (numMap[el]) {
      numMap[el] += 1;
    } else {
      numMap[el] = 1;
    }
  });

  aArray.forEach((el)=>{
    numMap[el] -= 1;
    if (numMap[el] === 0) {
      delete numMap[el];
    }
  });

  console.log(Object.keys(numMap).join(" "));
};
