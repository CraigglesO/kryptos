const { encrypt, decrypt } = require('./vigenere');

k = "PALIMPSEST"
m = "EMUFPHZLRFAXYUSDJKZLDKRNSHGNFIVJYQTQUXQBQVYUVLLTREVJYQTMKYRDMFD"

let dec = decrypt(m, k);
console.log("decrypted", dec);
