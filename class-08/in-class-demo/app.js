// STRUCTURE OF A FUNCTION
// function askTime(){}
// -- keyword |name|parameters|codeblock to be executed
// -- name is whatever you want it to be
// -- parameters are the (optional) additional data you'll feed into the function
// -- codeblock is what you want your function to do

//---------------------------------------------------------------------------------

// HOW DO WE USE FUNCTIONS??

// Declaring the function...

// Ask the user what time it is, and give them a message with conditional logic
function askTime(){
    // code the function executes 
    let time = prompt('What time is it?');
    let message;
    
    if(time <= 11){
        message = 'Good Morning!';
    } else if (time <= 18){
        message = 'Good Afternoon!';
    }  else if(time <= 24){
        message = 'Good Evening!';
    } else {
        message = 'Time does not exist!';
        askTime();
    }
    document.write(message); // write the message to the HTML document
    return message;          // return the message from the function
};

// Invoking the function (referred to as calling it, means to use it)...

askTime();

// Understanding parameters & arguments
// PARAMETERS --> The placeholders you give a function when you are declaring the function
// ARGUMENTS --> The actual data you pass to the function when you are invoking it

//  parameters go in parenthesis --> tell the function it will need extra data, and give it a "placeholder" name
function addNumbers(x, y){    // I'm going to need 2 numbers, I don't know what they are yet so I'll call them x & z 
    return x + y;             // add the 2 numbers together and return the result 
}

// Invoking a function and passing it ARGUMENTS
let sum = addNumbers(10, 35); // invoke the function with the 2 numbers I want to add together. Assign that result to a variable.
console.log(sum);             // show what the sum of the function was


//---------------------------------------------------------------------------------


// ASK THE USER THEIR FAV COLOR 
    // function to ask the user their fav color
    // If the user's fav color (turned lowercase) is yellow, say "Mine too!"
    // otherwise say "That's still a nice color"
function favColor(){
    let usersColor = prompt("What is your favorite color?");
    
    // This block of code is using the conditional logic to write a message to the console
    // if (usersColor.toLowerCase() == "yellow") {
    //     console.log("Mine too!");
    // } else {
    //     console.log("That's still a nice color.");
    // }
    
    // This block of code is using the conditional logic to write a message to the web page
    if (usersColor.toLowerCase() == "yellow") {
        document.write("Mine too!");
    } else {
        document.write("That's still a nice color.");
    }
}

// ------------------------------------ SHOW A FUNNY PIC -----------------------------------------------

// function to show a pic to user with a for-loop
// prints the picture to the HTML document

function showPic(){
    const userNum = prompt("How many times do you wanna see a funny picture?");
    for(let i = 0; i < userNum; i++){
        document.write("<img src='embarrassing.jpeg' style='width:300px;'/>")
    }
}

// ----------- EXAMPLE OF HOW YOU CAN CONTROL WHEN YOUR FUNCTIONS RUN (SCRIPT) ---------------------
//
// alert("Hi everyone!")
// askTime();
// favColor();
// addNumbers(5, 9);
// alert("Doin' some stuff...")
// favColor();
// addNumbers()
// alert("See where I'm goin' with this...")







