//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

// Create an instance of the express app.
const app = express();

//Deployed port 
const PORT = process.env.PORT || 8000;


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  }); 