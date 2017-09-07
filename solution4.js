const { encrypt, decrypt } = require('./vigenere');

// k = "ELYOIECBAQK"
// m = 'NYPVTTMZFPK'
k = "TAKECARE"
m = "OBKRUOXOGHULBSOLIFBBWFLRVQQPRNGKSSOTWTQSJQSSEKZZWATJKLUDIAWINFBNYPVTTMZFPKWGDKZXTJCDIGKUHUAUEKCAR"

let dec = decrypt(m, k);
console.log("decrypted", dec);
