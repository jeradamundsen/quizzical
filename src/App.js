import React, { Component } from "react" 
import Question from "./components/Question" 
import "./style.css"

export default function App(){
const [ questionsData, setQuestionsData ] = React.useState([])
const [ count, setCount ] = React.useState(0)

React.useEffect(()=>{
  fetch( "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
   .then(res => res.json())
   .then( data => setQuestionsData(data.results))
},[count])
 
function newQuestionSet(){
 return setCount( prevCount=>prevCount +1)

 } 

console.log(count)
console.log(questionsData)

  
  return(
   <div className="container">
     {
      count > 0 ?
      
     <Question questionsData={questionsData}/>
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