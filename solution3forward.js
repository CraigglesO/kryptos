// slowlydesparatlyslowlytheremainsofpassaged
// ebristhatencumberedthelowerpartofthedoorwa
// ywasremovedwithtremblinghandsimadeatinybre
// achintheupperlefthandcornerandthenwidening
// theholealittleiinsertedthecandleandpeeredi
// nthehotairescapingfromthechambercausedthef
// lametoflickerbutpresentlydetailsoftheroomw
// ithinemergedfromthemistxcanyouseeanythingq
// 42 x 8

// let ciphertext = 'slowlydesparatlyslowlytheremainsofpassagedebristhatencumberedthelowerpartofthedoorwaywasremovedwithtremblinghandsimadeatinybreachintheupperlefthandcornerandthenwideningtheholealittleiinsertedthecandleandpeeredinthehotairescapingfromthechambercausedtheflametoflickerbutpresentlydetailsoftheroomwithinemergedfromthemistxcanyouseeanythingq';
let ciphertext = 'SLOWLYDESPARATLYSLOWLYTHEREMAINSOFPASSAGEDEBRISTHATENCUMBEREDTHELOWERPARTOFTHEDOORWAYWASREMOVEDWITHTREMBLINGHANDSIMADEATINYBREACHINTHEUPPERLEFTHANDCORNERANDTHENWIDENINGTHEHOLEALITTLEIINSERTEDTHECANDLEANDPEEREDINTHEHOTAIRESCAPINGFROMTHECHAMBERCAUSEDTHEFLAMETOFLICKERBUTPRESENTLYDETAILSOFTHEROOMWITHINEMERGEDFROMTHEMISTXCANYOUSEEANYTHINGQ';

ciphertext = ciphertext.split('');
let matrix = [];


// first we make a 42 x 8:
for (let i = 0; i < 8; i++) {
  matrix.push([]);
  for (let j = 0; j < 42; j++) {
    matrix[i].push(ciphertext.shift());
  }
}

// rotate 90deg clockwise
matrix = rotateClockWise(matrix);

// resize to 14 x 24
matrix = resize(matrix, 14, 24);

// rotate clockwise one more time
matrix = rotateClockWise(matrix);

// lastly reformat to a 31 x 14 (uneccessary)
matrix = resize(matrix, 31, 14);


// FINAL PRODUCT:
for (let i = 0; i < 14; i++) {
  console.log(matrix[i].join(''));
}

// ENDYAHROHNLSRHEOCPTEOIBIDYSHNAI
// ACHTNREYULDSLLSLLNOHSNOSMRWXMNE
// TPRNGATIHNRARPESLNNELEBLPIIACAE
// WMTWNDITEENRAHCTENEUDRETNHAEOET
// FOLSEDTIWENHAEIOYTEYQHEENCTAYCR
// EIFTBRSPAMHHEWENATAMATEGYEERLBT
// EEFOASFIOTUETUAEOTOARMAEERTNRTI
// BSEDDNIAAHTTMSTEWPIEROAGRIEWFEB
// AECTDDHILCEIHSITEGOEAOSDDRYDLOR
// ITRKLMLEHAGTDHARDPNEOHMGFMFEUHE
// ECDMRIPFEIMEHNLSSTTRTVDOHW?????
// ???????????????????????????????
// ???????????????????????????????
// ???????????????????????????????
// ENDYAHROHNLSRHEOCPTEOIBIDYSHNAIA
// CHTNREYULDSLLSLLNOHSNOSMRWXMNE
// TPRNGATIHNRARPESLNNELEBLPIIACAE
// WMTWNDITEENRAHCTENEUDRETNHAEOE
// TFOLSEDTIWENHAEIOYTEYQHEENCTAYCR
// EIFTBRSPAMHHEWENATAMATEGYEERLB
// TEEFOASFIOTUETUAEOTOARMAEERTNRTI
// BSEDDNIAAHTTMSTEWPIEROAGRIEWFEB
// AECTDDHILCEIHSITEGOEAOSDDRYDLORIT
// RKLMLEHAGTDHARDPNEOHMGFMFEUHE
// ECDMRIPFEIMEHNLSSTTRTVDOHW?OBKR
// UOXOGHULBSOLIFBBWFLRVQQPRNGKSSO
// TWTQSJQSSEKZZWATJKLUDIAWINFBNYP
// VTTMZFPKWGDKZXTJCDIGKUHUAUEKCAR



function rotateClockWise(matrix) {
  let newMatrix    = [];
  let rowLength    = matrix[0].length;
  let columnLength = matrix.length;

  for (let i = 0; i < rowLength; i++) {
    newMatrix.push([]);
    for (let j = columnLength - 1; j >= 0; j--) {
      newMatrix[i].push(matrix[j][i]);
    }
  }
  return newMatrix;
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
      if (flattenedMatrix.length)
        newMatrix[i].push(flattenedMatrix.shift());
      else
        newMatrix[i].push("?");
    }
  }
  return newMatrix;
}
