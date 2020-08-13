// return true if any pass given condition else false
function some(f, a) {
  for (const i in a) {
    if (f(a[i], i, a)) {
      return true;
    }
  }
  return false;
}

console.log(some((v) => v % 2, [1, 2, 3]));
