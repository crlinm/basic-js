const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  const result = new Array(n).fill().map(() => Array(m).fill(0));

  const di = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dj = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      if (matrix[i][j] == true) {
        for (let k = 0; k < 8; k++) {
          if (i + di[k] >= 0 && i + di[k] < n && j + dj[k] >= 0 && j + dj[k] < m) {
            result[i + di[k]][j + dj[k]] += 1;
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
