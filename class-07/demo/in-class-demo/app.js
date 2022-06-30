let usersColor = prompt("What is your favorite color?");

// If the user's fav color is yellow, say "Mine too!"
// otherwise say "That's a good color"

// This block of code is using conditional logic to write a message to the console

// if (usersColor == "YELLOW"){
//     console.log("I also like YELLOW!!!!");
// } else if (usersColor.toLowerCase() == "yellow") {
//     console.log("Mine too!");
// } else {
//     console.log("That's still a nice color.");
// }

// This block of code is using conditional logic to write a message to the web page
if (usersColor == "YELLOW"){
    document.write("I also like YELLOW!!!!");
} else if (usersColor.toLowerCase() == "yellow") {
    document.write("Mine too!");
} else {
    document.write("That's still a nice color.");
}

// Ask the user what time it is, and give them a message with conditional logic

// Structure of a function
//keyword /name /parameters /codeblock
// function askTime(){}


//   parenthesis(parameters)
function addNumbers(x, y){
    return x + y;
}

// parenthesis(arguments)
// addNumbers(4, 8);

// let classGreeting = addNumbers("Hello ", "Class");
// console.log("LINE 41", classGreeting);

// document.write(addNumbers("Hello ", "Class"));















// DECLARING THE FUNCTION
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
    }
    document.write(message);
    return message;
};

// USING YOUR FUNCTION/ "invoke" / "call"
// console.log(askTime());

// Try to use a variable from inside the function, doesn't work
// console.log(message);

// Invoke the function, assign the result to a variable
// let message = askTime();
// Write message to console.
// console.log("LINE 56", message);

