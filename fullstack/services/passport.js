const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const { googleClientID, googleClientSecret } = require("../config/keys");

const User = mongoose.model("users");

// the user passed in by use function
passport.serializeUser((user, done) => {
  // user.id is for generate by mongoo _id
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

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
      // console.log(
      //   "register to google auth",
      //   accessToken,
      //   refreshToken,
      //   profile
      // );
      // google id
      const googleID = profile.id;
      // check the profile id is unique, not like sql primary key
      User.findOne({ googleID: googleID }).then(user => {
        console.log("get existing user", user);
        if (user) {
          // already have a user
          done(null, user);
        } else {
          // make new
          new User({ googleID: googleID }).save().then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);
