// return true if all pass given condition else false
function every(f, a) {
  for (const i in a) {
    if (!f(a[i], i, a)) {
      return false;
    }
  }
  return true;
}

console.log(every((v) => v % 2, [1, 2, 3]));
