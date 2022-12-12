const express = require("express");
const app = express();

const hbs = require("express-handlebars");

app.use(express.static("public"));

app.engine("hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

const User = require("./app/models/User");

const user = require("./app/controllers/users.controller");

app.get("/users", function (req, res) {
  user.list(function (err, users) {
    if (err) res.send(err);
    console.log(users);
    res.render(
      "users",
      { users },
      
    );
  });
});

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
