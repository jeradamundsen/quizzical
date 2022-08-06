import React, { Component } from "react" 
import Split from "react-split"
import Main from "./components/Main" 

export default function App(){
  const [ questions, setQuestions ] = React.useState(0)

  React.useEffect(()=>{
    // https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple
    console.log("effect ran")
  })
  return(
   <div>
     {
      questions.length > 0 ?
     <Main/>
     :
     <div>
       <h2>Quizzical</h2>
       <p>Some description if needed</p>
       <button>Start quiz</button>
     </div>
    } 
   </div>
  )
}