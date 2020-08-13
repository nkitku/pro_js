// return a new array of same length by passing each elements into function
function map(f, a) {
  const result = [];
  for (const i in a) {
    result.push(f(a[i], i, a));
  }
  return result;
}

console.log(map((v) => v * 2, [1, 2, 3]));
