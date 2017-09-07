const { encrypt, decrypt } = require('./vigenere');

k = "ELYOIEC"
// m = 'NYPVTTMZFPK'
// k = 'EMUFPHZL';
m = "OBKRUOXOGHULBSOLIFBBWFLRVQQPRNGKSSOTWTQSJQSSEKZZWATJKLUDIAWINFBNYPVTTMZFPKWGDKZXTJCDIGKUHUAUEKCAR";

let dec = decrypt(m, k);
console.log("decrypted", dec);
