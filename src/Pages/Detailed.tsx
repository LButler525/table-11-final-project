import React from "react";
import { useState } from "react";
import { Button, OverlayTrigger, Row, Col, Tooltip, ProgressBar } from "react-bootstrap";
import { Form } from "react-bootstrap";


interface DetailedProps {
    changePage:(input: string) => void;
}

const QuestionList = [
     "What is your ideal work environment?",
     "Where do you see yourself in 5 years?",
     "What's the most difficult problem you've ever solved?",
     "In what industries have you worked?",
     "How do you work under pressure?",
     "What are your biggest strengths?",
     "What motivates you?"]

const helpList = [
    "Tell us a little bit about the work enviroment that you think would work best for you. Feel free to tell us about past work enviroments or hypotheticals you've heard.", 
    "THis question focuses on where you see yourself in the coming years. We want to know generally what your goals are and how different careers fit those goals.", 
    "With this question we want to know how you react in different situations one of the most telling experiences is stress and knowing how you solve problems is important to different industries.", 
    "This question focuses on your past work expereience (if any) to see how you feel about jobs you may have already held so we dont suggest them again.", 
    "This question asks you to expand upon how you work under pressure to see what what environments would be good. i.e a fast paced kitchen or a slower office position.", 
    "We want to know where you thrive. THis question focuses on the aspects of your personality that shine the brightest.", 
    "This is a relativley basic question with a crazy answer. motivations drives all."]

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

export function Detailed({changePage}:DetailedProps) {
    const [question1, setQuestion1] = useState<string>("Enter your response here");
    const [question2, setQuestion2] = useState<string>("Enter your response here");
    const [question3, setQuestion3] = useState<string>("Enter your response here");
    const [question4, setQuestion4] = useState<string>("Enter your response here");
    const [question5, setQuestion5] = useState<string>("Enter your response here");
    const [question6, setQuestion6] = useState<string>("Enter your response here");
    const [question7, setQuestion7] = useState<string>("Enter your response here");

    // Calculate detailed quiz progress
    const totalQuestions = QuestionList.length;
    const answeredCount =
     [question1, question2, question3, question4, question5, question6, question7]
       .filter(ans => ans.trim() !== "" && ans !== "Enter your response here")
       .length;
    const progress = Math.round((answeredCount / totalQuestions) * 100);

    function updateQ1(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setQuestion1(event.target.value);
    }
    function updateQ2(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setQuestion2(event.target.value);
    }
    function updateQ3(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setQuestion3(event.target.value);
    }
    function updateQ4(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setQuestion4(event.target.value);
    }
    function updateQ5(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setQuestion5(event.target.value);
    }
    function updateQ6(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setQuestion6(event.target.value);
    }
    function updateQ7(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setQuestion7(event.target.value);
    }

    return(
        <div>
            <h1>Detailed Page</h1>

            <Button onClick={() => changePage("Home")}>Home Page</Button>
            <Button onClick={() => changePage("Basic")}>Basic Page</Button>
            
            <Row>
                <Col sm = "4" />
                <Col sm = "4">
                <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                </Col>
            </Row>

            <h2 style={{textAlign: "center"}}>Questions</h2>
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
       style={{
         height: "11px",
         width: "80%",
         margin: "10px auto",
         backgroundColor: "#e0e0e0"
       }}
     />
   </div>

            <Row>
                <Col sm = "1">
                    <HelpButton qnumber = {0} />
                </Col>
                <Col sm = "6">
                    <h3 style={{textAlign: "left"}}>Question 1 - {QuestionList[0]}</h3>
                </Col>
            </Row>

            <Row>
                <Col sm = "1">
                </Col>
                <Form.Group controlId="formMovieName">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={question1}
                        onChange={updateQ1} />
                </Form.Group>
            </Row>

            <Row>
                <Col sm = "1">
                    <HelpButton qnumber = {1} />
                </Col>
                <Col sm = "6">
                    <h3 style={{textAlign: "left"}}>Question 2 - {QuestionList[1]}</h3>
                </Col>
            </Row>

            <Row>
                <Col sm = "1">
                </Col>
                <Form.Group controlId="formMovieName">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={question2}
                        onChange={updateQ2} />
                </Form.Group>
            </Row>

            <Row>
                <Col sm = "1">
                    <HelpButton qnumber = {2} />
                </Col>
                <Col sm = "6">
                    <h3 style={{textAlign: "left"}}>Question 3 - {QuestionList[2]}</h3>
                </Col>
            </Row>

            <Row>
                <Col sm = "1">
                </Col>
                <Form.Group controlId="formMovieName">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={question3}
                        onChange={updateQ3} />
                </Form.Group>


            </Row>

            <Row>
                <Col sm = "1">
                    <HelpButton qnumber = {3} />
                </Col>
                <Col sm = "6">
                    <h3 style={{textAlign: "left"}}>Question 4 - {QuestionList[3]}</h3>
                </Col>
            </Row>

            <Row>
                <Col sm = "1">
                </Col>
                <Form.Group controlId="formMovieName">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={question4}
                        onChange={updateQ4} />
                </Form.Group>
            </Row>

            <Row>
                <Col sm = "1">
                    <HelpButton qnumber = {4} />
                </Col>
                <Col sm = "6">
                    <h3 style={{textAlign: "left"}}>Question 5 - {QuestionList[4]}</h3>
                </Col>
            </Row>

            <Row>
                <Col sm = "1">
                </Col>
                <Form.Group controlId="formMovieName">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={question5}
                        onChange={updateQ5} />
                </Form.Group>
            </Row>

            <Row>
                <Col sm = "1">
                    <HelpButton qnumber = {5} />
                </Col>
                <Col sm = "6">
                    <h3 style={{textAlign: "left"}}>Question 6 - {QuestionList[5]}</h3>
                </Col>
            </Row>

            <Row>
                <Col sm = "1">
                </Col>
                <Form.Group controlId="formMovieName">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={question6}
                        onChange={updateQ6} />
                </Form.Group>
            </Row>

            <Row>
                <Col sm = "1">
                    <HelpButton qnumber = {6} />
                </Col>
                <Col sm = "6">
                    <h3 style={{textAlign: "left"}}>Question 7 - {QuestionList[6]}</h3>
                </Col>
            </Row>

            <Row>
                <Col sm = "1">
                </Col>
                <Form.Group controlId="formMovieName">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={question7}
                        onChange={updateQ7} />
                </Form.Group>
            </Row>
        </div>
    )
}