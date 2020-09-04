// based on binary search algorithm
// it takes an array of ascending order numbers and a number to find between them
// it will return index of that number or null if no such number is found

const binarySearch = (a, x) => {
  let start = 0;
  let end = a.length - 1;
  if (a[start] === x) {
    return start;
  }
  if (a[end] === x) {
    return end;
  }
  if (a[start] > x || a[end] < x) {
    return null;
  }

  while (end - start > 1) {
    const middle = Math.floor((start + end) / 2);
    if (a[middle] === x) {
      return middle;
    } else if (a[middle] < x) {
      start = middle;
    } else {
      end = middle;
    }
  }
  return null;
};

binarySearch(
  [...Array(1024)].map((v, i) => i * 3),
  765
);
