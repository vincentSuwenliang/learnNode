
// console.log(cluster.isMaster);
// act like a server and do nothing else
const express = require('express');
const crypto = require('crypto');
const app = express();
function doWork(duration) {
  const start = Date.now();
  while(Date.now() - start < duration) {}
}



app.get('/', (req, res) => {
  // doWork(5000);
  crypto.pbkdf2('su', 'wen', 100000, 512, 'sha512', () => {
    // console.log('Hash:', Date.now() - start);
    res.send('HI there');
  });
  
})

app.get('/fast', (req, res) => {
  res.send('This was fast');
})


app.listen(3000, () => {
  console.log('server is listening on 3000');
})


// nodemon for save then restart server

function doServer() {

}

// Benchmark tools for call api
// apache benkmark
/**
 * ab -c 50 -n 500 localhost:3000/fast
 * -c for concurency
 * -n for request number
 */

 // http://pm2.keymetrics.io/ 
 // pm2 for production server, manage the thread, fork number = logical cpu number