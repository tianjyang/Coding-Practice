let string1,string2;

let isUnique = (string) => {
  let output = {};
  for (let i = 0; i < string.length; i++) {
    if (output[string[i]]) {
      output[string[i]] += 1;
    } else {
      output[string[i]] = 1;
    }
  }
  return Object.keys(output).length === string.length;
};



let isPermutation = (string1,string2) => {
  if (string1.count !== string2.count) {
    return false;
  }

  let count1 = {};
  let count2 = {};
  let output = true;
  for (var i = 0; i < string1.length; i++) {
    if (count1[string1[i]]) {
      count1[string1[i]] += 1;
    } else {
      count1[string1[i]] = 1;
    }

    if (count2[string2[i]]) {
      count2[string2[i]] += 1;
    } else {
      count2[string2[i]] = 1;
    }
  }

  Object.keys(count1).forEach((el)=>{
    if (count1[el] !== count2[el]) {
      output = false;
    }
  });

  Object.keys(count2).forEach((el)=>{
    if (count1[el] !== count2[el]) {
      output = false;
    }
  });

  return output;
};


// string1 = "abcdefghij";
// string2 = "jihgfedcba";
// console.log("this case should be true");
// console.log(isPermutation(string1,string2));
// console.log("the reverse test case should be true too");
// console.log(isPermutation(string2,string1));
//
// string1 = "aaabccd";
// string2 = "abacadc";
// console.log("this case should be true");
// console.log(isPermutation(string1,string2));
//
// string1 = "aaabxcd";
// string2 = "abaczdc";
// console.log("this case should be false");
// console.log(isPermutation(string1,string2));

let replaceSpace = (string,trueLength,replacementChar) => {
  let output = ""
  if (!trueLength) {
    trueLength = string.length;
  }

  if (!replacementChar) {
    replacementChar = "%20";
  }

  for (let i = 0; i < trueLength-1;i++){
    if (i === 0 && string[i] !== " ") {
      output+=(string[i]);
    } else if ( i === 0 && string[i] === " ") {
      output+=(replacementChar);
    } else {
      if (string[i-1] === " " && string[i] === " ") {
        continue;
      } else if (string[i-1] !== " " && string[i] === " ") {
        output+=(replacementChar);
      } else if (string[i] !== " ") {
        output+=(string[i]);
      }
    }
  }
  return output;
};
// string1 = "    a    b    c     d a f ";
// console.log("this should print %20a%20b%20c%20d%20a%20f");
// console.log(replaceSpace(string1)==="%20a%20b%20c%20d%20a%20f");

const removePairs= (string) => {
  string = string.split("");
  let count = 0;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i-1]) {
      string.splice(i-1,2);
      count += 1;
      i -= 2;
    }
  }
  return ([string.join(""),count]);
};

const superReduce = (string) =>{
  let count = 10;
  let temp;
  while ( count!==0 ) {
    temp = removePairs(string);
    string = temp[0];
    count = temp[1];
  }
  return(string);
};

console.log("remove pairs should remove pairs");
console.log("expect removePairs('abaacd') to be ['abcd',1]");
console.log(removePairs("abaacd"));

console.log("remove pairs should remove multiple pairs");
console.log("expect removePairs('abaacaadee') to be ['abcd',3]");
console.log(removePairs("abaacaadee"));

console.log("remove pairs should return an emtpy string for continuous pairs pairs");
console.log("expect removePairs('aaaa') to be ['',2]");
console.log(removePairs("aaaa"));

console.log("remove pairs should return an emtpy string for continuous pairs pairs");
console.log("expect removePairs('baab') to be ['',2]");
console.log(removePairs("baab"));

console.log("superReduce should perform as expected");
console.log("expect removePairs('cabaabac') to be ''");
console.log(superReduce("cabaabac"));

console.log("superReduce should not make any changes");
console.log("expect removePairs('abcdefghij') to be abcdefghij");
console.log(superReduce("abcdefghij"));
