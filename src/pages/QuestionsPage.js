import React from "react";
import Question from "../components/question";

function QuestionPage() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function get(){
        const resp = await fetch("https://opentdb.com/api.php?amount=10")
      
      const data  = await resp.json()
       return data
    }   

    get().then((data) => setData(data.results))
  }, []);
  const questions = data.map(question =>{
        
        return <Question {...question}  key=  {question.question}/>
  })


  return (
    <>
    {questions}
    </>
  )
 
}

export default QuestionPage;
