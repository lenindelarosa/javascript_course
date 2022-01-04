// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var facebookUser = {
    username: "Lenin",
    password: "123456",
};

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [facebookUser];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsFeed = [{
        username: "Andy",
        timeline: "Too much things too post!"
    },
    {
        username: "Lenin",
        timeline: "I like this movie!"
    },
    {
        username: "Miguel",
        timeline: "This is so funny!"
    },
]

var inputUsername = prompt("Please enter your username: ");
var inputPassword = prompt("Please enter now your password: ");

function SignIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        alert("Ok, username validated!");
        console.log(newsFeed)
    } else {
        alert("Sorry, wrong username/password.");
    }
}

SignIn(inputUsername, inputPassword);



// if (inputPassword in database.username && inputPassword === database.password(inputUsername)) {
//     alert("Ok, username validated!")
// }