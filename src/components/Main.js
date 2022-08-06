import React from "react" 

export default function Main(props){
  return (
    <div>
      <div>{props.question}</div>
      <div>{props.incorrectAnswers}</div>
      <div>{props.correctAnswer}</div>
    </div>
  )
}