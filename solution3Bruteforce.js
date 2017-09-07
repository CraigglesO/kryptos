let ciphertext = 'ENDYAHROHNLSRHEOCPTEOIBIDYSHNAIACHTNREYULDSLLSLLNOHSNOSMRWXMNETPRNGATIHNRARPESLNNELEBLPIIACAEWMTWNDITEENRAHCTENEUDRETNHAEOETFOLSEDTIWENHAEIOYTEYQHEENCTAYCREIFTBRSPAMHHEWENATAMATEGYEERLBTEEFOASFIOTUETUAEOTOARMAEERTNRTIBSEDDNIAAHTTMSTEWPIEROAGRIEWFEBAECTDDHILCEIHSITEGOEAOSDDRYDLORITRKLMLEHAGTDHARDPNEOHMGFMFEUHEECDMRIPFEIMEHNLSSTTRTVDOHW';
ciphertext = ciphertext.split(''); // 1 x 336

const CIPHER_SIZE = ciphertext.length;
console.log("CIPHER LENGTH", CIPHER_SIZE);

const sizes = matrixSizes(CIPHER_SIZE);

sizes.forEach(size => {
  let matrix = resize(ciphertext, size, CIPHER_SIZE / size);
  matrix = rotateCounterClockwise(matrix);
  sizes.forEach(size2 => {
    let matrix2 = resize(matrix, size2, CIPHER_SIZE / size2);
    matrix2 = rotateCounterClockwise(matrix2);
    let str = flattenMatrix(matrix2);
    if (str.includes('SLOWLYDESPARATLYSLOWLY')) {
      console.log(`${size} x ${CIPHER_SIZE / size}`);
      console.log(`rotate counter clockwise by 90deg`);
      console.log(`${size2} x ${CIPHER_SIZE / size2}`);
      console.log("rotate counter clockwise by 90deg");
      console.log("");
      console.log("");
      console.log("");
    }
  });
});

function matrixSizes(num) {
  let arr = [];
  for (let i = 2; i < num; i++) {
    if (num % i == 0)
      arr.push(i);
  }
  return arr;
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

function flattenMatrix(matrix) {
  let flattenedMatrix = "";
  for (let i = 0; i < matrix.length; i++) {
    flattenedMatrix += matrix[i].join('');
  }
  return flattenedMatrix;
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

// SUCCESSFUL SOLUTIONS

// 4 x 84
// rotate counter clockwise by 90deg
// 48 x 7
// rotate counter clockwise by 90deg
//
//
//
// 8 x 42
// rotate counter clockwise by 90deg
// 24 x 14
// rotate counter clockwise by 90deg
//
//
//
// 12 x 28
// rotate counter clockwise by 90deg
// 16 x 21
// rotate counter clockwise by 90deg
//
//
//
// 16 x 21
// rotate counter clockwise by 90deg
// 12 x 28
// rotate counter clockwise by 90deg
//
//
//
// 24 x 14
// rotate counter clockwise by 90deg
// 8 x 42
// rotate counter clockwise by 90deg
//
//
//
// 48 x 7
// rotate counter clockwise by 90deg
// 4 x 84
// rotate counter clockwise by 90deg
