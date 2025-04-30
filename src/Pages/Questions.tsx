import React, { useState } from "react";
import {Basic} from "./Basic";
import {Review} from "./Review";

interface QuestionsProps {
    changePage: (input: string) => void;
    page: string; // Parent component (App.tsx) controls page
}

export function Questions({ changePage, page }: QuestionsProps) {
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
        question4: 5,
        question5: 5,
        question6: [],
        question7: [],
        question8: 5,
        question9: [],
        question10: 5,
        question11: [],
        question12: [],
        question13: 5,
        question14: [],
        question15: [],
        question16: [],
        question17: 5,
        question18: [],
        question19: [],
        question20: []
    })

  return (
    <>
      {page === "Basic" && <Basic changePage={changePage} answers2={answers2} setAnswers2={setAnswers2}/>}
      {page === "Review" && <Review changePage={changePage} answers2={answers2} />}
    </>
  );
}