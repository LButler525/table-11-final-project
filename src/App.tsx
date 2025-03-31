import React, { useState } from 'react';
import './App.css';
//import { Button, Form } from 'react-bootstrap';
import {Basic} from "./Pages/Basic";
import {Home} from "./Pages/Home";
import { Detailed } from './Pages/Detailed';
import { Review } from './Pages/Review';

function App() {
  const [page, setPage] = useState<string>("Home");

  const changePage = (input: string) => {
    setPage(input);
  }
  
  return (
    
    <div className="App">
      {page === "Home" && <Home changePage={changePage} />}
      {page === "Basic" && <Basic changePage={changePage} />}
      {page === "Detailed" && <Detailed changePage={changePage} />}
      {page === "Review" && <Review changePage={changePage} />}
    </div>
  );
}

export default App;
