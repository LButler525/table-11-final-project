import React, { useState } from "react";
import { Button, ButtonGroup, Form, Row, Col, OverlayTrigger, Tooltip} from "react-bootstrap";
import q1_picture from '../Images/basic-q1.jpg';
import q2_picture from '../Images/basic-q2.jpg';
import q3_picture from '../Images/basic-q3.jpg';
import q4_picture from '../Images/basic-q4.png';
import q5_picture from '../Images/basic-q5.png';
import q6_picture from '../Images/basic-q6.jpg';
import q7_picture from '../Images/basic-q7.png';

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
        placement="right" // Position of the tooltip (top, bottom, left, right)
        overlay={<Tooltip id={`tooltip-${qnumber}`}>{helpList[qnumber]}</Tooltip>}
      >
        <Button variant="info">?</Button>
      </OverlayTrigger>
    );
  }

export function Basic({ changePage, answers, setAnswers }: BasicProps) {
    const [question1, setQuestion1] = useState<string[]>([]);
    const [question2, setQuestion2] = useState<number>(5);
    const [question3, setQuestion3] = useState<string[]>([]);
    const [question4, setQuestion4] = useState<number>(5);
    const [question5, setQuestion5] = useState<string>("");
    const [question6, setQuestion6] = useState<string[]>([]);
    const [question7, setQuestion7] = useState<string>("");

    const toggleSelection = (value: string, state: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        setter(state.includes(value) ? state.filter(e => e !== value) : [...state, value]);
    };

    return (
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
                <Col sm = "4" />
                <Col sm = "4">
                    <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                </Col>
            </Row>

            
            
            <h2 className="mb-5">Questions</h2>

            <Row  className="mb-4">
                <Col sm = "1">
                    <HelpButton qnumber = {0} />
                </Col>
                <Col sm = "6">
                    <h3 className="text-start">Question 1 - {QuestionList[0]}</h3>
                </Col>
            </Row>
            
            <Row  className="mb-4">
                <Col sm = "1">
                </Col>
                {questionOptions.map(option => (
                    <Col key = {option} sm = "1">
                        <Form.Check
                            key={option}
                            inline
                            type="checkbox"
                            label={option}
                            value={option}
                            checked={question1.includes(option)}
                            onChange={() => toggleSelection(option, question1, setQuestion1)}
                        />
                    </Col>
                    ))}
                <Col sm = "2">
                </Col>
                <Col sm = "2">
                    <img src={q1_picture} className="Working with Hands Picture" alt="Working with Hands" width={450} height={225}/>
                </Col>
            </Row>
            
            <Row>
                <Col sm = "8">
                    <hr style = {{border : "4px solid black", width: "100%"}} className="my-5" />
                </Col>
            </Row>
            

            <Row  className="mb-4">
                <Col sm = "1">
                    <HelpButton qnumber = {1} />
                </Col>
                <Col sm = "6">
                    <h3 className="text-start">Question 2 - {QuestionList[1]}</h3>
                </Col>
            </Row>

            <Form.Group as={Row}  className="mb-4">
                <Col sm = "1">
                </Col>
                <Col sm = "1">
                    <Form.Label>Rating:</Form.Label>
                </Col>
                <Col sm="3">
                    <Form.Range
                        min="1"
                        max="10"
                        value={question2}
                        onChange={e => setQuestion2(Number(e.target.value))}
                    />
                </Col>
                <Col sm="2"><strong>{question2}</strong></Col>
                <Col sm = "1">
                </Col>
                <Col sm = "2">
                    <img src={q2_picture} className="Collaborating Picture" alt="Collaborating with Others" width={450} height={225}/>
                </Col>
            </Form.Group>

            <Row>
                <Col sm = "8">
                    <hr style = {{border : "4px solid black", width: "100%"}} className="my-5" />
                </Col>
            </Row>

            <Row  className="mb-4">
                <Col sm = "1">
                <HelpButton qnumber = {2} />
                </Col>
                <Col sm = "6">
                    <h3 className="text-start">Question 3 - {QuestionList[2]}</h3>
                </Col>
            </Row>

            <Row  className="mb-4">
                <Col sm = "1">
                </Col>
                {questionOptions.map(option => (
                    <Col key = {option} sm = "1">
                    <Form.Check
                        key={option}
                        inline
                        type="checkbox"
                        label={option}
                        value={option}
                        checked={question3.includes(option)}
                        onChange={() => toggleSelection(option, question3, setQuestion3)}
                    />
                    </Col>
                ))}
                <Col sm = "2">
                </Col>
                <Col sm = "2">
                    <img src={q3_picture} className="Risk Picture" alt="Risk or Secure" width={450} height={225}/>
                </Col>
            </Row>
            
            <Row>
                <Col sm = "8">
                    <hr style = {{border : "4px solid black", width: "100%"}} className="my-5" />
                </Col>
            </Row>

            <Row  className="mb-4">
                <Col sm = "1">
                    <HelpButton qnumber = {3} />
                </Col>
                <Col sm = "6">
                    <h3 className="text-start">Question 4 - {QuestionList[3]}</h3>
                </Col>
            </Row>

            <Form.Group as={Row} className="mb-4">
                <Col sm = "1">
                </Col>
                <Form.Label column sm="2">Rating:</Form.Label>
                <Col sm="1">
                    <Form.Control
                        type="number"
                        min="1"
                        max="10"
                        value={question4}
                        onChange={e => setQuestion4(Number(e.target.value))}
                    />
                </Col>
                <Col sm = "4">
                </Col>
                <Col sm = "2">
                    <img src={q4_picture} className="Variability Picture" alt="Variability in job" width={450} height={225}/>
                </Col>
            </Form.Group>

            <Row>
                <Col sm = "8">
                    <hr style = {{border : "4px solid black", width: "100%"}} className="my-5" />
                </Col>
            </Row>

            <Row  className="mb-4">
                <Col sm = "1">
                    <HelpButton qnumber = {4} />
                </Col>
                <Col sm = "6">
                    <h3 className="text-start">Question 5 - {QuestionList[4]}</h3>
                </Col>
            </Row>

            <Row  className="mb-4">
                <Col sm = "1" />
                <Col sm="4">
                    <Form.Group controlId="Question-5-Answers">
                        
                            <Form.Select value={question5} onChange={e => setQuestion5(e.target.value)}>
                                {questionOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </Form.Select>
                    </Form.Group>
                </Col>
                <Col sm = "3" />
                <Col sm = "2">
                    <img src={q5_picture} className="Leading others Picture" alt="Leading Others" width={450} height={225}/>
                </Col>
            </Row>

            <Row>
                <Col sm = "8">
                    <hr style = {{border : "4px solid black", width: "100%"}} className="my-5" />
                </Col>
            </Row>

            <Row  className="mb-4">
                <Col sm = "1">
                    <HelpButton qnumber = {5} />
                </Col>
                <Col sm = "6">
                    <h3 className="text-start">Question 6 - {QuestionList[5]}</h3>
                </Col>
            </Row>
            
            <Row className="mb-4">
                <ButtonGroup>
                    <Col sm = "1" />

                    {questionOptions.map(option => (
                        <Col key = {option} sm = "1">
                        <Button
                            key={option}
                            variant={question6.includes(option) ? "primary" : "outline-primary"}
                            onClick={() => toggleSelection(option, question6, setQuestion6)}
                        >
                            {option}
                        </Button>
                        </Col>
                    ))}
                    <Col sm = "2" />
                    <Col sm = "2">
                    <img src={q6_picture} className="Religious Career Picture" alt="Religious Career" width={450} height={225}/>
                    </Col>
                </ButtonGroup>
                
            </Row>
            
            <Row>
                <Col sm = "8">
                    <hr style = {{border : "4px solid black", width: "100%"}} className="my-5" />
                </Col>
            </Row>

            <Row className="mb-4">
                <Col sm = "1">
                    <HelpButton qnumber = {6} />
                </Col>
                <Col sm = "6">
                    <h3 className="text-start">Question 7 - {QuestionList[6]}</h3>
                </Col>
            </Row>

            <Row  className="mb-4">
                <Col sm = "1" />

                {questionOptions.map(option => (
                    <Col key = {option} sm = "1">
                    <Form.Check
                        key={option}
                        inline
                        type="radio"
                        label={option}
                        name="question7"
                        value={option}
                        checked={question7 === option}
                        onChange={() => setQuestion7(option)}
                    />
                    </Col>
                ))}
                <Col sm = "2" />
                <Col sm = "2">
                    <img src={q7_picture} className="Methodical Picture" alt="Being Methodical" width={450} height={225}/>
                </Col>
            </Row>

            <Row>
                <Col sm = "8">
                    <hr style = {{border : "4px solid black", width: "100%"}} className="my-5" />
                </Col>
            </Row>

            <Row>
                <Col sm = "1" />
                <Col sm = "3">
                    <Button onClick={() => changePage("Review")}>Review Answers</Button>
                </Col>
                <Col sm = "2">
                    <Button onClick={() => changePage("Answers")}>Get Answers</Button>
                </Col>
            </Row>

            <Row>
                <Col sm = "8">
                    <hr style = {{border : "4px solid black", width: "100%"}} className="my-5" />
                </Col>
            </Row>

        </div>
    );
}