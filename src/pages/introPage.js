import React from "react";
import '../styles/HomePage.css'

function Home(){
   return (
    
    <> 
    <div className="IntroMainPage">
    <h1>Quizzical</h1>
    <p>Welcome to Quizzical, where knowledge meets fun! Explore thousands of quizzes across diverse topics, challenge friends in real-time competitions, and track your progress with detailed insights. With a sleek and intuitive design, QuizZone offers an immersive quizzing experience anytime, anywhere. Start now and become a trivia master!</p>

    <button>Start quizz</button>
    </div>

    <svg width="200" height="200" className="svg1">
      <polygon points="200,0 200,0 200,100 100,200 0,100" fill="#FFFAD1" />
    </svg>

    <svg width="200" height="200">
      <polygon points="100,0 200,0 200,100 100,200 0,100" fill="#DEEBF8" />
    </svg>

    <svg width="200" height="200" className="svg3">
      <polygon points="100,0 300,0 400,100 100,200 0,100" fill="#DEEBF8" />
    </svg>

    <svg width="200" height="200" className="svg4">
      <polygon points="200,0 300,0 200,100 100,300 0,100" fill="#FFFAD1" />
    </svg>
    </>

 
   )
}

export default Home;