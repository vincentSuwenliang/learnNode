const express = require("express");
// nodejs only support common.js??!
// react es2015 module
require("./models/User");
require("./services/passport");
//
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
// require return a function, passin app
require("./router/auth_google")(app);

mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
// specific version to be used
// set up apache which port to assign to node
// runtime configuration for node. node enable other to set before run
const PORT = process.env.PORT || 5000;
// tell node to listen to 5000
app.listen(PORT, () => {
  console.log("server is listen on 5000");
});
