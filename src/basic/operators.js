// Arithmetic Operators
// addition
console.log(2 + 3); // 5
// subtraction
console.log(3 - 2); // 1
// multiplication
console.log(2 * 3); // 6
// division
console.log(6 / 2); // 3
// remainder or modulus
console.log(5 % 2); // 1
// exponent or power
console.log(2 ** 3); // 2^3  = 2*2*2 = 8

// Logical Operators

/*
|| -> return first value if it is true value else second value
&& -> return first value if it is false value else second value
?? -> return first value if it is not null or undefined else second value
*/
// an example implementation of each
const or = (a, b) => (a ? a : b); // ||
const and = (a, b) => (!a ? a : b); // &&
const nullCoalescing = (a, b) => (a !== null && a !== undefined ? a : b); // ??

or(0, 10);
console.log(0 || 10);
// 10
or(2, 10);
console.log(2 || 10);
// 2
and(0, 10);
console.log(0 && 10);
// 0
and(2, 10);
console.log(2 && 10);
// 10
nullCoalescing(0 ?? 10);
console.log(0 ?? 10);
// 0
nullCoalescing(2 ?? 10);
console.log(2 ?? 10);
// 2
nullCoalescing(null ?? 10);
console.log(null ?? 10);
// 10
or(10 % 3 === 0, 10 % 5 === 0);
console.log(10 % 3 === 0 || 10 % 5 === 0);
// true
and(10 % 3 === 0, 10 % 5 === 0);
console.log(10 % 3 === 0 && 10 % 5 === 0);
// false
nullCoalescing(10 % 3 === 0, 10 % 5 === 0);
console.log(10 % 3 === 0 ?? 10 % 5 === 0);
// false

// Assignment Operators = += -= *= /= %= **= ||= &&= ??=

let a = 20;
console.log(a); // 20
a += 20; // a = a + 20;
console.log(a); // 40
a -= 20; // a = a - 20;
console.log(a); // 20
a *= 20; // a = a * 20;
console.log(a); // 400
a /= 20; // a = a / 20;
console.log(a); // 20
a %= 3; // a = a % 3;
console.log(a); // 2
a **= 3; // a = a ** 3;
console.log(a); // 8
a ||= 3; // a = a || 3;
console.log(a); // 8
a &&= 3; // a = a && 3;
console.log(a); // 3
a ??= 5; // a = a ?? 5;
console.log(a); // 3

// Unary Operators
// prefix ++
// this operator first increment it's value then return
let i = 1;
let j = ++i; // i += 1; j = i;
console.log(j, i); // 2 2
// postfix ++
// this operator first return current value then increment it's value
i = 1;
j = i++; // j = i; i += 1;
console.log(j, i); // 1 2
// prefix --
// this operator first decrement it's value then return
i = 1;
j = --i; // i -= 1; j = i;
console.log(j, i); // 0 0
// postfix --
// this operator first return current value then decrement it's value
i = 1;
j = i--; // j = i; i -= 1;
console.log(j, i); // 1 0
// !
i = 1;
j = !i; // give opposite boolean value
// there are only six false value in javascript
// false, null, undefined, 0, "", NaN
// else all value are true value some of them are
// -1, 2, "a", " ", [], {}
// blank array and objects are also true value
// and string with spaces only is also true value
console.log(j, i); // false 1
console.log(!false);
console.log(!0);
console.log(!"");
console.log(!null);
console.log(!undefined);
console.log(!NaN);
console.log(![]);
console.log(!{});
console.log(!" ");

// Relational Operators : == === != !== > < >= <=
console.log(10 == 10); // true // match for equality
console.log(10 == "10"); // true // because values are equal
console.log(10 === "10"); // false // match for equal value and datatype
console.log(10 != "10"); // false // match for not equal value
console.log(10 !== "10"); // true // match for not equal value and datatype
console.log(10 > 10); // false // greater than
console.log(10 >= 10); // true // greater than or equal
console.log(10 < 10); // false // smaller than
console.log(10 <= 10); // true // smaller than or equal
