import React from "react";
import "../styles/question.css";


function Question({click,restart, ...props}) {
 const[isCliked, setIsClicked] = React.useState(false)
 const[answers,setAnswers] = React.useState([]);

    function handleClick(event){
     setIsClicked(prev => !prev)
      if(event.target.value === props.correctAnswer){
        click(true)
        event.target.classList.add("correctAnswer")
        event.target.classList.add("clicked")
      }else{
        // console.log("wrong")
       click(false)
       event.target.classList.add("incorrectAnswer")
       event.target.classList.add("clicked")
      }
   }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }


  let answerdata = [...props.incorrect_answers, props.correct_answer];
  
  React.useEffect(()=>{
    setAnswers(shuffleArray(answerdata))
    // eslint-disable-next-line
  }, [restart])
  

  


  const answerDiv = answers.map((text, idx) => {
    return(
    //  <button>{answer}</button>
    <button 
          key={idx} 
          dangerouslySetInnerHTML={{__html:text}}  
          value={text} 
          onClick={(event)=>{
            handleClick(event,props.correctAnswer)
          }
           }
           disabled ={isCliked}
           
     />
    )

  })

  return (
    <div className="QuestionMainDiv">
              <div className="QuestionDiv">
                <h2 dangerouslySetInnerHTML={{ __html: props.question }} />
              </div>

            <div className="answersContainer">
              {answerDiv}
            </div>
            
            <hr className="hr" />
    </div >
  );
}
export default Question;
