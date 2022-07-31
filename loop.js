for (let loop = 5; loop<=10; loop++ ){
    console.log(loop);
  }
  /*Output:
  5
  6
  7
  8
  9
  10*/


//Loop in reverse
for (let count = 3 ; count >= 0; count -- ){
  console.log(count);
}
  /*3
  2
  1
  0*/
  

//loop through array
const me = ['G63','Harley','Scooter']
for (i in me){
  console.log(`${me[i]} is my favorite.`);
}
  /*G63 is my favorite.
  Harley is my favorite.
  Scooter is my favorite.*/


//Nested loop -> find mutual friend between 2 array
const bobsFollowers = ['a','b','d','e'];
const tinasFollowers = ['a','b','e'];
let mutual = [];
for (let i = 0; i <= bobsFollowers.length ;i++){
  for(let j = 0 ; j <= tinasFollowers.length;j++){
    if (bobsFollowers[i]===tinasFollowers[j]){
      mutual.push(bobsFollowers[i]);
    }
  }
}
console.log(mutual); // s[ 'a', 'b', 'e', undefined ] 


// While loop -> 
const cards = ['diamond', 'spade', 'heart', 'club'];
let me = '';
while(me!=='heart'){
  me = cards[Math.floor(Math.random()*4)];
  console.log(me);
}