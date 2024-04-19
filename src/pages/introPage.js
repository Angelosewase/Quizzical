import React from "react";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="IntroMainPage">
        <h1>Quizzical</h1>
        <p>
          Welcome to Quizzical, where knowledge meets fun! Explore thousands of
          quizzes across diverse topics, challenge friends , and track your
          progress . QuizZone offers to you an immersive quizzing experience
          anytime, anywhere. Start now and become a trivia master!
        </p>

        <Link to={"/questions"}>
          <button>Start quizz </button>
        </Link>
      </div>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4a5489 "
          fill-opacity="1"
          d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,234.7C960,235,1056,181,1152,176C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
  </>
  );
}

export default Home;
