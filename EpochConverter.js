const readLine=require('readline-sync');

const value=readLine.question("select one of the following\n1.Epoch to Human readable date\n2.Human readable date to Epoch\n");

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

if(value==1){
    const epoch=parseInt(readLine.question("Enter Epoch time\n"));
    console.log(humanDate(epoch));
}else if(value==2){
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

