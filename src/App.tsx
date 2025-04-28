import React, { useState } from 'react';
import './App.css';
//import { Button, Form } from 'react-bootstrap';
import {Basic} from "./Pages/Basic";
import {Home} from "./Pages/Home";
import { Detailed } from './Pages/Detailed';
import { Review } from './Pages/Review';
import { Answers } from './Pages/Answers';
import { AnswersD } from './Pages/Answers_D'

function App() {
  const [page, setPage] = useState<string>("Home");

  const changePage = (input: string) => {
    setPage(input);
  }

  const [answers, setAnswers] = useState<{
    question1: string[];
    question2: number;
    question3: string[];
    question4: number;
    question5: string;
    question6: string[];
    question7: string;
  }>({
    question1: [],
    question2: 5,
    question3: [],
    question4: 5,
    question5: '',
    question6: [],
    question7: ''
  });

  const [answersD, setAnswersD] = useState<{
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
  }>({
    question1: 'Enter response here',
    question2: 'Enter response here',
    question3: 'Enter response here',
    question4: 'Enter response here',
    question5: 'Enter response here',
    question6: 'Enter response here',
    question7: 'Enter response here'
  });
  
  return (
    
    <div className="App">
      {page === "Home" && <Home changePage={changePage} />}
      {page === "Basic" && <Basic changePage={changePage} answers={answers} setAnswers={setAnswers} />}
      {page === "Detailed" && <Detailed changePage={changePage} answersD={answersD} setAnswersD={setAnswersD}/>}
      {page === "Review" && <Review changePage={changePage} answers={answers}/>}
      {page === "Answers" && <Answers changePage={changePage} answers={answers} />}
      {page === "AnswersD" && <AnswersD changePage={changePage} answersD={answersD} />}
    </div>
  );
}

export default App;
