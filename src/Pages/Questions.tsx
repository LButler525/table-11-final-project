import React, { useState } from "react";
import {Basic} from "./Basic";
import {Review} from "./Review";

interface QuestionsProps {
    changePage: (input: string) => void;
    page: string; // Parent component (App.tsx) controls page
}

export function Questions({ changePage, page }: QuestionsProps) {
  const [answers, setAnswers] = useState({
    question1: [] as string[],
    question2: 5,
    question3: [] as string[],
    question4: 5,
    question5: "",
    question6: [] as string[],
    question7: "",
  });

  return (
    <>
      {page === "Basic" && <Basic changePage={changePage} answers={answers} setAnswers={setAnswers} />}
      {page === "Review" && <Review changePage={changePage} answers={answers} />}
    </>
  );
}