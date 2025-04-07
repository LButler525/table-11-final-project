import React, { useEffect } from "react";
import { Button, ButtonGroup, Form, Row, Col} from "react-bootstrap";

interface ReviewProps {
    changePage:(input: string) => void;
    answers: {
        question1: string[];
        question2: number;
        question3: string[];
        question4: number;
        question5: string;
        question6: string[];
        question7: string;
    };
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



export function Review({changePage, answers,}:ReviewProps) {    
    const jumpTo = (questionId: string) => {
        window.location.hash = `#${questionId}`;
        changePage('Basic');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
    <div>
                <h1>Review Page</h1>
                <ButtonGroup>
                    {["Home", "Basic", "Detailed"].map(page => (
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
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <h3 className="text-start">Question 1 - {QuestionList[0]}</h3>
                    </Col>
                    {questionOptions.map(option => (
                        <Col key = {option} sm = "1">
                            <Form.Check
                                key={option}
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers.question1.includes(option)}
                            />
                        </Col>
                        ))}
                </Row>  

                <Button onClick={() => jumpTo('question1')}>Go to Question 1</Button>     

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row>         
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <h3 className="text-start">Question 2 - {QuestionList[1]}</h3>
                    </Col>
                    <Col sm = "1">
                        <Form.Label>Rating:</Form.Label>
                    </Col>
                    <Col sm="3">
                        <Form.Range
                            min="1"
                            max="10"
                            value={answers.question2}
                        />
                    </Col>
                    <Col sm="1"><strong>{answers.question2}</strong></Col>
                </Row>
                <Button onClick={() => jumpTo('question2')}>Go to Question 2</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <h3 className="text-start">Question 3 - {QuestionList[2]}</h3>
                    </Col>
                    {questionOptions.map(option => (
                        <Col key = {option} sm = "1">
                        <Form.Check
                            key={option}
                            inline
                            type="checkbox"
                            label={option}
                            value={option}
                            checked={answers.question3.includes(option)}
                        />
                        </Col>
                    ))}
                </Row>
                <Button onClick={() => jumpTo('question3')}>Go to Question 3</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <h3 className="text-start">Question 4 - {QuestionList[3]}</h3>
                    </Col>
                    <Form.Label column sm="1">Rating:</Form.Label>
                    <Col sm="1">
                        <Form.Control
                            type="number"
                            min="1"
                            max="10"
                            value={answers.question4}
                        />
                    </Col>
                </Row>
                <Button onClick={() => jumpTo('question4')}>Go to Question 4</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <h3 className="text-start">Question 5 - {QuestionList[4]}</h3>
                    </Col>
                    <Col sm="4">
                        <Form.Group controlId="Question-5-Answers">
                                <Form.Select value={answers.question5}>
                                    {questionOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Button onClick={() => jumpTo('question5')}>Go to Question 5</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <h3 className="text-start">Question 6 - {QuestionList[5]}</h3>
                    </Col>
                        {questionOptions.map(option => (
                                    <Col key = {option} sm = "1">
                                        <Button
                                            variant={answers.question6.includes(option) ? "primary" : "outline-primary"}
                                        >
                                            {option}
                                        </Button>
                                    </Col>
                        ))}
                </Row>
                <Button onClick={() => jumpTo('question6')}>Go to Question 6</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
    
                <Row className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <h3 className="text-start">Question 7 - {QuestionList[6]}</h3>
                    </Col>
                    {questionOptions.map(option => (
                        <Col key = {option} sm = "1">
                        <Form.Check
                            inline
                            type="radio"
                            label={option}
                            name="question7"
                            value={option}
                            checked={answers.question7 === option}
                        />
                        </Col>
                    ))}
                </Row>
                <Button onClick={() => jumpTo('question7')}>Go to Question 7</Button>
    
                <Row>
                    <Col sm = "1" />
                    <Col sm = "10">
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                </Row>
    
                <Row>
                    <Col sm = "3" />
                    <Col sm = "3">
                        <Button onClick={() => {changePage("Basic"); jumpTo('')}}>Return to Basic Quiz</Button>
                    </Col>
                    <Col sm = "2">
                        <Button onClick={() => changePage("Answers")}>Get Answers</Button>
                    </Col>
                </Row>
    
                <Row>
                    <Col sm = "1" />
                    <Col sm = "10">
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                </Row>
    
            </div>
        );
}