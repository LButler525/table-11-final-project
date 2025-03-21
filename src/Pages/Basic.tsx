import React, { useState } from "react";
import { Button, ButtonGroup, Form, Row, Col } from "react-bootstrap";


interface BasicProps {
    changePage:(input: string) => void;
}




export function Basic({changePage}:BasicProps) {   
    const [question1, setQuestion1] = useState<string[]>([])
    const [question2, setQuestion2] = useState<number>(50);
    const [question3, setQuestion3] = useState<string[]>([])
    const [question4, setQuestion4] = useState<number>(5);
    const [question5, setQuestion5] = useState<string>("")
    const [question6, setQuestion6] = useState<string[]>([])
    const [question7, setQuestion7] = useState<string>("")

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

    function updateAnswer3(event: React.ChangeEvent<HTMLInputElement>) {
        const answer = event.target.value;
        // Check if the emotion is already present
        if (question3.includes(answer)) {
            // Remove the given value
            setQuestion3(question3.filter((e) => e !== answer));
        } else {
            // Append the given value
            setQuestion3([...question3, answer]);
        }
    }

    function updateAnswer5(event: React.ChangeEvent<HTMLSelectElement>) {
        setQuestion5(event.target.value);
    }

    function updateAnswer6(answer : string) {
        setQuestion6(prev => prev.includes(answer) 
        ? prev.filter(e => e !== answer)  // Remove if already selected
        : [...prev, answer]  // Add if not selected
    );
    }

    function updateAnswer7(event: React.ChangeEvent<HTMLInputElement>) {
        setQuestion7(event.target.value);
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
            <h3>Question 3 - TEXT</h3>
            <Form.Check
                inline
                type="switch"
                id="question3-option1"
                label="Option1"
                name="question3"
                value="Option1"
                checked={question3.includes("Option1")}
                onChange={updateAnswer3}
            />
            <Form.Check
                inline
                type="switch"
                id="question3-option2"
                label="Option2"
                name="question3"
                value="Option2"
                checked={question3.includes("Option2")}
                onChange={updateAnswer3}
            />
            <Form.Check
                inline
                type="switch"
                id="question3-option3"
                label="Option3"
                name="question3"
                value="Option3"
                checked={question3.includes("Option3")}
                onChange={updateAnswer3}
            />
            <Form.Check
                inline
                type="switch"
                id="question3-option4"
                label="Option4"
                name="question3"
                value="Option4"
                checked={question3.includes("Option4")}
                onChange={updateAnswer3}
            />
            <Form.Check
                inline
                type="switch"
                id="question3-option5"
                label="Option5"
                name="question3"
                value="Option5"
                checked={question3.includes("Option5")}
                onChange={updateAnswer3}
            />
            <h3>Question 4 - TEXT</h3>
            <Form>
                <Form.Group as = {Row}>
                    <Form.Label column sm = "2">
                        Rating : 
                    </Form.Label>
                    <Col sm = "2">
                        <Form.Control
                            type = "number"
                            min = "0"
                            max = "10"
                            value = {question4}
                            onChange={(e) => setQuestion4(Number(e.target.value))}
                        />
                    </Col>
                </Form.Group>
            </Form>
            <Form.Group controlId="Question-5-Answers">
                <Form.Label>Question 5 - TEXT</Form.Label>
                <Col sm = "4">
                    <Form.Select value = {question5} onChange = {updateAnswer5}>
                        <option value = "Strongly Agree">Strongly Agree</option>
                        <option value = "Agree">Agree</option>
                        <option value = "Neither Agree nor Disagree">Neither Agree nor Disagree</option>
                        <option value = "Disagree">Disagree</option>
                        <option value = "Strongly Disagree">Disagree</option>
                    </Form.Select>
                </Col> 
            </Form.Group>
            <h3>Question 6 - TEXT</h3>
            <ButtonGroup>
                <Button
                    variant = {question6.includes("Strongly Agree") ? "primary" : "outline-primary"}
                    onClick = {() => updateAnswer6("Strongly Agree")}
                >
                    Strongly Agree
                </Button>
                <Button
                    variant = {question6.includes("Agree") ? "primary" : "outline-primary"}
                    onClick = {() => updateAnswer6("Agree")}
                >
                    Agree
                </Button>
                <Button
                    variant = {question6.includes("Neither Agree nor Disagree") ? "primary" : "outline-primary"}
                    onClick = {() => updateAnswer6("Neither Agree nor Disagree")}
                >
                    Neither Agree nor Disagree
                </Button>
                <Button
                    variant = {question6.includes("Disagree") ? "primary" : "outline-primary"}
                    onClick = {() => updateAnswer6("Disagree")}
                >
                    Disagree
                </Button>
                <Button
                    variant = {question6.includes("Strongly Disagree") ? "primary" : "outline-primary"}
                    onClick = {() => updateAnswer6("Strongly Disagree")}
                >
                    Strongly Disagree
                </Button>
            </ButtonGroup>
            <h3>Question 7 - TEXT</h3>
            <Form.Check
                inline
                type="radio"
                id="question7-option1"
                label="Option1"
                name="question7"
                value="Option1"
                checked={question7.includes("Option1")}
                onChange={updateAnswer7}
            />
            <Form.Check
                inline
                type="radio"
                id="question7-option2"
                label="Option2"
                name="question7"
                value="Option2"
                checked={question7.includes("Option2")}
                onChange={updateAnswer7}
            />
            <Form.Check
                inline
                type="radio"
                id="question7-option3"
                label="Option3"
                name="question7"
                value="Option3"
                checked={question7.includes("Option3")}
                onChange={updateAnswer7}
            />
            <Form.Check
                inline
                type="radio"
                id="question7-option4"
                label="Option4"
                name="question7"
                value="Option4"
                checked={question7.includes("Option4")}
                onChange={updateAnswer7}
            />
            <Form.Check
                inline
                type="radio"
                id="question7-option5"
                label="Option5"
                name="question7"
                value="Option5"
                checked={question7.includes("Option5")}
                onChange={updateAnswer7}
            />


        </div>
    )
}