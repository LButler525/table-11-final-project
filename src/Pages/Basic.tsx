import React from "react";
import { Button, ButtonGroup, Form, Row, Col, OverlayTrigger, Tooltip, ProgressBar } from "react-bootstrap";
import q1_picture from '../Images/basic-q1.jpg';
import q2_picture from '../Images/basic-q2.jpg';
import q3_picture from '../Images/basic-q3.jpg';
import q4_picture from '../Images/basic-q4.png';
import q5_picture from '../Images/basic-q5.png';
import q6_picture from '../Images/basic-q6.jpg';
import q7_picture from '../Images/basic-q7.png';

import { useRef, useEffect, useState } from 'react';

interface BasicProps {
    changePage: (input: string) => void;
    answers: {
        question1: string[];
        question2: number;
        question3: string[];
        question4: number;
        question5: string;
        question6: string[];
        question7: string;
    };
    setAnswers: React.Dispatch<React.SetStateAction<BasicProps["answers"]>>;
}

const QuestionList = 
["I like working and creating things with my hands",
     "On a scale to 1-10, how much do you enjoy collaborating with others (10 being the desire to always collaborate)",
     "I want a job that is extremely secure with no risk",
     "On a scale of 1-10, how much variability do you want in your day-to-day work (10 being extreme variability)",
     "I like to oversee other people and manage them",
     "I want religion to affect my carrer",
     "I prefer to be methodical when making decisions and take my time"]

const questionOptions = ["Strongly Agree", "Agree", "Neither Agree nor Disagree", "Disagree", "Strongly Disagree"];

const helpList = ["Select one or more options that apply to you by clicking on the boxes", 
    "Move the circle on the slider by clicking and dragging from 1 (left) to 10 (right)", 
    "Select one or more options that apply to you by clicking on the switches", 
    "Change the number to your answer by clicking the up arrow to increase, and down arrow to decrease", 
    "Select an option from the dropdown by clicking on the box, followed by your answer", 
    "Select one or more options that apply to you by clicking on the boxes", 
    "Select one options that apply to you by clicking on the circles"]

interface HelpButtonProps {
    qnumber: number;
}

export function HelpButton({ qnumber }: HelpButtonProps) {
    
    return (
      <OverlayTrigger
        placement="top" 
        overlay={<Tooltip id={`tooltip-${qnumber}`}>{helpList[qnumber]}</Tooltip>}
      >
        <Button variant="info">?</Button>
      </OverlayTrigger>
    );
  }

export function summarizeBasicResponse(answers: BasicProps["answers"]) {
    const response = `
        The user has answered as follows:

        Question 1 - ${QuestionList[0]}:
        ${answers.question1.join(", ")}

        Question 2 - ${QuestionList[1]}:
        ${answers.question2}

        Question 3 - ${QuestionList[2]}:
        ${answers.question3.join(", ")}

        Question 4 - ${QuestionList[3]}:
        ${answers.question4}

        Question 5 - ${QuestionList[4]}:
        ${answers.question5}

        Question 6 - ${QuestionList[5]}:
        ${answers.question6.join(", ")}

        Question 7 - ${QuestionList[6]}:
        ${answers.question7}
        `;
    console.log(response)
    return response
}

export function Basic({ changePage, answers, setAnswers }: BasicProps) {

    const question1Ref = useRef<HTMLDivElement>(null);
    const question2Ref = useRef<HTMLDivElement>(null);
    const question3Ref = useRef<HTMLDivElement>(null);
    const question4Ref = useRef<HTMLDivElement>(null);
    const question5Ref = useRef<HTMLDivElement>(null);
    const question6Ref = useRef<HTMLDivElement>(null);
    const question7Ref = useRef<HTMLDivElement>(null);

    // Optional: Scroll when component mounts
    useEffect(() => {
        if (window.location.hash === '#question1') {
            question1Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question2') {
            question2Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question3') {
            question3Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question4') {
            question4Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question5') {
            question5Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question6') {
            question6Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question7') {
            question7Ref.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    
    const [question2Changed, setQuestion2Changed] = useState(false);
    const [question4Changed, setQuestion4Changed] = useState(false);

    // Add this useEffect to check if the user is coming from the review page
    useEffect(() => {
        if (localStorage.getItem("returnFromReview") === "true") {
            setQuestion2Changed(true);
            setQuestion4Changed(true);
            localStorage.removeItem("returnFromReview");
        }
    }, []);

    // Calculate progress
    const totalQuestions = 7;
    const answeredCount =
    (answers.question1 && answers.question1.length > 0 ? 1 : 0) +
    (question2Changed ? 1 : 0) +
    (answers.question3 && answers.question3.length > 0 ? 1 : 0) +
    (question4Changed ? 1 : 0) +
    (answers.question5 !== "" ? 1 : 0) +
    (answers.question6 && answers.question6.length > 0 ? 1 : 0) +
    (answers.question7 !== "" ? 1 : 0);
    const progress = Math.round((answeredCount / totalQuestions) * 100);

    const handleAnswerChange = <K extends keyof BasicProps["answers"]>(
        questionKey: K,
        value: BasicProps["answers"][K]
    ) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionKey]: value,
        }));
    };

    return (
        <div>
            <div>
                <h1>Basic Page</h1>
                
                <ButtonGroup>
                    {["Home", "Detailed"].map(page => (
                        <Button key={page} onClick={() => changePage(page)}>
                            {page} Page
                        </Button>
                    ))}
                </ButtonGroup>
    
                <Row>
                    <Col sm="4" />
                    <Col sm="4" ref={question1Ref}>
                        <hr style={{ border: "2px solid black", width: "100%" }} className="my-3" />
                    </Col>
                </Row>
    
                <h2 className="mb-3">Questions</h2>
                <div style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    backgroundColor: "#fff",
                    padding: "5px 20px",
                    marginBottom: "10px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                    <ProgressBar
                        now={progress} 
                        label={`${progress}%`} 
                        variant={progress === 100 ? "success" : "primary"}
                        style={{ height: "12px", width: "80%", margin: "10px auto", backgroundColor: "#e0e0e0" }} 
                    />
                </div>
    
                <Row>
                    <Col sm="8">
                        <Row className="mb-4">
                            <Col sm="2">
                                <HelpButton qnumber={0} />
                            </Col>
                            <Col sm="10">
                                <div id="question1">
                                    <h3 className="text-start">Question 1 - {QuestionList[0]}</h3>
                                </div>
                            </Col>
                        </Row>
                    
                        <Row className="mb-4">
                            <Col sm="1" />
                            {questionOptions.map(option => (
                                <Col key={option} sm="2" ref={question2Ref}>
                                    <Form.Check
                                        key={option}
                                        inline
                                        type="checkbox"
                                        label={option}
                                        value={option}
                                        checked={answers.question1.includes(option)}
                                        onChange={() => handleAnswerChange("question1", answers.question1.includes(option)
                                            ? answers.question1.filter(e => e !== option)
                                            : [...answers.question1, option]
                                        )}
                                    />
                                </Col>
                            ))}
                            <Col sm="2" />
                        </Row>
                        
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="2">
                                <HelpButton qnumber={1} />
                            </Col>
                            <Col sm="10">
                                <div id="question2">
                                    <h3 className="text-start">Question 2 - {QuestionList[1]}</h3>
                                </div>
                            </Col>
                        </Row>
    
                        <Form.Group as={Row} className="mb-4">
                            <Col sm="2" />
                            <Col sm="2">
                                <Form.Label>Rating:</Form.Label>
                            </Col>
                            <Col sm="5" ref={question3Ref}>
                                <Form.Range
                                    min="1"
                                    max="10"
                                    value={answers.question2}
                                    onChange={e => {
                                        if (!question2Changed) {
                                            setQuestion2Changed(true);
                                        }
                                        handleAnswerChange("question2", Number(e.target.value));
                                    }}
                                />
                            </Col>
                            <Col sm="2"><strong>{answers.question2}</strong></Col>
                            <Col sm="1" />
                        </Form.Group>
    
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="2">
                                <HelpButton qnumber={2} />
                            </Col>
                            <Col sm="10">
                                <div id="question3">
                                    <h3 className="text-start">Question 3 - {QuestionList[2]}</h3>
                                </div>
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="2" />
                            {questionOptions.map(option => (
                                <Col key={option} sm="2"  ref={question4Ref}>
                                    <Form.Check
                                        key={option}
                                        inline
                                        type="checkbox"
                                        label={option}
                                        value={option}
                                        checked={answers.question3.includes(option)}
                                        onChange={() => handleAnswerChange("question3", answers.question3.includes(option)
                                            ? answers.question3.filter(e => e !== option)
                                            : [...answers.question3, option]
                                        )}
                                    />
                                </Col>
                            ))}
                            <Col sm="2" />
                        </Row>
                        
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="2">
                                <HelpButton qnumber={3} />
                            </Col>
                            <Col sm="10">
                                <div id="question4">
                                    <h3 className="text-start">Question 4 - {QuestionList[3]}</h3>
                                </div>
                            </Col>
                        </Row>
    
                        <Form.Group as={Row} className="mb-4">
                            <Col sm="2" />
                            <Form.Label column sm="1">Rating:</Form.Label>
                            <Col sm="2"  ref={question5Ref}>
                                <Form.Control
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={answers.question4}
                                onChange={e => {
                                    if (!question4Changed) {
                                        setQuestion4Changed(true);
                                    }
                                    handleAnswerChange("question4", Number(e.target.value));
                                }}
                                />
                            </Col>
                            <Col sm="4" />
                        </Form.Group>
    
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="2">
                                <HelpButton qnumber={4} />
                            </Col>
                            <Col sm="10">
                                <div id="question5">
                                    <h3 className="text-start">Question 5 - {QuestionList[4]}</h3>
                                </div>
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="2" />
                            <Col sm="4" ref={question6Ref}> 
                                <Form.Group controlId="Question-5-Answers">
                                    <Form.Select value={answers.question5} onChange={e => handleAnswerChange("question5", e.target.value)}>
                                        {questionOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm="3" />
                        </Row>
    
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="2">
                                <HelpButton qnumber={5} />
                            </Col>
                            <Col sm="10">
                                <div id="question6">
                                    <h3 className="text-start">Question 6 - {QuestionList[5]}</h3>
                                </div>
                            </Col>
                        </Row>
                        
                        <Row className="mb-4">
                            <ButtonGroup>
                                <Col sm="1" />
                                {questionOptions.map(option => (
                                    <Col key={option} sm="2" ref={question7Ref}>
                                        <Button
                                            variant={answers.question6.includes(option) ? "primary" : "outline-primary"}
                                            onClick={() => handleAnswerChange("question6", answers.question6.includes(option)
                                                ? answers.question6.filter(e => e !== option)
                                                : [...answers.question6, option]
                                            )}
                                        >
                                            {option}
                                        </Button>
                                    </Col>
                                ))}
                                <Col sm="2" />
                            </ButtonGroup>
                        </Row>
                        
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="2">
                                <HelpButton qnumber={6} />
                            </Col>
                            <Col sm="10">
                                <div id="question7">
                                    <h3 className="text-start">Question 7 - {QuestionList[6]}</h3>
                                </div>
                            </Col>
                        </Row>
    
                        <Row className="mb-4">
                            <Col sm="1" />
                            {questionOptions.map(option => (
                                <Col key={option} sm="2">
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label={option}
                                        name="question7"
                                        value={option}
                                        checked={answers.question7 === option}
                                        onChange={() => handleAnswerChange("question7", option)}
                                    />
                                </Col>
                            ))}
                            <Col sm="2" />
                        </Row>
                    </Col>
                    <Col sm="3">
                        <img src={q1_picture} className="mb-5" alt="Working with Hands" width={450} height={200} />
                        <img src={q2_picture} className="mb-4" alt="Collaborating with Others" width={450} height={200} />
                        <img src={q3_picture} className="mb-4" alt="Risk or Secure" width={450} height={225} />
                        <img src={q4_picture} className="mb-5" alt="Variability in job" width={450} height={200} />
                        <img src={q5_picture} className="mb-5" alt="Leading Others" width={450} height={200} />
                        <img src={q6_picture} className="mb-5" alt="Religious Career" width={450} height={200} />
                        <img src={q7_picture} alt="Being Methodical" width={450} height={250} />
                    </Col>
                </Row>
    
                <Row>
                    <Col sm="8">
                        <Row className="mb-3">
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="mb-5" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
    
                <Row>
                    <Col sm="1" />
                    <Col sm="3">
                        <Button disabled = {progress!==100} onClick={() => changePage("Review")}>Review Answers</Button>
                    </Col>
                    <Col sm="2">
                        <Button disabled = {progress!==100} onClick={() => changePage("Answers")}>Get Answers</Button>
                    </Col>
                </Row>
    
                <Row>
                    <Col sm="8">
                        <Row className="my-5">
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="mb-5" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            

        </div>
    );
}