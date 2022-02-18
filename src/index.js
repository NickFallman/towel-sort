// You should implement your task here.

// module.exports = function towelSort (matrix) {
//   return [];
// }

// const inMtrx = [
//   [12, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 1],
// ];

// result = [ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12,];

// const inMtrx = [
//   1,
//   2,
//   4,
//   3
// ]

module.exports = function towelSort (matrix) {
  let sortedArr = [], i, j, curMtrxElm;
  let mtrxElmSz = 0;
  // console.log(matrix);
  // check input params
  if((matrix === undefined) || (matrix.length === 0)) return sortedArr;
  const mtrxSz = matrix.length;

  for (i = 0; i < mtrxSz; i++) {
    mtrxElmSz = matrix[i].length;
    for (j = 0; j < mtrxElmSz; j++) {
        curMtrxElm = matrix[i][i % 2 ? mtrxElmSz - j - 1 : j];
        // console.log(curMtrxElm);
        sortedArr.push(curMtrxElm);
    }
  }

  return sortedArr;
}

// const res = towelSort(inMtrx);
// const res = towelSort();
// console.log(res);
