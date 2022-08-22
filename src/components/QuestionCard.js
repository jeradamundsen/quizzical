import React from "react" 


export default function QuestionCard(props){

  
  const QuestionElements= props.questionsData.map(data=>{ 
    console.log('question ele data', data.question)
   return(
      <div>
      <div><h2>{data.question}</h2></div>
      <div className="answer_buttons">
        <button className="button_ele">{data.correct_answer}</button>
        {data.incorrect_answers.map((ans)=> <button className="button_ele">{ans}</button>)}
      </div>
      
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


    
   
  
