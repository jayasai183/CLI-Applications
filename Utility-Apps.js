const readLine=require('readline-sync');
const crypto=require('crypto');

const option = parseInt(readLine.question("Welcome to Converters\nWhat do you want to continue with?\n1.URL Encoder/Decoder\n2.Base64 Encoding/Decoding\n3.String Hashing\n4.Epoch Converter\n5.Number Converters\n6.Color Code Converters(RGB<=>HEX)\n7.Unit Converters(Temperature)\nEnter you Option : "));

function urlEncoderDecoder(){

  const userInput = readLine.question("Welcome to URL Encoder/Decoder\nSelect one from below\n1.URL Encoder\n2.URL decoder\nEnter your Option : ");
  
  const urlEncoder=url=>encodeURIComponent(url);
  const urlDecoder=url=>decodeURIComponent(url);

  if(userInput==1){
      const url=readLine.question("Enter the URL that needs to be Encoded\n");
      console.log(urlEncoder(url));
  }else if(userInput==2){
      const url=readLine.question("Enter the URL that needs to be Decoded\n");
      console.log(urlDecoder(url));
  }else{
      console.log("Invalid Input.Try Again");
  }
  
}
//--------------------------------------------------------------------------//
function base64EncodeDecode(){
  
  const userInput = readLine.question("Welcome to Base64 Encoding/Decoding\nSelect one from below\n1.Base64 Encoding\n2.Base64 decoding\nEnter your Option : ");
  
  function encoder(str){
    const base64 = Buffer.from(str).toString('base64');
    console.log(base64);
  }

  function decoder(str){
    const original = Buffer.from(str, 'base64').toString('ascii');
    console.log(original);
  }

  if(userInput==1){
    const str=readLine.question("Enter string to be Encoded\n");
    encoder(str);
  }
  else if(userInput==2){
    const str=readLine.question("Enter string to be Decoded\n");
    decoder(str);
  }else{
    console.log("Invalid Input");
  }
}
//------------------------------------------------------------------------//
function stringHash(){
  
  const algo = readLine.question("Welcome to String Hashing\nSelect any one of the following Cryptographic Hash algorithms:\nmd5\nsha1\nsha256\nsha512\nType your choice: ");

  const string=readLine.question("Enter the String the needs to be converted\n");

  const hash = crypto.createHash(algo).update(string).digest('hex');
  
  console.log(hash);
}
//-----------------------------------------------------------------//
function epochConvert(){
  
  const userInput = readLine.question("Welcome to Epoch Converter\nSelect one from below\n1.Epoch to Human Date\n2.Human date to Epoch\nEnter your Option : ");
    
  function humanDate(epoch){
    const humanDate=new Date(epoch);
    const values={
      year: humanDate.getFullYear(),
      month: humanDate.getMonth()+1,
      date: humanDate.getDate(),
      hours: humanDate.getHours(), 
      minutes: humanDate.getMinutes(), 
      seconds: humanDate.getSeconds()
    };
   return values;
  }
  
  function epochTime(year,month,day,hours,minutes,seconds){
    const time=year+"/"+month+"/"+day+" "+hours+":"+minutes+":"+seconds;
    return new Date(time).getTime();
  }

  if(userInput==1){
      const epoch=parseInt(readLine.question("Enter Epoch time\n"));
      console.log(humanDate(epoch));
  }else if(userInput==2){
     const year=readLine.question("Enter year\n");
     const month=readLine.question("Enter month\n");
     const day=readLine.question("Enter day\n");
     const hours=readLine.question("Enter hours\n");
     const minutes=readLine.question("Enter minutes\n");
     const seconds=readLine.question("Enter seconds\n");
     console.log(epochTime(year,month,day,hours,minutes,seconds));
  }else{
    console.log("Invalid Input");
  }
}
//--------------------------------------------------------//
function numberConvert(){
  
  const userInput = parseInt(readLine.question("Welcome to Number Conversion\nSelect one from below\n1.Binary to Deciml\n2.Binary to Hexadecimal\n3.Binary to Octal\n4.Decimal to Binary\n5.Decimal to Octal\n6.Decimal to Hexadecimal\n7.Hexadecimal to Binary\n8.Hexadecimal to Octal\n9.Hexadecimal to Decimal\n10.Octal to binary\n11.Octal to Decimal\n12.Octal to Hexadecimal\nEnter your Option : "));
  
  switch(userInput){
    case 1:
      const bin=readLine.question("Enter Binary value");
      console.log(parseInt(bin,2).toString(10));
      break;
    case 2:
      const bina=readLine.question("Enter Binary value");
      console.log(parseInt(bina,2).toString(16));
      break;
    case 3:
      const binary=readLine.question("Enter Binary value");
      console.log(parseInt(binary,2).toString(8));
      break;
    case 4:
      const dec=readLine.question("Enter Decimal value");
      console.log(parseInt(dec,10).toString(2));
      break;
    case 5:
      const deci=readLine.question("Enter Decimal value");
      console.log(parseInt(deci,10).toString(8));
      break;
    case 6:
      const decimal=readLine.question("Enter Decimal value");
      console.log(parseInt(decimal,10).toString(16));
      break;
    case 7:
      const hex=readLine.question("Enter hex value");
      console.log(parseInt(hex,16).toString(2));
      break;
    case 8:
      const hexa=readLine.question("Enter hex value");
      console.log(parseInt(hexa,16).toString(8));
      break;
    case 9:
      const hexaa=readLine.question("Enter hex value");
      console.log(parseInt(hexaa,16).toString(10));
      break;
    case 10:
      const oct=readLine.question("Enter Octal value");
      console.log(parseInt(oct,8).toString(2));
      break;
    case 11:
      const octa=readLine.question("Enter Octal value");
      console.log(parseInt(octa,8).toString(10));
      break;
    case 12:
      const octal=readLine.question("Enter Octal value");
      console.log(parseInt(octal,8).toString(16));
    break;
    default:
      console.log("Invalid Input");
  }
}
//---------------------------------------------------//
function colorCodeConvert(){
  
  const userInput = readLine.question("Welcome to Color Code Conversion\nSelect one from below\n1.RGB to Hex\n2.Hex to RGB\nEnter your Option : ");
  
  function rgbToHex(val){
    const hexVal=parseInt(val).toString(16);
    return hexVal.length==1? "0"+hexVal :hexVal;
  }
  
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(result){
        var r= parseInt(result[1], 16);
        var g= parseInt(result[2], 16);
        var b= parseInt(result[3], 16); 
    } 
    const hexValue={
      red: r,
      blue: b,
      green: g
    };
    return hexValue;
  }
  
  if(userInput==1){
    
    const red=readLine.question("enter red");
    const green=readLine.question("enter green");
    const blue=readLine.question("enter blue");
    
    console.log("#"+rgbToHex(red)+rgbToHex(green)+rgbToHex(blue));
    
  } else if(userInput==2){
    
    const hex=readLine.question("Enter hex value");
    console.log(hexToRgb(hex));
    
  }else{
    console.log("Invalid Input");
  }
}
//----------------------------------------------------------------//
function unitConvert(){
  const userInput = parseInt(readLine.question("Welcome to Unit Conveter (Temperatures)\nSelect one from below\n1.Celsius to Kelvin\n2.Kelvin to Fahrenheit\n3.Celsius to Fahrenheit\nEnter your Option : "));
  
  const celsiusToKelvin = celsi => celsi + (273.15);
  const kelvinToFahren = kelvin => ((9*kelvin)/5)-459.67;
  const celsiusToFahren = celsius => ((9*celsius)/5)+32;
  
  switch(userInput){
    case 1:
      const cels=parseInt(readLine.question("Enter temperature in celsius :"));
      console.log(celsiusToKelvin(cels));
      break;
    case 2:
      const kel=readLine.question("Enter temperature in kelvin : ");
      console.log(kelvinToFahren(kel));
      break;
    case 3:
      const cel=readLine.question("Enter temperature in celsius : ");
      console.log(celsiusToFahren(cel));
      break;
    default:
      console.log("Invalid Input");
  }
}
//-------------------------------------------------------//

switch(option){
  case 1:
    urlEncoderDecoder();
    break;
  case 2:
    base64EncodeDecode();
    break;
  case 3:
    stringHash();
    break;
  case 4:
    epochConvert();
    break;
  case 5:
    numberConvert();
    break;
  case 6:
    colorCodeConvert();
    break;
  case 7:
    unitConvert();
    break;
  default:
    console.log("Invalid Input");
}

