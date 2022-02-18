// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedArr = [], i, j, curMtrxElm;
  let mtrxElmSz = 0;
  // check input params
  if((matrix === undefined) || (matrix.length === 0)) return sortedArr;
  const mtrxSz = matrix.length;

  for (i = 0; i < mtrxSz; i++) {
    mtrxElmSz = matrix[i].length;
    for (j = 0; j < mtrxElmSz; j++) {
        curMtrxElm = matrix[i][i % 2 ? mtrxElmSz - j - 1 : j];
        sortedArr.push(curMtrxElm);
    }
  }

  return sortedArr;
}
