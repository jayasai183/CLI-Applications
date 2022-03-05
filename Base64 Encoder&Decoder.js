const readLine=require('readline-sync');
const option=readLine.question("Welcome\nSelect any one of the following:\n1.Base64 Encoder\n2.Base64 Decoder\n");

function encoder(str){
  const base64 = Buffer.from(str).toString('base64');
  console.log(base64);
}

function decoder(str){
  const original = Buffer.from(str, 'base64').toString('ascii');
  console.log(original);
}

if(option==1){
  const str=readLine.question("Enter string to be Encoded\n");
  encoder(str);
}
else if(option==2){
  const str=readLine.question("Enter string to be Decoded\n");
  decoder(str);
}else{
  console.log("Invalid Input");
}
