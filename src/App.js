import React, { Component } from "react" 
import QuestionCard from "./components/QuestionCard" 
import "./style.css"

export default function App(){
const [ questionCardQuestions, setQuestionCardQuestions ] = React.useState([])
const [ show, setShow ] = React.useState(false)


React.useEffect(()=>{
  fetch( "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
   .then(res => res.json())
   .then( data => setQuestionCardQuestions(prevData=>([...prevData, ...data.results])))
},[show])



function newQuestionSet(){
 return setShow(prevShow => !show)
 } 
 
  return(
   <div className="container">
     {
      show ?
      
     <QuestionCard questionsData={questionCardQuestions} />
     :
     <div>
       <h2>Quizzical</h2>
       <p>Some description if needed</p>
       <button onClick={()=>newQuestionSet()} >Start quiz</button>
     </div>
    } 
   </div>
  )
}