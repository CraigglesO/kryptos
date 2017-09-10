num_char = {
  0 : 'K', 1 : 'R', 2 : 'Y', 3 : 'P', 4 : 'T', 5 : 'O', 6 : 'S', 7 : 'A', 8 : 'B',
  9 : 'C', 10 : 'D', 11 : 'E', 12 : 'F', 13 : 'G', 14 : 'H', 15 : 'I', 16 : 'J',
  17 : 'L', 18 : 'M', 19 : 'N', 20 : 'Q', 21 : 'U', 22 : 'V', 23 : 'W', 24 : 'X',
  25 : 'Z'
};
char_num = {
  'K': 0, 'R': 1, 'Y': 2, 'P': 3, 'T': 4, 'O': 5, 'S': 6, 'A': 7, 'B': 8,
  'C': 9, 'D': 10, 'E': 11, 'F': 12, 'G': 13, 'H': 14, 'I': 15, 'J': 16,
  'L': 17, 'M': 18, 'N': 19, 'Q': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24,
  'Z': 25
};

function modulo(n, m) {
  return ((n % m) + m) % m;
}

module.exports.encrypt = function (m, k) {
  m = m.toUpperCase();
  k = k.toUpperCase();
  let c = '';

  for (let i = 0; i < m.length; i++) {
    num = modulo((char_num[k[i % k.length]] - char_num[m[i]]), 26);
    c += num_char[num];
  }

  return c;
}

module.exports.decrypt = function (m, k) {
  return module.exports.encrypt(m, k);
}
