function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposedMatrix = new Array(cols);

  for (let col = 0; col < cols; col++) {
    transposedMatrix[col] = new Array(rows);
    for (let row = 0; row < rows; row++) {
      transposedMatrix[col][row] = matrix[row][col];
    }
  }

  return transposedMatrix;
}

console.log(
  transpose([
    [1, 2],
    [3, 4],
  ])
); // returns [ [1, 3], [2, 4] ]
console.log(
  transpose([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
); // returns [ [1, 5], [2, 6], [3, 7], [4, 8

console.log(
  transpose([
    [6, 7, 8, 9],
    [10, 11, 12, 13],
  ])
);
