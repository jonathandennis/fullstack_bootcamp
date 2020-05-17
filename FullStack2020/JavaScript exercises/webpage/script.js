//  Facebook example

var database = [
    {
    username: "jdennis111",
    password: "1234"
    },
    {
    username: "sally",
    password: "123"
    },
    {
    username: "ingrid",
    password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "jdennis111",
        timeline: "Javascript is preeetyy cool!"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
if (isUserValid(username, password)) {
         console.log(newsFeed);
     } else {
         alert("Sorry, wrong username and password");
     }
}
var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);