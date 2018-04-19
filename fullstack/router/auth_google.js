const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
// google is the identifier

// with code
// http://localhost:5000/auth/google/callback
// ?code=4%2FAAAAkhHAj-GE1ZrnUhhlxnZPP0GuvkR5_Pqd-JXtT3_x9yoxNdC4pLn5MBThpRbuYwbFKYEeFqqUhVMsr7YpTm0#
