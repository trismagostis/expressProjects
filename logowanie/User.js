const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const schema = new mongoose.Schema({
  name: String,
  password: String,
});
module.exports = mongoose.model("User", schema);
