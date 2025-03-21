import React, { useState } from "react";
import { Button, ButtonGroup, Form, Row, Col, Badge } from "react-bootstrap";

interface BasicProps {
    changePage: (input: string) => void;
}

const options = ["Strongly Agree", "Agree", "Neither Agree nor Disagree", "Disagree", "Strongly Disagree"];
const question3Options = ["Option1", "Option2", "Option3", "Option4", "Option5"];

export function Basic({ changePage }: BasicProps) {
    const [question1, setQuestion1] = useState<string[]>([]);
    const [question2, setQuestion2] = useState<number>(50);
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
                {["Home", "Detailed", "Review"].map(page => (
                    <Button key={page} onClick={() => changePage(page)}>
                        {page} Page
                    </Button>
                ))}
            </ButtonGroup>

            <h2>Questions</h2>

            <h3>Question 1</h3>
            {options.map(option => (
                <Form.Check
                    key={option}
                    inline
                    type="checkbox"
                    label={option}
                    value={option}
                    checked={question1.includes(option)}
                    onChange={() => toggleSelection(option, question1, setQuestion1)}
                />
            ))}

            <h3>Question 2</h3>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Rating:</Form.Label>
                <Col sm="8">
                    <Form.Range
                        min="0"
                        max="100"
                        value={question2}
                        onChange={e => setQuestion2(Number(e.target.value))}
                    />
                </Col>
                <Col sm="2"><strong>{question2}</strong></Col>
            </Form.Group>

            <h3>Question 3</h3>
            {question3Options.map(option => (
                <Form.Check
                    key={option}
                    inline
                    type="switch"
                    label={option}
                    value={option}
                    checked={question3.includes(option)}
                    onChange={() => toggleSelection(option, question3, setQuestion3)}
                />
            ))}

            <h3>Question 4</h3>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Rating:</Form.Label>
                <Col sm="2">
                    <Form.Control
                        type="number"
                        min="0"
                        max="10"
                        value={question4}
                        onChange={e => setQuestion4(Number(e.target.value))}
                    />
                </Col>
            </Form.Group>

            <h3>Question 5</h3>
            <Form.Group controlId="Question-5-Answers">
                <Col sm="4">
                    <Form.Select value={question5} onChange={e => setQuestion5(e.target.value)}>
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Form.Group>

            <h3>Question 6</h3>
            <ButtonGroup>
                {options.map(option => (
                    <Button
                        key={option}
                        variant={question6.includes(option) ? "primary" : "outline-primary"}
                        onClick={() => toggleSelection(option, question6, setQuestion6)}
                    >
                        {option}
                    </Button>
                ))}
            </ButtonGroup>

            <h3>Question 7</h3>
            {question3Options.map(option => (
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
            ))}
        </div>
    );
}