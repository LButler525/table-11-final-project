import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";


interface BasicProps {
    changePage:(input: string) => void;
}




export function Basic({changePage}:BasicProps) {   
    const [question1, setQuestion1] = useState<string[]>([])
    const [question2, setQuestion2] = useState<number>(50);

    function updateAnswer1(event: React.ChangeEvent<HTMLInputElement>) {
        const answer = event.target.value;
        // Check if the emotion is already present
        if (question1.includes(answer)) {
            // Remove the given value
            setQuestion1(question1.filter((e) => e !== answer));
        } else {
            // Append the given value
            setQuestion1([...question1, answer]);
        }
    }

    return(
        <div>
            <h1>Basic Page</h1>
            <Button onClick={() => changePage("Home")}>Home Page</Button>
            <Button onClick={() => changePage("Detailed")}>Detailed Page</Button>
            <Button onClick={() => changePage("Review")}>Review Page</Button>
            <h2>Questions</h2>
            <h3>Question 1 - TEXT</h3>
            <Form.Check
                inline
                type="checkbox"
                id="question1-check-strongly-agree"
                label="Strongly Agree"
                name="question1"
                value="Strongly Agree"
                checked={question1.includes("Strongly Agree")}
                onChange={updateAnswer1}
            />
            <Form.Check
                inline
                type="checkbox"
                id="question1-check-agree"
                label="Agree"
                name="question1"
                value="Agree"
                checked={question1.includes("Agree")}
                onChange={updateAnswer1}
            />
            <Form.Check
                inline
                type="checkbox"
                id="question1-check-neither-agree-nor-disagree"
                label="Neither Agree nor Disagree"
                name="question1"
                value="Neither Agree nor Disagree"
                checked={question1.includes("Neither Agree nor Disagree")}
                onChange={updateAnswer1}
            />
            <Form.Check
                inline
                type="checkbox"
                id="question1-check-disagree"
                label="Disagree"
                name="question1"
                value="Disagree"
                checked={question1.includes("Disagree")}
                onChange={updateAnswer1}
            />
            <Form.Check
                inline
                type="checkbox"
                id="question1-check-strongly-Disagree"
                label="Strongly Disagree"
                name="question1"
                value="Strongly Disagree"
                checked={question1.includes("Strongly Disagree")}
                onChange={updateAnswer1}
            />
            <h3>Question 2 - TEXT</h3>
            <Form>
                <Form.Group as = {Row}>
                    <Form.Label column sm = "2">
                        Rating : 
                    </Form.Label>
                    <Col sm = "8">
                        <Form.Range
                            min = "0"
                            max = "100"
                            value = {question2}
                            onChange={(e) => setQuestion2(Number(e.target.value))}
                            />
                    </Col>
                    <Col sm = "2">
                        <strong>{question2}</strong>
                    </Col>
                </Form.Group>
            </Form>



        </div>
    )
}