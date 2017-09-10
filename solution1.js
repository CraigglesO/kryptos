const { encrypt, decrypt } = require('./vigenere');

k = "PALIMPSEST"
m = "EMUFPHZLRFAXYUSDJKZLDKRNSHGNFIVJYQTQUXQBQVYUVLLTREVJYQTMKYRDMFD"

let dec = decrypt(m, k);
console.log("decrypted", dec);


// BETWEEN SUBTLE SHADING AND THE ABSENCE OF LIGHT LIES THE NUANCE OF IQLUSION
