// Require Express
const express = require("express");

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// our first home Route:
app.get("/home", (request, response, next) =>
    response.sendFile(__dirname + "/views/home.html")
);

// about route:
app.get("/about", (request, response, next) =>
    response.sendFile(__dirname + "/views/about.html")
);

// work route
app.get("/work", (request, response, next) =>
    response.sendFile(__dirname + "/views/work.html")
);

// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000! "));
