const { encrypt, decrypt } = require('./vigenere');

// const k = "TEST"
// const m = "HELLOFRIEND"
//
// let enc = encrypt(m, k);
// console.log("decrypted", enc);

let m = "";
let c = "EMUFPHZLRFAXYUSDJKZLDKRNSHGNFIVJYQTQUXQBQVYUVLLTREVJYQTMKYRDMFD";
let k = ['A'];
let i = 0;
let carry = false;

while (k.length < 10) {
  incrememntArray(k, 0);

  m = decrypt(c, k.join(''));

  if (m[0] === "B" && m[1] === "E" && m[2] === "T" && m[3] === "W" && m[4] == "E") {
    console.log("KEY", k.join(''));
    break;
  }
}

function incrememntArray(arr, i) {
  if (i == arr.length)
    arr[i] = "A"
  else if (arr[i] === "Z") {
    arr[i] = "A";
    incrememntArray(arr, i+1);
  } else {
    arr[i] = nextChar(arr[i]);
  }
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
