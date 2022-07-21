// function getReminder() {
//     console.log("Water the plants.");
// }
// function greetInSpanish() {
//     console.log('Buenas Tarde.')
// }
// getReminder();
// greetInSpanish();
// //   Water the plants.
// //   Buenas Tarde.


// function sayThanks(name) {
//     console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
// }
// sayThanks('Cole');
// //Thank you for your purchase Cole! We appreciate your business.


// //‍​‌‌‍default parameters​

// //if we don't pass parameters the value 'stranger' will load
// function greeting(name = 'stranger') {
//     console.log(`Hello, ${name}!`)
// }

// greeting('Nick') // Output: Hello, Nick!
// greeting() // Output: Hello, stranger!


// //​‌‌​‌‌‍​‌‌‍‍function return

// ‍‍‍function monitorCount(rows, columns) {
//     monitor = rows * columns;
//     return monitor;
// }
// const numOfMonitors = monitorCount(5, 4);
// console.log(`Number of monitor: ${numOfMonitors}`);
// //Number of monitor: 20


// //​‌‌‍Helper function

// function multiplyByNineFifths(number) //This is helper function
// {
//     return number * (9 / 5);
// };

// function getFahrenheit(celsius) {
//     return multiplyByNineFifths(celsius) + 32;  //Helper function are being call
// };

// console.log(getFahrenheit(15)); // Returns 59


// //​‌‌‍ ​‌‌‍Anonymous function definition​

// var anon = function () {
//     console.log('I am anonymous');
// }
// anon();


//​‌‌‍‍Arrow Functions​

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};
/* Normal version
const rectangleArea = function (width, height) {
    let area = width * height;
    return area;
};
*/

//​‌‌‍Concise Body Arrow Functions​

/*const plantNeedsWater = day =>{
    if (day ==='Wednesday'){
    return true;
    }
    else{
    return false}
    }
    console.log(plantNeedsWater("Wednesday"));
*/
    
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater("Wednesday"));