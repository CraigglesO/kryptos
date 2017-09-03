const { encrypt, decrypt } = require('./vigenere');

k = "test"
m = "thisisamessagetotest"

let enc = encrypt(m, k);
console.log("encrypted message", enc);
let dec = decrypt(enc, k);
console.log("decrypted", dec);
