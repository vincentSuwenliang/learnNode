# learnNode


## HOW NODEJS WORK
Javascript Code We Write(100% JS)

Node JS(50% JS 50% C++)

V8(outside browser 30% JS 70% C++)   libuv(C++ 100% undelying networking concurrency file system)

http fs crypto path library in Node, implemented inside of the libuv

Node standard library 

Where it is implemented in Node source code

how v8 and libuv are used to implement

pbkdf2 function in crypto library
password salt other options -> function pbkdf2 -> hash

lib folder 

process.binding() -> connects js and c++ functions

V8  converts values between js ans c++

src folder C++ side

libuv -> give node easy access to underlying OS

https://stackoverflow.com/questions/37916949/what-is-process-bindingfs-in-fs-js




## Evenet Loop
os system 'process' hava many threads  

Activity Monitor   Threads  Processes

OS Scheduler decides which thread should be processed

Multiple CPU code

muti-threading tech enable 

one thread  Event Loop


Node Event Loop -> Single Threated(not good for multiple CPU)
Some of Node Framework/Std Lib -> Not Single Threaded

# Node Express
node: using javascript outside browser
express: runs in node runtime, Has helpers

# for tell keroku set the specify environment, in package.json
  "engines": {
    "node": "8.9.1",
    "npm": "5.6.0"
  },

  # Passpard.js
passport: auth in Express(handle server side authentication)
passport strategy: 

npm i --save passport-google-oauth20 passport 

https://console.cloud.google.com/apis/credentials?project=vso-website-199510&organizationId=933049590451
search google+ to get oauth2 
ClientID:
534330365466-8li5d5uvfdfbvmksbefo3tl9mq5obnmb.apps.googleusercontent.com
ClientSecret
Fq38F4s6mR0Lhko8a07-OACC

## Prettier
"[javascript]": {
    "editor.formatOnSave": true
  }

  need set to true to makes it works
  default is
  "editor.formatOnSave": false,
  enabel by language

  ## Google Oauth
  https://accounts.google.com/o/oauth2/v2/auth?
  response_type=code& // for following use to get more user info
  redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=534330365466-8li5d5uvfdfbvmksbefo3tl9mq5obnmb.apps.googleusercontent.com

for security hacker could change redirect_uri to get user info from google

  Error: redirect_uri_mismatch
  http://localhost:5000/auth/google/callback, does not match the ones authorized for the OAuth client. To update the authorized redirect URIs, visit: https://console.developers.google.com/apis/credentials/oauthclient/534330365466-8li5d5uvfdfbvmksbefo3tl9mq5obnmb.apps.googleusercontent.com?project=534330365466


  Authorized redirect URIs
setting on google console


GooglePlusAPIError: Access Not Configured. Google+ API has not been used in project 534330365466 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/plus.googleapis.com/overview?project=534330365466 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.

TokenError: Code was already redeemed.

Use another account or logout then login solved code redeemed problem

## nodemon

npm run dev
npm run start