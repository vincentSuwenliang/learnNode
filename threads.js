process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');
const fs = require('fs');
// import crypto from 'crypto';
// SyntaxError: Unexpected token import
// TODO: make it supprt import way
const start = Date.now();

crypto.pbkdf2('su', 'wen', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});



crypto.pbkdf2('su', 'wen', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});



crypto.pbkdf2('su', 'wen', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});


crypto.pbkdf2('su', 'wen', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2('su', 'wen', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});

crypto.pbkdf2('su', 'wen', 100000, 512, 'sha512', () => {
  console.log('6:', Date.now() - start);
});

// seems exec async, exec at the same time

// used the thread pool of libuv computationly intensive task

