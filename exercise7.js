// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// var facebookUser = {
//     username: "Lenin",
//     password: "123456",
// };

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [{
        username: "Lenin",
        password: "123456"
    },
    {
        username: "Miguel",
        password: "12345"
    },
    {
        username: "Wilbert",
        password: "1234"
    }
]

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
    for (i = 0; i < database.length; i++) {
        if (database[i].username === user) {
            if (database[i].pass === pass) {
                console.log("Access granted! this is your feed. ");
                console.log(newsFeed);
            } else {
                console.log("Wrong password!");
            }
        } else {
            alert("Wrong username and password combination.");
        }
    }
}

SignIn(inputUsername, inputPassword);