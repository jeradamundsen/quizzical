import React from "react" 

export default function Item(props){

      var start=Math.floor(Math.random()*4)
      var answers= props.wrongAns
      var correctAnswer=props.correctAns
      var arr= answers.splice(start, 0,correctAnswer)
    
    const buttonElements= arr.map((ele)=>{
      
  return <button>ele</button>
})
    
  console.log('buttonEle: ', buttonElements)
  return (
    <div>
      <div>
        <h3>
         { buttonElements }
        </h3>
        
       
      </div>
    </div>
  )
}