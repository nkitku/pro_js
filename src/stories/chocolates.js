/*
suppose there is a chocolate seller
who sell one chocolate for one penny
but to increase his selling he makes an offer
he say that if you give me three wrapper of this chocolate
in return I will give you one more chocolate
but he want to calculate is this offer will be profitable for him
so your mission is to help him by writing a program
which can find out how many maximum chocolates
a customer can buy in x amount of money
*/

const calc = (penny) => {
  let totalChocolates = penny;
  let totalWrappers = totalChocolates;
  while (totalWrappers >= 3) {
    const newChocolates = Math.floor(totalWrappers / 3);
    const remainingWrappers = totalWrappers % 3;
    totalChocolates += newChocolates;
    totalWrappers = newChocolates + remainingWrappers;
  }
  return [totalChocolates, totalWrappers];
};

console.log(calc(10));
// [14, 2]

// a formula after observing the outputs of calc (previous function)
const calc2 = (x) => [Math.floor((x - 1) * 1.5 + 1), x % 2 || 2];

console.log(calc2(10));
// [14, 2]

// console.time and console.timeEnd is use to calculate time
// taken by compiler to reach from time to timeEnd
// 1e7 = 1 * 10^7 = 10000000
// 1e5 = 1 * 10^5 = 100000
console.time("calc");
for (let i = 0; i < 1e7; i++) {
  calc(1e5);
}
console.timeEnd("calc");

console.time("calc2");
for (let i = 0; i < 1e7; i++) {
  calc2(1e5);
}
console.timeEnd("calc2");
