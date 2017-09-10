const { encrypt, decrypt } = require('./vigenere');

let k = "SSOTWTQSJQSSEKZZWATJKLUDIAWINFBN"
// let c = 'NYPVTTMZFPK'
// // k = 'EMUFPHZL';
let c = "OBKRUOXOGHULBSOLIFBBWFLRVQQPRNGKSSOTWTQSJQSSEKZZWATJKLUDIAWINFBNYPVTTMZFPKWGDKZXTJCDIGKUHUAUEKCAR";

let dec = decrypt(c, k);
console.log("decrypted", dec);
