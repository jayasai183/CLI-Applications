const quizList=[{
  question:"Which operator can be used to compare two values?",
  options:["1)=","2)==","3)><","4)<>"],
  correctAnswer:"2"
},
{
  question:"what is used to declare an array in Java along with the variable type?",
  options:["1){}","2)()","3)[]","4){()}"],
  correctAnswer:"3"
},
{
  question:"What is the correct way to create an object called myObj of MyClass?",
  options:["1)new myObj = MyClass();","2)MyClass myClass = new myObj();","3)MyClass myObj = new MyClass();","4)class myObj = new MyClass();"],
  correctAnswer:"3"
},
{
  question:"Which method can be used to find the length of a string?",
  options:["1)getSize()","2)len()","3)getLen()","4)length()"],
  correctAnswer:"4"
},
{
  question:"Which method can be used to find the highest value of x and y?",
  options:["1)Math.max(x,y)","2)Math.maxNum(x,y)","3)Math.maximum(x,y)","4)Math.largest(x,y)"],
  correctAnswer:"1"
}
];

const readLineSync=require('readline-sync');
let score=0;

function quiz(ques){
  const userInput=readLineSync.question(`${ques.question}\n${ques.options.join('\n')}\nType your Option : `);
  if(userInput==ques.correctAnswer){
    score++;
    console.log("Correct Answer");
  }else{
    console.log( `Wrong Answer\nCorrect Answer is ${ques.options[ques.correctAnswer-1]}`);
  }
  console.log("---------------------------");
}

console.log("    Welcome to Java Quiz for Beginners \nLet's start testing your knowledge on Java Basics\n");

quizList.forEach(quiz);

console.log(`Your score is : ${score}\n`);

if(score==quizList.length){
  console.log("Thanks for taking the Quiz.You are good at Java Basics.Encouraging you to take Advanced Quiz");
}
else if(score>quizList.length/2){
  console.log("Thanks for taking the Quiz.You are half way there to become master at Java Basics.All the best");
}else{
  console.log("Thanks for taking the Quiz.you need to work on Java Basics.All the best");
}
