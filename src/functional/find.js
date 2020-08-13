// return first elements which follow the condition else null
function find(f, a) {
  for (const i in a) {
    if (f(a[i], i, a)) {
      return a[i];
    }
  }
  return null;
}

console.log(find((v) => v % 2 === 0, [1, 2, 3]));
