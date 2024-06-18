const a = [
  [1, 2],
  [2, 4],
];
const b = [
  [1, 0],
  [0, 3],
];

const matrixMul = (a, b) => {
  let temp;
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const arr = [];
    for (let j = 0; j < a[i].length; j++) {
      for (let k = 0; k < b.length; k++) {
        //[1,2]   [1,0]
        temp = a[i][j] * b[k][j];

        if (temp != 0) {
          arr.push(temp);
          break;
        }
      }
      if (temp == 0) {
        arr.push(-1);
      }
    }
    result.push(arr);
  }

  return result;
};

const result = matrixMul(a, b);
console.log(result);
