import React from "react" 

export default function Question(props){
  
  const QuestionElements= props.questionsData.map(data=>(
    <div>
      <div>{data.question}</div>
      <div>{data.incorrect_answers}</div>
      <div>{data.correct_answer}</div>
    </div>
  ))
  return (
    <div>
       {QuestionElements}
    </div>
   
  )
}