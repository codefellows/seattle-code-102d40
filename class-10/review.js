// functions 2 ways

// declaring a variable called helloWorldA, assigning it the value of a function that takes a name as a parameter,
// prints a message using the name parameter to the console
var helloWorldA = function(name) {              
    console.log('A new world awaits, ' + name);
}

// declaring a function called helloWorldB, that takes a name parameter
// prints a message using the name parameter to the console
function helloWorldB(name) {
    console.log('A new world awaits, ' + name);
}

// LOOPS - FOR & WHILE

// FOR LOOP: for(){}
// for(initial value; conditional expression; increment){
//     write your code here;
// }

// For loop that start at 5, runs as long as i is less than 50, increment i by 5 each time
for(let i = 5; i < 50; i = i+5){
    console.log(i) // print value of i to the console
}

// WHILE LOOP: while(){}
// while(this condition evaluates to true){
//     this code will execute (run)
// }
let number = 10;
while (number > 0){
    console.log(number);
    number -= 1;
}

// expressions
let x = 5 + 4;
let name = "Kassie" + "Bradshaw"
let thisNumber = ((5 + 4) - (2-1));

// assignment operators & comparison operators
let y = 5; // assigning the value of the number 5 to the variable y
y += x;    // assigning the value of (y + x) to the variable y

// RGB, Hex Codes, HSV - 
// RGB is Red, Green, Blue
// HSL/HSV is Hue, Saturation, Lightness
// Hex codes are 6-digit values (RR, GG, BB) <-- #E85555

// NOTES 
// Look out for syntax and small details

// TOOLS TO USE
// repl.it <-- test your JS here
// codepen.io <-- test your html, css here (you can also test JS, but it's tricky)