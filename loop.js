// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers,task, opeations are recorded from myFile running
myFile.runContents();
// takes the content, exec then enter event loop

console.log('this is node js');

function shouldContinue() {
  // Check one: Any pending setTimeout setInterval setImmediate?
  // Check two: Any pending opetation system  tasks: http server listening to port
  // Check three: Any pending long running operations? like fs module
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// one tick for exec while body once
// event loop, entire body exec in one 'tick'
while(shouldContinue()) {
  // 1) Node looks at pendingTimers sees if any functions are ready to be called, setTimeout setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3) Pause execution. Sits Continue when...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete

  // 4) Look at pendingTimers. setImmediate

  // 5) Handle any 'close' event, callback to handle onClose
  readStream.on('close', () => {
    console.log('clean up code');
  });
}


// exit back to terminal