let ciphertext = 'ENDYAHROHNLSRHEOCPTEOIBIDYSHNAIACHTNREYULDSLLSLLNOHSNOSMRWXMNETPRNGATIHNRARPESLNNELEBLPIIACAEWMTWNDITEENRAHCTENEUDRETNHAEOETFOLSEDTIWENHAEIOYTEYQHEENCTAYCREIFTBRSPAMHHEWENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITEGOEAOSDDRYDLORITRKLMLEHAGTDHARDPNEOHMGFMFEUHEECDMRIPFEIMEHNLSSTTRTVDOHW';
ciphertext = ciphertext.split(''); // 1 x 336

// STEP1 resize to a 24 x 14
let matrix = resize(ciphertext, 24, 14);

// STEP2 rotate counter-clockwise by 90deg
matrix = rotateCounterClockwise(matrix);

// STEP3 resis to a 8 x 42
matrix = resize(matrix, 8, 42);

// STEP4 rotate counter-clockwise again by 90deg
matrix = rotateCounterClockwise(matrix);

// Print out the result
for (let i = 0; i < 8; i++) {
  console.log(matrix[i].join(''));
}

function resize(matrix, rows, columns) {
  let flattenedMatrix = [];
  let newMatrix       = [];
  let rowLength       = matrix[0].length;
  let columnLength    = matrix.length;

  // step1, flatten the first matrix
  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      flattenedMatrix.push(matrix[i][j]);
    }
  }
  // step2 , create the new matrix we want:
  for (let i = 0; i < columns; i++) {
    newMatrix.push([]);
    for (let j = 0; j < rows; j++) {
      newMatrix[i].push(flattenedMatrix.shift());
    }
  }
  return newMatrix;
}

function rotateCounterClockwise(matrix) {
  let newMatrix    = [];
  let rowLength    = matrix[0].length;
  let columnLength = matrix.length;

  let ii = 0;
  for (let i = rowLength - 1; i >= 0; i--) {
    newMatrix.push([]);
    let jj = 0;
    for (let j = columnLength - 1; j >= 0; j--) {
      newMatrix[ii].push(matrix[jj][i]);
      jj++;
    }
    ii++;
  }
  return newMatrix;
}
