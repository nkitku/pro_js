/* 
suppose you are playing a simple game
An Old Computer Game
in which there are buildings in a row
and you have a player to jump through all this building
you have to just guide him up or down
because buildings height are not equal
some are tall and some are small
and no consecutive buildings are of same height 
so, suppose this is height of buildings 
let heights = [10, 20, 15, 58, 45, 89, 23];
you have to loop through it and print up and down
for example here 
    up (because 20 is grater than 10)
    down (because 15 is smaller than 20)
    and so on ... 
*/

const main = (buildingsHeights) => {
  for (let i = 0; i < buildingsHeights.length - 1; i++) {
    if (buildingsHeights[i] < buildingsHeights[i + 1]) {
      console.log("UP");
    } else {
      console.log("DOWN");
    }
  }
};

let heights = [10, 20, 58, 12, 45, 89, 23];
main(heights);
