// let yellow = "Yellow";
// let otherYellow = "yellow";

// let favColor = yellow;

// console.log(yellow);
// console.log(otherYellow);

// console.log(yellow == otherYellow);

let usersColor = prompt("What is your favorite color?");
// console.log(usersColor);

let x = 5;
let y = "5";

// console.log(x, y); // number, string
// console.log(x == y); // equals
// console.log(x === y); // STRICTLY equals

// If the user's fav color is yellow, say "Mine too!"
// otherwise say "That's a good color"

// if (usersColor == "YELLOW"){
//     console.log("I also like YELLOW!!!!");
// } else if (usersColor.toLowerCase() == "yellow") {
//     console.log("Mine too!");
// } else {
//     console.log("That's still a nice color.");
// }

if (usersColor == "YELLOW"){
    document.write("I also like YELLOW!!!!");
} else if (usersColor.toLowerCase() == "yellow") {
    document.write("Mine too!");
} else {
    document.write("That's still a nice color.");
}
