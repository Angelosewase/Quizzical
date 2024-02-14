import React from "react";
import "../styles/question.css";

function Question(props) {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
  let answerdata = [...props.incorrect_answers, props.correct_answer];

  let answers = shuffleArray(answerdata);
  const answerDiv = answers.map((answer) => {
    return(
    //  <button>{answer}</button>
    <button dangerouslySetInnerHTML={{__html:answer}} />
    )
    ;
  });

  return (
    <div className="QuestionMainDiv">
      <div className="QuestionDiv">
        <h2 dangerouslySetInnerHTML={{ __html: props.question }} />
      </div>

      <div className="answersContainer">{answerDiv}</div>
      <hr></hr>
    </div>
  );
}
export default Question;
