const express = require("express");
const app = express();
const User = require("./User");

app.use("/files", express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/login", function (req, res) {
  User.find()
    .lean()
    .exec(function (err, users) {
      if (err) {
        console.log(err);
      } else {
        console.log(users);
        console.log(req.body);
        const usersMatched = users.filter(
          (user) =>
            user.name === req.body.name && user.password === req.body.password
        );
        console.log(usersMatched);
        if (usersMatched[0]) {
          res.send(
            "Zostałeś zalogowany w naszej zalogowany<br><br><a href='/files'>powrót<a/>"
          );
        } else {
          res.send(
            "Błędny login lub hasło <br><br><a href='/files'>powrót do logowania<a/>"
          );
        }
        // console.log(req.body.password + req.body.name);
      }
    });
});

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
