// var todos = [
//     "Clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];
// var todosImportant = [
//     "Clean room!",
//     "brush teeth!",
//     "exercise!",
//     "study javascript!",
//     "eat healthy!"
// ];
// var todosLength = todos.length;
// // for (var i = 0; i < todosLength; i++) {
// //     console.log(i);
// // }

// function logTodos(todo, i) {
//     console.log(todo, i);
// }

// todos.forEach(logTodos);
// todosImportant.forEach(logTodos);

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }
// var counterTwo = 10;
// do {
//     console.log(counterTwo)
//     counterTwo--;
// } while (counterTwo != 0)


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
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user) {
            if (database[i].password === pass) {
                console.log("Access granted! this is your feed. ");
                console.log(newsFeed);
                break;
            } else {
                alert("Wrong password!");
                break;
            }
        } else {
            alert("Wrong username and password combination.");
            break;
        }
    }
}

SignIn(inputUsername, inputPassword);