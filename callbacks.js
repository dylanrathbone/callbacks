const dns = require('dns');
const crypto = require('crypto');
const fs = require('fs');

encrypt();

dns.lookup('www.google.com', (err, address, family) => {
  if (family === 6) {
    console.log('www.google.com is an IPV6 address');
  }
  console.log('www.google.com is an  IPV4 address');
  console.log('IP %s, IPV %s', address, family);
});

console.log('1');

setTimeout(() => {
  console.log('callback1');
}, 5000);

console.log('3');

setTimeout(() => {
  console.log('callback2');
}, 1000);

function encrypt() {
  const cipher = crypto.createCipher('aes256', 'jksadaskh&&&9a9a9***KAKAK');

  let encrypted = '';
  cipher.on('readable', () => {
    const data = cipher.read();
    if (data)
      encrypted += data.toString('hex');
  });
  cipher.on('end', () => {
    console.log('Encrypted');
  });

  fs.readFile('/Users/927015/Desktop/largeText.txt', (err, data) => {
    cipher.write(data.toString('utf8'));
    cipher.end();
    if (err) {
      console.log(err);
    }
  });
}

myOwnFunctionWithACallback(function pleaseCallThisWhenDone() {
  console.log('This function has just been called... back! :)');
});


function myOwnFunctionWithACallback(callback) {
  setTimeout(() => {
    callback();
  }, 10000);
}


