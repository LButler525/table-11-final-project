import React, { useState } from 'react';
import './App.css';
//import { Button, Form } from 'react-bootstrap';
import {Basic} from "./Pages/Basic";
import {Home} from "./Pages/Home";
import { Detailed } from './Pages/Detailed';
import { Review } from './Pages/Review';
import { Answers } from './Pages/Answers';

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
  
  return (
    
    <div className="App">
      {page === "Home" && <Home changePage={changePage} />}
      {page === "Basic" && <Basic changePage={changePage} answers={answers} setAnswers={setAnswers} />}
      {page === "Detailed" && <Detailed changePage={changePage} />}
      {page === "Review" && <Review changePage={changePage} answers={answers}/>}
      {page === "Answers" && <Answers changePage={changePage} answers={answers} />}
    </div>
  );
}

export default App;
