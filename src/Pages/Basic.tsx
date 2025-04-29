import React from "react";
import { Button, ButtonGroup, Form, Row, Col, OverlayTrigger, Tooltip, ProgressBar, ListGroup } from "react-bootstrap";
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
    // answers: {
    //     question1: string[];
    //     question2: number;
    //     question3: string[];
    //     question4: number;
    //     question5: string;
    //     question6: string[];
    //     question7: string;
    // };
    answers2: {
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
    };
    // setAnswers: React.Dispatch<React.SetStateAction<BasicProps["answers"]>>;
    setAnswers2: React.Dispatch<React.SetStateAction<BasicProps["answers2"]>>;
}

// const QuestionList = 
// ["I like working and creating things with my hands",
//      "On a scale to 1-10, how much do you enjoy collaborating with others (10 being the desire to always collaborate)",
//      "I want a job that is extremely secure with no risk",
//      "On a scale of 1-10, how much variability do you want in your day-to-day work (10 being extreme variability)",
//      "I like to oversee other people and manage them",
//      "I want religion to affect my carrer",
//      "I prefer to be methodical when making decisions and take my time"]

const QuestionList2 = 
["Which of the following career fields are you most interested in? (Select all that apply)",
    "How do you prefer to work? (Select all that apply)",
    "What drives you most in a career? (Select all that apply)",
    "How comfortable are you with taking risks in your career from 1-10? (With 10 being very comfortable with risk)",
    "How important is job stability to you from 1-10? (With 10 being extremely important)",
    "Which skills do you enjoy using most? (Select all that apply)",
    "How do you like to solve problems?",
    "How confident are you in your current professional skill set from 1-10? (With 10 being extremely confident)",
    "Which types of tasks do you find most energizing? (Select all that apply)",
    "How much do you value continuous learning in your career from 1-10? (With 10 being extremely important)",
    "Which of the following work environments would you prefer? (Select all that apply)",
    "How much structure do you prefer in your day-to-day work?",
    "How important is it for your work to align with your personal values from 1-10? (With 10 being extremely important)",
    "What kind of work schedules do you see yourself thriving in? (Select all that apply)",
    "Which aspects of company culture matter most to you? (Select all that apply)",
    "What's your biggest career goal right now?",
    "How motivated do you feel about your current career path from 1-10? (With 10 being extremely motivated)",
    "Which of the following describes your long-term vision best? (Select all that apply)",
    "If money wasn’t an issue, what kind of work would you do?",
    "What’s your biggest fear when it comes to your career? (Select all that apply)"]

const questionOptions2 = [
    ["Healthcare",
        "Technology",
        "Business / Entrepreneurship",
        "Creative Arts / Design",
        "Education / Training"],
    ["Independently",
        "On a small team",
        "Leading others",
        "Supporting a larger mission",
        "With lots of variety"],
    ["Purpose & meaning",
        "Financial reward",
        "Creativity",
        "Growth & learning",
        "Work-life balance"],
    [],
    [],
    ["Problem solving",
        "Communication",
        "Creativity",
        "Leadership",
        "Technical know-how"],
    ["Logically and analytically",
        "Collaboratively with others",        
        "Creatively with new ideas",
        "Through hands-on trial and error"],
    [],
    ["Planning and organizing",
        "Brainstorming and creating",
        "Building or fixing things",
        "Teaching or mentoring",
        "Negotiating or selling"],
    [],
    ["Remote / Work from home",
        "In an office",
        "Outdoors / On-site",
        "Traveling frequently",
        "Hybrid / Flexible"],
    ["Very structured (clear routines, deadlines)",
        "Somewhat structured",
        "Flexible and dynamic",
        "Completely unstructured"],
    [],
    ["Standard 9–5",
        "Flexible hours",
        "Part-time",
        "Project-based / Freelance",
        "Night shifts / Unconventional"],
    ["Diversity and inclusion",
        "Innovation and creativity",
        "Support and mentorship",
        "Transparency and communication",
        "Fun and social connection"],
    ["Finding the right path",
        "Getting promoted",
        "Starting a business",
        "Making a career change",
        "Developing new skills"],
    [],
    ["Becoming an expert in my field",
        "Leading others / Executive role",
        "Doing meaningful community work",
        "Financial independence / Wealth building",
        "Balancing work and personal life"],
    ["Volunteer or nonprofit work",
        "Travel and explore new industries",
        "Start my own business",
        "Mentor or teach others",
        "Continue my current work"],
    ["Making the wrong choice",
        "Being unfulfilled or bored",
        "Financial instability",
        "Burnout or poor work-life balance",
        "Getting stuck and not growing"
        ]
]
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

export function summarizeBasicResponse(answers: BasicProps["answers2"]) {
    const response = `
        The user has answered as follows:

        Question 1 - ${QuestionList2[0]}:
        ${answers.question1.join(", ")}

        Question 2 - ${QuestionList2[1]}:
        ${answers.question2.join(", ")}

        Question 3 - ${QuestionList2[2]}:
        ${answers.question3.join(", ")}

        Question 4 - ${QuestionList2[3]}:
        ${answers.question4}

        Question 5 - ${QuestionList2[4]}:
        ${answers.question5}

        Question 6 - ${QuestionList2[5]}:
        ${answers.question6.join(", ")}

        Question 7 - ${QuestionList2[6]}:
        ${answers.question7.join(", ")}

        Question 8 - ${QuestionList2[7]}:
        ${answers.question8}

        Question 9 - ${QuestionList2[8]}:
        ${answers.question9.join(", ")}

        Question 10 - ${QuestionList2[9]}:
        ${answers.question10}

        Question 11 - ${QuestionList2[10]}:
        ${answers.question11.join(", ")}

        Question 12 - ${QuestionList2[11]}:
        ${answers.question12.join(", ")}

        Question 13 - ${QuestionList2[12]}:
        ${answers.question13}

        Question 14 - ${QuestionList2[13]}:
        ${answers.question14.join(", ")}

        Question 15 - ${QuestionList2[14]}:
        ${answers.question15.join(", ")}

        Question 16 - ${QuestionList2[15]}:
        ${answers.question16.join(", ")}

        Question 17 - ${QuestionList2[16]}:
        ${answers.question17}

        Question 18 - ${QuestionList2[17]}:
        ${answers.question18.join(", ")}

        Question 19 - ${QuestionList2[18]}:
        ${answers.question19.join(", ")}

        Question 20 - ${QuestionList2[19]}:
        ${answers.question20.join(", ")}
        `;
    console.log(response)
    return response
}

export function Basic({ changePage, answers2, setAnswers2 }: BasicProps) {

    const question1Ref = useRef<HTMLDivElement>(null);
    const question2Ref = useRef<HTMLDivElement>(null);
    const question3Ref = useRef<HTMLDivElement>(null);
    const question4Ref = useRef<HTMLDivElement>(null);
    const question5Ref = useRef<HTMLDivElement>(null);
    const question6Ref = useRef<HTMLDivElement>(null);
    const question7Ref = useRef<HTMLDivElement>(null);
    const question8Ref = useRef<HTMLDivElement>(null);
    const question9Ref = useRef<HTMLDivElement>(null);
    const question10Ref = useRef<HTMLDivElement>(null);
    const question11Ref = useRef<HTMLDivElement>(null);
    const question12Ref = useRef<HTMLDivElement>(null);
    const question13Ref = useRef<HTMLDivElement>(null);
    const question14Ref = useRef<HTMLDivElement>(null);
    const question15Ref = useRef<HTMLDivElement>(null);
    const question16Ref = useRef<HTMLDivElement>(null);
    const question17Ref = useRef<HTMLDivElement>(null);
    const question18Ref = useRef<HTMLDivElement>(null);
    const question19Ref = useRef<HTMLDivElement>(null);
    const question20Ref = useRef<HTMLDivElement>(null);

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
        } if (window.location.hash === '#question8') {
            question8Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question9') {
            question9Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question10') {
            question10Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question11') {
            question11Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question12') {
            question12Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question13') {
            question13Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question14') {
            question14Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question15') {
            question15Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question16') {
            question16Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question17') {
            question17Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question18') {
            question18Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question19') {
            question19Ref.current?.scrollIntoView({ behavior: 'smooth' });
        } if (window.location.hash === '#question20') {
            question20Ref.current?.scrollIntoView({ behavior: 'smooth' });
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
    const totalQuestions = 20;
    const answeredCount =
    (answers2.question1 && answers2.question1.length > 0 ? 1 : 0) +
    (answers2.question2 && answers2.question2.length > 0 ? 1 : 0) +
    (answers2.question3 && answers2.question3.length > 0 ? 1 : 0) +
    (answers2.question4 !== 5 ? 1 : 0) +
    (answers2.question5 !== 5 ? 1 : 0) +
    (answers2.question6 && answers2.question6.length > 0 ? 1 : 0) +
    (answers2.question7 && answers2.question7.length > 0 ? 1 : 0) +
    (answers2.question8 !== 5 ? 1 : 0) +
    (answers2.question9 && answers2.question9.length > 0 ? 1 : 0) +
    (answers2.question10 !== 5 ? 1 : 0) +
    (answers2.question11 && answers2.question11.length > 0 ? 1 : 0) +
    (answers2.question12 && answers2.question12.length > 0 ? 1 : 0) +
    (answers2.question13 !== 5 ? 1 : 0) +
    (answers2.question14 && answers2.question14.length > 0 ? 1 : 0) +
    (answers2.question15 && answers2.question15.length > 0 ? 1 : 0) +
    (answers2.question16 && answers2.question16.length > 0 ? 1 : 0) +
    (answers2.question17 !== 5 ? 1 : 0) +
    (answers2.question18 && answers2.question18.length > 0 ? 1 : 0) +
    (answers2.question19 && answers2.question19.length > 0 ? 1 : 0) +
    (answers2.question20 && answers2.question20.length > 0 ? 1 : 0) 
    const progress = Math.round((answeredCount / totalQuestions) * 100);

    const handleAnswerChange2 = <K extends keyof BasicProps["answers2"]>(
        questionKey: K,
        value: BasicProps["answers2"][K]
    ) => {
        setAnswers2((prevAnswers) => ({
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
                        {/* ----------------------------------------------------------------------------------------------------------------- */}
                        <Row className="mb-4">
                            <Col sm="2">
                                <HelpButton qnumber={0} />
                            </Col>
                            <Col sm="10">
                                <div id="question1">
                                    <h3 className="text-start">Question 1 - {QuestionList2[0]}</h3>
                                </div>
                            </Col>
                        </Row>
                    
                        <Row className="mb-4">
                            <Col sm="1" />
                            {questionOptions2[0].map(option => (
                                <Col key={option} sm="2" ref={question2Ref}>
                                    <Form.Check
                                        key={option}
                                        inline
                                        type="checkbox"
                                        label={option}
                                        value={option}
                                        checked={answers2.question1.includes(option)}
                                        onChange={() => handleAnswerChange2("question1", answers2.question1.includes(option)
                                            ? answers2.question1.filter(e => e !== option)
                                            : [...answers2.question1, option]
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
                                    <h3 className="text-start">Question 2 - {QuestionList2[1]}</h3>
                                </div>
                            </Col>
                        </Row>
                    
                        <Row className="mb-4">
                        <Col sm={{ span: 8, offset: 2 }} ref={question3Ref}>
                            <ListGroup>
                            {questionOptions2[1].map(option => (
                                <ListGroup.Item
                                key={option}
                                action
                                active={answers2.question2.includes(option)} 
                                onClick={() => {
                                    const isSelected = answers2.question2.includes(option);
                                    const newSelection = isSelected
                                    ? answers2.question2.filter(o => o !== option) 
                                    : [...answers2.question2, option];
                                    handleAnswerChange2("question2", newSelection);
                                }}
                                style={{ cursor: "pointer" }}
                                >
                                {option}
                                </ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Col>
                        </Row>
                        
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
                                    <h3 className="text-start">Question 3 - {QuestionList2[2]}</h3>
                                </div>
                            </Col>
                        </Row>
                    
                        <Row className="mb-4">
                            <Col sm="1" />
                            {questionOptions2[2].map(option => (                                
                                <Col key={option} ref={question4Ref}>
                                            <Button
                                                variant={answers2.question3.includes(option) ? "primary" : "outline-primary"}
                                                onClick={() => handleAnswerChange2("question3", answers2.question3.includes(option)
                                                    ? answers2.question3.filter(e => e !== option)
                                                    : [...answers2.question3, option]
                                                )}
                                            >
                                                {option}
                                            </Button>
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
                                <HelpButton qnumber={4} />
                            </Col>
                            <Col sm="10">
                                <div id="question4">
                                    <h3 className="text-start">Question 4 - {QuestionList2[3]}</h3>
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
                                    value={answers2.question4}
                                onChange={e => {
                                    handleAnswerChange2("question4", Number(e.target.value));
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
                            <HelpButton qnumber={5} />
                        </Col>
                        <Col sm="10">
                            <div id="question5">
                            <h3 className="text-start">Question 5 - {QuestionList2[4]}</h3>
                            </div>
                        </Col>
                        </Row>

                        <Form.Group as={Row} className="mb-4">
                        <Col sm="2" />
                        <Col sm="2">
                            <Form.Label>Rating:</Form.Label>
                        </Col>
                        <Col sm="5" ref={question6Ref}>
                            <Form.Range
                            min="1"
                            max="10"
                            value={answers2.question5}
                            onChange={e => handleAnswerChange2("question5", Number(e.target.value))}
                            />
                        </Col>
                        <Col sm="2"><strong>{answers2.question5}</strong></Col>
                        <Col sm="1" />
                        </Form.Group>
    
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 6 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={6} />
                        </Col>
                        <Col sm="10">
                            <div id="question6">
                            <h3 className="text-start">Question 6 - {QuestionList2[5]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col sm={{ span: 8, offset: 2 }} ref={question7Ref}>
                            <ListGroup>
                            {questionOptions2[5].map(option => (
                                <ListGroup.Item
                                key={option}
                                action
                                active={answers2.question6.includes(option)} // ✅ check if it's *in* the array
                                onClick={() => {
                                    const isSelected = answers2.question6.includes(option);
                                    const newSelection = isSelected
                                    ? answers2.question6.filter(o => o !== option) // ❌ remove if already selected
                                    : [...answers2.question6, option]; // ✅ add if not selected
                                    handleAnswerChange2("question6", newSelection);
                                }}
                                style={{ cursor: "pointer" }}
                                >
                                {option}
                                </ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>
                        

                        {/* Question 7 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={7} />
                        </Col>
                        <Col sm="10">
                            <div id="question7">
                                <h3 className="text-start">Question 7 - {QuestionList2[6]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col sm="1" />
                        {questionOptions2[6].map(option => (
                            <Col key={option} sm="2" ref={question8Ref}>
                            <Form.Check
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question7.includes(option)}
                                onChange={() => handleAnswerChange2("question7", answers2.question7.includes(option)
                                ? answers2.question7.filter(e => e !== option)
                                : [...answers2.question7, option]
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
                                <HelpButton qnumber={8} />
                            </Col>
                            <Col sm="10">
                                <div id="question8">
                                <h3 className="text-start">Question 8 - {QuestionList2[7]}</h3>
                                </div>
                            </Col>
                            </Row>

                            <Form.Group as={Row} className="mb-4">
                            <Col sm="2" />
                            <Col sm="2">
                                <Form.Label>Rating:</Form.Label>
                            </Col>
                            <Col sm="5" ref={question9Ref}>
                                <Form.Range
                                min="1"
                                max="10"
                                value={answers2.question8}
                                onChange={e => handleAnswerChange2("question8", Number(e.target.value))}
                                />
                            </Col>
                            <Col sm="2"><strong>{answers2.question8}</strong></Col>
                            <Col sm="1" />
                            </Form.Group>


                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 9 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={9} />
                        </Col>
                        <Col sm="10">
                            <div id="question9">
                            <h3 className="text-start">Question 9 - {QuestionList2[8]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col sm="1" />
                        {questionOptions2[8].map(option => (
                            <Col key={option} ref={question10Ref}>
                            <Button
                                variant={answers2.question9.includes(option) ? "primary" : "outline-primary"}
                                onClick={() => handleAnswerChange2(
                                "question9",
                                answers2.question9.includes(option)
                                    ? answers2.question9.filter(e => e !== option)
                                    : [...answers2.question9, option]
                                )}
                            >
                                {option}
                            </Button>
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
                            <HelpButton qnumber={10} />
                        </Col>
                        <Col sm="10">
                            <div id="question10">
                            <h3 className="text-start">Question 10 - {QuestionList2[9]}</h3>
                            </div>
                        </Col>
                        </Row>

                        <Form.Group as={Row} className="mb-4">
                        <Col sm="3" />
                        <Col sm="6" ref={question11Ref}>
                            <Form.Control
                            type="number"
                            min="1"
                            max="10"
                            value={answers2.question10}
                            onChange={e => handleAnswerChange2("question10", Number(e.target.value))}
                            />
                        </Col>
                        <Col sm="3" />
                        </Form.Group>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 11 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={11} />
                        </Col>
                        <Col sm="10">
                            <div id="question11">
                            <h3 className="text-start">Question 11 - {QuestionList2[10]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col sm="1" />
                            {questionOptions2[10].map(option => (                                
                                <Col key={option} ref={question12Ref}>
                                            <Button
                                                variant={answers2.question11.includes(option) ? "primary" : "outline-primary"}
                                                onClick={() => handleAnswerChange2("question11", answers2.question11.includes(option)
                                                    ? answers2.question11.filter(e => e !== option)
                                                    : [...answers2.question11, option]
                                                )}
                                            >
                                                {option}
                                            </Button>
                                </Col>
                            ))}
                            <Col sm="2" />
                        </Row>

                        {/* Question 12 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={12} />
                        </Col>
                        <Col sm="10">
                            <div id="question12">
                            <h3 className="text-start">Question 12 - {QuestionList2[11]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col sm="1" />
                        {questionOptions2[11].map(option => (
                            <Col key={option} sm="2" ref={question13Ref}>
                            <Form.Check
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question12.includes(option)}
                                onChange={() => handleAnswerChange2("question12", answers2.question12.includes(option)
                                ? answers2.question12.filter(e => e !== option)
                                : [...answers2.question12, option]
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
                            <HelpButton qnumber={13} />
                        </Col>
                        <Col sm="10">
                            <div id="question13">
                            <h3 className="text-start">Question 13 - {QuestionList2[12]}</h3>
                            </div>
                        </Col>
                        </Row>

                        <Form.Group as={Row} className="mb-4">
                        <Col sm="3" />
                        <Col sm="6" ref={question14Ref}>
                            <Form.Control
                            type="number"
                            min="1"
                            max="10"
                            value={answers2.question13}
                            onChange={e => handleAnswerChange2("question13", Number(e.target.value))}
                            />
                        </Col>
                        <Col sm="3" />
                        </Form.Group>


                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 14 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={14} />
                        </Col>
                        <Col sm="10">
                            <div id="question14">
                            <h3 className="text-start">Question 14 - {QuestionList2[13]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col sm={{ span: 8, offset: 2 }} ref={question15Ref}>
                            <ListGroup>
                            {questionOptions2[13].map(option => (
                                <ListGroup.Item
                                key={option}
                                action
                                active={answers2.question14.includes(option)} 
                                onClick={() => {
                                    const isSelected = answers2.question14.includes(option);
                                    const newSelection = isSelected
                                    ? answers2.question14.filter(o => o !== option) 
                                    : [...answers2.question14, option];
                                    handleAnswerChange2("question14", newSelection);
                                }}
                                style={{ cursor: "pointer" }}
                                >
                                {option}
                                </ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 15 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={15} />
                        </Col>
                        <Col sm="10">
                            <div id="question15">
                            <h3 className="text-start">Question 15 - {QuestionList2[14]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col sm="1" />
                        {questionOptions2[14].map(option => (
                            <Col key={option} sm="2" ref={question16Ref}>
                            <Form.Check
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question15.includes(option)}
                                onChange={() => handleAnswerChange2("question15", answers2.question15.includes(option)
                                ? answers2.question15.filter(e => e !== option)
                                : [...answers2.question15, option]
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

                        {/* Question 16 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={16} />
                        </Col>
                        <Col sm="10">
                            <div id="question16">
                            <h3 className="text-start">Question 16 - {QuestionList2[15]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col sm="1" />
                            {questionOptions2[15].map(option => (                                
                                <Col key={option} ref={question17Ref}>
                                            <Button
                                                variant={answers2.question16.includes(option) ? "primary" : "outline-primary"}
                                                onClick={() => handleAnswerChange2("question16", answers2.question16.includes(option)
                                                    ? answers2.question16.filter(e => e !== option)
                                                    : [...answers2.question16, option]
                                                )}
                                            >
                                                {option}
                                            </Button>
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
                            <HelpButton qnumber={17} />
                        </Col>
                        <Col sm="10">
                            <div id="question17">
                            <h3 className="text-start">Question 17 - {QuestionList2[16]}</h3>
                            </div>
                        </Col>
                        </Row>

                        <Form.Group as={Row} className="mb-4">
                        <Col sm="2" />
                        <Col sm="2">
                            <Form.Label>Rating:</Form.Label>
                        </Col>
                        <Col sm="5" ref={question18Ref}>
                            <Form.Range
                            min="1"
                            max="10"
                            value={answers2.question17}
                            onChange={e => handleAnswerChange2("question17", Number(e.target.value))}
                            />
                        </Col>
                        <Col sm="2"><strong>{answers2.question17}</strong></Col>
                        <Col sm="1" />
                        </Form.Group>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 18 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={18} />
                        </Col>
                        <Col sm="10">
                            <div id="question18">
                            <h3 className="text-start">Question 18 - {QuestionList2[17]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col sm={{ span: 8, offset: 2 }} ref={question19Ref}>
                            <ListGroup>
                            {questionOptions2[17].map(option => (
                                <ListGroup.Item
                                key={option}
                                action
                                active={answers2.question18.includes(option)} 
                                onClick={() => {
                                    const isSelected = answers2.question18.includes(option);
                                    const newSelection = isSelected
                                    ? answers2.question18.filter(o => o !== option) 
                                    : [...answers2.question18, option];
                                    handleAnswerChange2("question18", newSelection);
                                }}
                                style={{ cursor: "pointer" }}
                                >
                                {option}
                                </ListGroup.Item>
                            ))}
                            </ListGroup>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid black", width: "100%" }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 19 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={19} />
                        </Col>
                        <Col sm="10">
                            <div id="question19">
                            <h3 className="text-start">Question 19 - {QuestionList2[18]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                        <Col sm="1" />
                        {questionOptions2[18].map(option => (
                            <Col key={option} sm="2" ref={question20Ref}>
                            <Form.Check
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question19.includes(option)}
                                onChange={() => handleAnswerChange2("question19", answers2.question19.includes(option)
                                ? answers2.question19.filter(e => e !== option)
                                : [...answers2.question19, option]
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

                        {/* Question 20 */}
                        <Row className="mb-4">
                        <Col sm="2">
                            <HelpButton qnumber={20} />
                        </Col>
                        <Col sm="10">
                            <div id="question20">
                            <h3 className="text-start">Question 20 - {QuestionList2[19]}</h3>
                            </div>
                        </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col sm="1" />
                            {questionOptions2[19].map(option => (                                
                                <Col key={option}>
                                            <Button
                                                variant={answers2.question20.includes(option) ? "primary" : "outline-primary"}
                                                onClick={() => handleAnswerChange2("question20", answers2.question20.includes(option)
                                                    ? answers2.question20.filter(e => e !== option)
                                                    : [...answers2.question20, option]
                                                )}
                                            >
                                                {option}
                                            </Button>
                                </Col>
                            ))}
                            <Col sm="2" />
                        </Row>

                        {/* ----------------------------------------------------------------------------------------------------------------- */}
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