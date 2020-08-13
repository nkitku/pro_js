// call given function with each value and a accumulator to reduce the array to one value
function reduce(f, s, a) {
  let acc = s;
  for (const i in a) {
    acc = f(acc, a[i], i, a);
  }
  return acc;
}

console.log(reduce((a, b) => a + b, 0, [1, 2, 3]));
