const bodyParser = require("body-parser");
var express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
var config = require("./config");
require("dotenv/config");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect(
  config.dbConnection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("connected to db!");
    }
  }
);
app.listen(3000);

var Users = require("./routes/Users");
app.use("/Users", Users);

var UserRoles = require("./routes/UserRoles");
app.use("/UserRoles", UserRoles);
