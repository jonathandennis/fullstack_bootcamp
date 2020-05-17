// Different ways to write functions


function sayHello() {
    console.log("Hello");
}

sayHello();

// Anonymous Function
var sayBye = function() {
    console.log("Bye");
}

sayBye();


// Function example: efficiency is best

function sing () {
    console.log("AHHHHHHHHHH");
    console.log("TEEEEEEEEEE");
}

sing();

function sing2 () {
    console.log("laaaaa deeeeeee");
    console.log("Tdaaa doooo");
}

sing2();

// from lines above to better lines below using an (Argument)

function sing(song) {
    console.log(song);
}

sing("laaa deee daaah");
sing("Heelllllooooo");
sing("Backstreet is back alright");

// Multiply function

function multiply(a, b) {
    return a * b;
}

//Evolves

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a * b;
    }
}

// evolves

function multiply(a, b) {
    return a * b;
}

alert(multiply(3,4));
// /\ function as argument to avoid extra line of code defining argument i.e.
var total = multiply(4,5);
alert(total);