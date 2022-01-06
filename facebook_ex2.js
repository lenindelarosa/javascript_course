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