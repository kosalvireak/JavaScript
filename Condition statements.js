// ​‌‌‍If statement​

let you = 19;
let me = 19;
if (you = me) {
  console.log("WE are couple");
}


// ​‌‌‍If...Else Statements​

let sale = false;
sale = true;
if (sale) {
  console.log("Time to buy");
}
else {
  console.log("Not time to buy");
}
//​‌‌‍------Another way------​//

sale ? console.log("Time to eat") : console.log("Not time to eat");


//​‌‌‍Else If Statements​

let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}


//​‌‌‍Switch case​

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}