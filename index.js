let readlineSync = require("readline-sync")
var userName
let score = 0


console.log("welcome to Marvel Quiz")

let questions = [
    {
    question: "Name of Thor's Planet?  ",
    answer: "asgard"
  },
    {
    question: " Who killed loki?  ",
    answer: "thanos"
  },
  {
    question: "version of tony's final suit in end game?  ",
    answer: "Mark LXXXV"
  },
  {
    question: "'Rocket' in marvel movies is a fox or raccoon?  ",
    answer: "raccoon"
  },
  {
    question: " What is groot's most famous dialogue?",
    answer: "i am groot"
  },
  {
    question: "how much do you love avengers?  ",
    answer: "3000"
  }
]

// Greet function
function greet(){
    userName = readlineSync.question("what should we call you ?")
  console.log("hello", userName, ", Now let's start by saying 'AVENGERS ASSEMBLE'")
  }

// Game Function
function game(){
  questions.forEach((elem)=>{
  
  let input = readlineSync.question(elem.question)
  if(input.toLowerCase() == elem.answer.toLowerCase()){
    console.log("right")
    score++
    console.log("you got total ", score, " infinity stones")
  }
    console.log("----------------")

})
  console.log("game Ended")
  console.log("your score is" , score, "infinity stones")
  console.log("highest score is " , 6, "by thanos")
  console.log("thanks for playing" , userName)
  
}


greet()
game()