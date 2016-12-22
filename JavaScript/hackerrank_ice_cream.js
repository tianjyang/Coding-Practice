// Parsing hacker rank input


const iceCreamParlor = (input) => {

  const findSumPairs = (array,sum) => {
    let arrayMap = {};
    let output;
    let check;

    check = array.some((el,idx)=> {
      if (!arrayMap[el]) {
        arrayMap[sum-el] = idx + 1;
        return false;
      } else {
        output = [arrayMap[el],idx+1];
        return true;
      }
    });
    return output;
  };

  let sum;
  let numFlavors;
  let flavors;
  let inputArray = input.split("\n");
  let numCases = parseInt(inputArray.shift());
  for (var i = 0; i < numCases; i++) {
    sum = parseInt(inputArray.shift());
    numFlavors = parseInt(inputArray.shift());
    flavors = inputArray.shift();
    flavors = flavors.split(" ");
    flavors = flavors.join(",");
    flavors = '[' + flavors + ']';
    flavors = JSON.parse(flavors);
    console.log(findSumPairs(flavors,sum).join(" "));
  }

};


// Determine if two numbers in an array can add up to a specified value



console.log("expect findsumpairs of [1,4,5,2,1,4],6 to find [1,3]");
console.log(findSumPairs([1,4,5,2,1,4],6));
