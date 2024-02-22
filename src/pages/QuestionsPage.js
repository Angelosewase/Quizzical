import React from "react";
import Question from "../components/question";
import "../styles/questionPage.css";

function QuestionPage() {
  const [data, setData] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);
  const [marks,setMarks] = React.useState(0)
  const [restart,setRestart] = React.useState(false)
  let answers = []

 

  React.useEffect(() => {
    async function get() {
      const resp = await fetch("https://opentdb.com/api.php?amount=10");

      const data = await resp.json();
      return data;
    }

    get().then((data) => setData(data.results));
  }, [restart]);


  
  function mark(answer){
   answers.push(answer)
  //  console.log(answers)
    }
  
  function showResults(){
   setSubmitted(prev =>!prev)
   for (let i = 0; i < answers.length; i++) {
     if(answers[i]){
      setMarks(prevMarks => prevMarks +=1 )
     }
   }

   let correctAnswers  = document.querySelectorAll('.correctAnswer')
   let incorrectAnswers = document.querySelectorAll('.incorrectAnswer')
    for(const correctanswer of correctAnswers){
      correctanswer.classList.add("correct")
      correctanswer.classList.remove("clicked")
    }
    for(const incorrectanswer of incorrectAnswers){
      console.log('incorrect')
      incorrectanswer.classList.add("incorrect")
      incorrectanswer.classList.remove("clicked")
    }
   
  }

  function replay(){
    setRestart(prev =>!prev)
    setSubmitted(false)
    setMarks(0)
    setData([])
  }
   


 const questions = data.map((question, idx) => {

   return (
      <div key={idx} className="questionHolderDiv">
            <Question 
            {...question}
            correctAnswer={question.correct_answer}
            click = {mark}
             restart ={restart}
        />
      </div>
    );
  });


 return (
    <>
      {questions}
    { !submitted && <button 
       className="checkAnswers"
       onClick={showResults}
      >
        {data.length > 0? "show results" : "loading..."}
     </button>}
        {submitted && <div className="resultsDiv">
          <h1 className="resultsParagraph">you have got {marks}/10 correct answer{marks >0 ? "s": ""}</h1>
          <button className="tryAgain" onClick={replay}>playAgain</button>
        </div>}
    </>
  );
}


export default QuestionPage;
