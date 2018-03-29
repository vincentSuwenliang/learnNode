const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("../config/keys");

// passport.use  handle auth in general
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback" // for google authed then callback to let user do things
    },
    (accessToken, refreshToken, profile, done) => {
      // accessToken to read user privacy info to reach back to google
      // get the userinfo from google then store into db
      console.log(
        "register to google auth",
        accessToken,
        refreshToken,
        profile
      );
    }
  )
);
