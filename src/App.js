import React, { Component } from "react" 
import Split from "react-split"
import Main from "./components/Main" 

export default function App(){
const [ questionsData, setQuestionsData ] = React.useState([])
  
React.useEffect(()=>{
    fetch( "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
     .then(res => res.json())
     .then( data => setQuestionsData(data.results))

 },[])


  
  function startQuiz(){
    
  }
  return(
   <div>
     {
      questionsData.length > 0 ?
     <Main
        question={questionsData.question}
        incorrectAnswers={questionsData.incorrect_answers}
        correctAnswer={questionsData.correct_answer}
     />
     :
     <div>
       <h2>Quizzical</h2>
       <p>Some description if needed</p>
       <button onClick={startQuiz}>Start quiz</button>
     </div>
    } 
   </div>
  )
}