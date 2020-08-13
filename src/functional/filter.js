// return all elements which follow the condition else a blank array
function filter(f, a) {
  const result = [];
  for (const i in a) {
    if (f(a[i], i, a)) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(filter((v) => v % 2, [1, 2, 3]));
