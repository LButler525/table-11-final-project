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

  const [answers2, setAnswers2] = useState<{
      question1: string[];
      question2: string[];
      question3: string[];
      question4: number;
      question5: number;
      question6: string[];
      question7: string[];
      question8: number;
      question9: string[];
      question10: number;
      question11: string[];
      question12: string[];
      question13: number;
      question14: string[];
      question15: string[];
      question16: string[];
      question17: number;
      question18: string[];
      question19: string[];
      question20: string[];
  }>({
    question1: [],
      question2: [],
      question3: [],
      question4: 0,
      question5: 0,
      question6: [],
      question7: [],
      question8: 0,
      question9: [],
      question10: 0,
      question11: [],
      question12: [],
      question13: 0,
      question14: [],
      question15: [],
      question16: [],
      question17: 0,
      question18: [],
      question19: [],
      question20: []
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
      {page === "Detailed" && <Detailed changePage={changePage} answersD={answersD} setAnswersD={setAnswersD}/>}
      {page === "AnswersD" && <AnswersD changePage={changePage} answersD={answersD} />}
      {page === "Basic" && <Basic changePage={changePage} answers2={answers2} setAnswers2={setAnswers2}/>}
      {page === "Review" && <Review changePage={changePage} answers2={answers2}/>}
      {page === "Answers" && <Answers changePage={changePage} answers2={answers2} />}
    </div>
  );
}

export default App;
