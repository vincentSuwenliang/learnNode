const express = require("express");
// nodejs only support common.js??!
// react es2015 module
require("./services/passport");
//

const app = express();

// require return a function, passin app
require("./router/auth_google")(app);
// specific version to be used
// set up apache which port to assign to node
// runtime configuration for node. node enable other to set before run
const PORT = process.env.PORT || 5000;
// tell node to listen to 5000
app.listen(PORT, () => {
  console.log("server is listen on 5000");
});
