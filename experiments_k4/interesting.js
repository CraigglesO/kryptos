function matrixSizes(num) {
  let arr = [];
  for (let i = 2; i < num; i++) {
    if (num % i == 0)
      arr.push(i);
  }
  return arr;
}

let x = matrixSizes(96);
console.log(x);

// [ 2, 3, 4, 6, 8, 12, 16, 24, 32, 48 ]
