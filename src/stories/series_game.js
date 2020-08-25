/*
suppose there is two teams A and B
they played a series of 5 matches
and scores of each match is given as follows
let A = [92, 48, 75, 102, 185];
let B = [85, 52, 81, 88, 189];

so, your task is to find winner of each match
for ex
match 1: team A wins
match 2: team B wins
....
and then you have to find out total match wins by each team
for ex
team A: wins 2 matches
team B: wins 3 matches

and finally you have to find out winner of series
for ex
team B wins this series
*/

const main = (A, B) => {
  const totalMatches = A.length;
  let AWins = 0;
  let BWins = 0;
  for (let i = 0; i < totalMatches; i++) {
    if (A[i] > B[i]) {
      AWins += 1;
      console.log(`Match ${i + 1}: team A wins`);
    } else if (A[i] < B[i]) {
      BWins += 1;
      console.log(`Match ${i + 1}: team B wins`);
    } else {
      console.log(`Match ${i + 1}: draw`);
    }
  }
  console.log(`Team A: wins ${AWins} matches`);
  console.log(`Team B: wins ${BWins} matches`);
  if (AWins > BWins) {
    console.log(`Team A wins the series`);
  } else if (AWins < BWins) {
    console.log(`Team B wins the series`);
  } else {
    console.log(`Series is draw`);
  }
};

let A = [92, 48, 75, 102, 185];
let B = [85, 52, 81, 88, 189];

main(A, B);
