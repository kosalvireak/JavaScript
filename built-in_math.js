// Documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math //
// random number between 1 and 0
let me = Math.random();
console.log(me)                 //0.05565306146211291

// if we want bigger number, we just simply multiply by any number
let men = Math.random() * 5463728;
console.log(men)                //4094930.834710306

// rounds the number to a higher value
console.log(Math.ceil(43.9));   //44
// rounds the number to a smaller value
console.log(Math.floor(43.9));  //43

// math pow
console.log(Math.pow(2, 4));    //16

// return absolute value 
console.log(Math.abs(-5.46543));
Math.abs('-1');                 // 1
Math.abs(-2);                   // 2
Math.abs(null);                 // 0
Math.abs('');                   // 0
Math.abs([]);                   // 0
Math.abs([2]);                  // 2
Math.abs([1, 2]);               // NaN
Math.abs({});                   // NaN
Math.abs('string');             // NaN
Math.abs();                     // NaN

//return the cube root
console.log(Math.cbrt(6));      //1.817120
console.log(Math.cbrt(8));      //2

// return the code
console.log(Math.cos(50));      //0.9649660284921133


