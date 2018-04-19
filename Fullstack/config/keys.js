// do not commit this to server
// only run in local
// production use variable way to pass in

// figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
