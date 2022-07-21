let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
let listItem = newYearsResolutions[0];
console.log(listItem)                   // Keep a journal
console.log(newYearsResolutions[1])     // Take a falconry class
console.log(newYearsResolutions[2])     // Learn to juggle



//Update Elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons);                   //Output: ['Winter', 'Spring', 'Summer', 'Autumn']


//Arrays with let
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0]='Mayo';
console.log(condiments);                //[ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = ['Mayo'];
console.log(condiments);                //[ 'Mayo' ]


//Array with const
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Plate'];
utensils[3]='Spoon';
console.log(utensils);                  //[ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]
/*utensils =['me'];
console.log(utensils); //Error 
*/

//.length array
const newYears = ['Keep a journal', 'Take a falconry class'];
console.log(newYears.length);           // Output: 2

//.push()
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('nah','no');
console.log(chores);                    //[ 'wash dishes', 'do laundry', 'take out trash', 'nah', 'no' ]

//.pop()
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop(); //or newItemTracker.pop();
 
console.log(newItemTracker);            // Output: [ 'item 0', 'item 1' ]
console.log(removed);                   // Output: item 2

//.shift()
const array = ["a", "b", "c", "d","e"];
var a = array.shift();
console.log(a);                         //a
console.log(array);                     //[ 'b', 'c', 'd', 'e' ]

//.unshift()
const array2 = ["a", "b", "c", "d","e"];
var b = array2.unshift("element")
console.log(b);                         //6
console.log(array2);                    //[ 'element', 'a', 'b', 'c', 'd', 'e' ]

//slice
const array3 = ["a", "b", "c", "d","e"];
var c = array3.slice(1,3)
console.log(c);                         //[ 'b', 'c' ]
console.log(array3);                    //[ 'a', 'b', 'c', 'd', 'e' ]
var d = array3.indexOf("c")
console.log(d);                         //2