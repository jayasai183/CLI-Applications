const readLineSync=require('readline-sync');
const crypto = require('crypto');

console.log("Welcome to the Place where you can convert any String into an Integer\n");

const algo = readLineSync.question("Select any of the following Cryptographic Hash algorithms\nmd5\nsha1\nsha256\nsha512\n");

const string=readLineSync.question("Enter the String the needs to be converted\n");

const hash = crypto.createHash(algo).update(string).digest('hex');
console.log(hash);

