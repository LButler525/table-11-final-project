import React from "react";
import { useState } from "react";
import { Button, OverlayTrigger, Row, Col, Tooltip } from "react-bootstrap";
import { Form } from "react-bootstrap";


interface DetailedProps {
    changePage:(input: string) => void;
}

const QuestionList = [
     "Detailed Question 1",
     "Detailed Question 2",
     "Detailed Question 3",
     "Detailed Question 4",
     "Detailed Question 5",
     "Detailed Question 6",
     "Detailed Question 7"]

const helpList = [
    "Detailed help pop-up for question 1", 
    "Detailed help pop-up for question 2", 
    "Detailed help pop-up for question 3", 
    "Detailed help pop-up for question 4", 
    "Detailed help pop-up for question 5", 
    "Detailed help pop-up for question 6", 
    "Detailed help pop-up for question 7"]

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