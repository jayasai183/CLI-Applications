const readLineSync = require('readline-sync');
const userInput=readLineSync.question("Welcome to URL Encoder & Decoder.What do you want to continue with?\n1.URL Encoder\n2.URL Decoder\n");

const urlEncoder=url=>encodeURIComponent(url);
const urlDecoder=url=>decodeURIComponent(url);

if(userInput==1){
    const url=readLineSync.question("Enter the URL that needs to be Encoded\n");
    console.log(urlEncoder(url));
}else if(userInput==2){
    const url=readLineSync.question("Enter the URL that needs to be Decoded\n");
    console.log(urlDecoder(url));
}else{
    console.log("Invalid Input.Try Again");
}
