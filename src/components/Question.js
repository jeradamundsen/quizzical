import React from "react" 
import Item from "./Item"

export default function Question(props){
  
  const QuestionElements= props.questionsData.map(data=>{
      let start, answers, correctAnswer;
      
      start=Math.ceil(Math.random()*4)
      console.log("start", start)
      answers= data.incorrect_answers
      correctAnswer=data.correct_answer
      answers.splice(start, 0,correctAnswer)
      
      console.log("ansers", answers)
      console.log('correctAns', correctAnswer)
      var buttons=answers.map(ele=>{
       return(
        <button>{ele}</button>
       ) 
      })
   return(
      <div>
      <div><h2>{data.question}</h2></div>
      <div>{buttons}</div>
      
    </div>
   )
})
  return (
    <div  className="questions-list">
       {QuestionElements}
      
       <div>
       <button>Check Answers</button>
      </div>
    </div>
   
  )
}