// Given  integers, count the number of pairs of integers whose difference is k.
//
// The first line contains N and k.
// The second line contains N numbers of the set. All the numbers are unique.
const numPairs = (array,k) => {
  let diffMap = {};
  let count = 0;
  array.forEach((el)=>{
    if (diffMap[el]) {
      count += diffMap[el];
    }

    if (diffMap[el+2]) {
      diffMap[el+2] += 1;
    } else {
      diffMap[el+2] = 1;
    }

    if (diffMap[el-2]) {
      diffMap[el-2] += 1;
    } else {
      diffMap[el-2] = 1;
    }

  });

  return count;

};
