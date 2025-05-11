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
import OverlappingBoxes from "./OverlappingBoxes";

interface BasicProps {
    changePage: (input: string) => void;
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
    setAnswers2: React.Dispatch<React.SetStateAction<BasicProps["answers2"]>>;
}

const QuestionList2 = 
["Which of the following career fields are you most interested in? (Select all that apply)",
    "How do you prefer to work? (Select all that apply)",
    "What drives you most in a career? (Select all that apply)",
    "How comfortable are you with taking risks in your career from 1-10? (With 10 being very comfortable with risk)",
    "How important is job stability to you from 1-10? (With 10 being extremely important)",
    "Which skills do you enjoy using most? (Select all that apply)",
    "How do you like to solve problems? (Select all that apply)",
    "How confident are you in your current professional skill set from 1-10? (With 10 being extremely confident)",
    "Which types of tasks do you find most energizing? (Select all that apply)",
    "How much do you value continuous learning in your career from 1-10? (With 10 being extremely important)",
    "Which of the following work environments would you prefer? (Select all that apply)",
    "How much structure do you prefer in your day-to-day work? (Select all that apply)",
    "How important is it for your work to align with your personal values from 1-10? (With 10 being extremely important)",
    "What kind of work schedules do you see yourself thriving in? (Select all that apply)",
    "Which aspects of company culture matter most to you? (Select all that apply)",
    "What's your biggest career goal right now? (Select all that apply)",
    "How motivated do you feel about your current career path from 1-10? (With 10 being extremely motivated)",
    "Which of the following describes your long-term vision best? (Select all that apply)",
    "If money wasn’t an issue, what kind of work would you do? (Select all that apply)",
    "What’s your biggest fear when it comes to your career? (Select all that apply)"]

const questionOptions2 = [
    ["Healthcare",
        "Business / Entrepreneurship",
        "Creative Arts / Design",
        "Education / Training",
        "Science / Engineering"],
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
    "Select one or more options that apply to you by clicking on the boxes", 
    "Select one or more options that apply to you by clicking on the buttons", 
    "Change the number to your answer by clicking the up arrow to increase, and down arrow to decrease", 
    "Change the number to your answer by moving the slider to the right to increase, and left to decrease", 
    "Select one or more options that apply to you by clicking on the boxes", 
    "Select one or more options that apply to you by clicking on the boxes",
    "Change the number to your answer by moving the slider to the right to increase, and left to decrease",
    "Select one or more options that apply to you by clicking on the buttons",
    "Change the number to your answer by clicking the up arrow to increase, and down arrow to decrease",
    "Select one or more options that apply to you by clicking on the buttons",
    "Select one or more options that apply to you by clicking on the boxes",
    "Change the number to your answer by clicking the up arrow to increase, and down arrow to decrease",
    "Select one or more options that apply to you by clicking on the boxes",
    "Select one or more options that apply to you by clicking on the boxes",
    "Select one or more options that apply to you by clicking on the buttons",
    "Change the number to your answer by moving the slider to the right to increase, and left to decrease",
    "Select one or more options that apply to you by clicking on the boxes",
    "Select one or more options that apply to you by clicking on the boxes",
    "Select one or more options that apply to you by clicking on the buttons"]

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
    
    const [question4Changed, setQuestion4Changed] = useState(false);
    const [question5Changed, setQuestion5Changed] = useState(false);
    const [question8Changed, setQuestion8Changed] = useState(false);
    const [question10Changed, setQuestion10Changed] = useState(false);
    const [question13Changed, setQuestion13Changed] = useState(false);
    const [question17Changed, setQuestion17Changed] = useState(false);

    // This useEffect to check if the user is coming from the review page
    useEffect(() => {
        if (localStorage.getItem("returnFromReview") === "true") {
            setQuestion4Changed(true);
            setQuestion5Changed(true);
            setQuestion8Changed(true);
            setQuestion10Changed(true);
            setQuestion13Changed(true);
            setQuestion17Changed(true);
            localStorage.removeItem("returnFromReview");
        }
    }, []);

    // Calculate progress
    const totalQuestions = 20;
    const answeredCount =
    (answers2.question1 && answers2.question1.length > 0 ? 1 : 0) +
    (answers2.question2 && answers2.question2.length > 0 ? 1 : 0) +
    (answers2.question3 && answers2.question3.length > 0 ? 1 : 0) +
    (answers2.question4 > 0 ? 1 : 0) +
    (answers2.question5 > 0 ? 1 : 0) +
    (answers2.question6 && answers2.question6.length > 0 ? 1 : 0) +
    (answers2.question7 && answers2.question7.length > 0 ? 1 : 0) +
    (answers2.question8 > 0 ? 1 : 0) +
    (answers2.question9 && answers2.question9.length > 0 ? 1 : 0) +
    (answers2.question10 > 0 ? 1 : 0) +
    (answers2.question11 && answers2.question11.length > 0 ? 1 : 0) +
    (answers2.question12 && answers2.question12.length > 0 ? 1 : 0) +
    (answers2.question13 > 0 ? 1 : 0) +
    (answers2.question14 && answers2.question14.length > 0 ? 1 : 0) +
    (answers2.question15 && answers2.question15.length > 0 ? 1 : 0) +
    (answers2.question16 && answers2.question16.length > 0 ? 1 : 0) +
    (answers2.question17 > 0 ? 1 : 0) +
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

                <Row>
                                            <Col sm = "2"/>
                                            <Col sm = "8">
                                            <div className="box-wrapper">
                                                <div className="box-background">
                                                    <div className="box-foreground">
                                                        <h1>Basic Page</h1>
                                    </div>
                            </div>
                        </div>
                        </Col>
                </Row>

                <div style={{
                                        position: "sticky",
                                        top: 0,
                                        zIndex: 1000,
                                        backgroundColor: "transparent",
                                        //padding: "5px 20px",
                                        marginBottom: "10px",
                                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
                                    }}>
                                        <Row>
                                            <Col sm = "2"/>
                                            <Col sm = "8">
                                            <div className="box-wrapper">
                                                <div className="box-background">
                                                    <div className="box-foreground">
                                        <ProgressBar
                                            now={progress} 
                                            label={`${progress}%`} 
                                            variant={progress === 100 ? "danger" : "warning"}
                                            style={{ height: "12px", width: "80%", margin: "10px auto"}} 
                                        />
                                        <ButtonGroup>
                                        {["Home", "Detailed"].map(page => (
                                            <Button variant = "outline-danger" key={page} onClick={() => changePage(page)}>
                                                {page} Page
                                            </Button>
                                        ))}
                                    </ButtonGroup>

                                        
                                    </div>
                            </div>
                        </div>
                    
                                            </Col>
                                        </Row>
                    </div>
                
    
                    <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1}} className="my-5" />
                            </Col>
                    </Row>
                
                <Row>
                    <Col sm="8">
                        {/* ----------------------------------------------------------------------------------------------------------------- */}
                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={0} />
                            </Col>
                            <Col sm="10">
                                <div id="question1">
                                    <OverlappingBoxes text = {`Question 1 - ${QuestionList2[0]}`}/>
                                </div>
                            </Col>
                        </Row>
                    
                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                                <div className="box-wrapper">
                                    <div className="box-background">
                                        <div className="box-foreground">
                                            <Row ref={question2Ref}>
                                                <div style={{ fontSize: '0.97rem', textAlign: 'center' }}>
                                                    {questionOptions2[0].map(option => (
                                                            <Form.Check
                                                                className = "custom-checkbox"
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
                                                    ))} 
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        
                       
                        
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1}} className="my-5" />
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={1} />
                            </Col>
                            <Col sm="10">
                                <div id="question2">
                                <OverlappingBoxes text = {`Question 2 - ${QuestionList2[1]}`}/>
                                </div>
                            </Col>
                        </Row>
                    
                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question3Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center'}}>
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
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor: answers2.question2.includes(option) ? "#cc2435" : "#e98585", // persistent color change
                                                    color: answers2.question2.includes(option) ? "white" : "black", // persistent text color change
                                                    borderColor: answers2.question2.includes(option) ? "#cc2435" : "#e98585", // persistent border color change
                                                  }}
                                                variant = "danger"
                                                className = "mb-2"
                                                >
                                                {option}
                                                </ListGroup.Item>
                                            ))}
                                            </ListGroup>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={2} />
                            </Col>
                            <Col sm="10">
                                <div id="question3">
                                <OverlappingBoxes text = {`Question 3 - ${QuestionList2[2]}`}/>
                                </div>
                            </Col>
                        </Row>
                    
                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question4Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            {questionOptions2[2].map(option => (
                                                            <Button
                                                                variant={answers2.question3.includes(option) ? "danger" : "outline-danger"}
                                                                onClick={() => handleAnswerChange2("question3", answers2.question3.includes(option)
                                                                    ? answers2.question3.filter(e => e !== option)
                                                                    : [...answers2.question3, option]
                                                                )}
                                                                className="me-2"
                                                            >
                                                                {option}
                                                            </Button> 
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                           </div>
                        </div>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={3} />
                            </Col>
                            <Col sm="10">
                                <div id="question4">
                                <OverlappingBoxes text = {`Question 4 - ${QuestionList2[3]}`}/>
                                </div>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question5Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            <Form.Group as = {Row} controlId="rating">
                                                <Col sm = "2"/>
                                                <Form.Label column sm="2">Rating:</Form.Label>
                                                <Col sm="6">
                                                    <Form.Control
                                                        type="number"
                                                        min="1"
                                                        max="10"
                                                        value={answers2.question4 === 0 ? NaN : answers2.question4}
                                                    onChange={e => {
                                                        if (!question4Changed) {
                                                            setQuestion4Changed(true);
                                                        }
                                                        handleAnswerChange2("question4", Number(e.target.value));
                                                    }}
                                                    />
                                                    </Col>
                                            </Form.Group>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>
    
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={4} />
                        </Col>
                        <Col sm="10">
                            <div id="question5">
                                <OverlappingBoxes text = {`Question 5 - ${QuestionList2[4]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question6Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            <Form.Group as={Row}>
                                            <Col sm = "1"/>
                                            <Col sm="2">
                                                <Form.Label>Rating:</Form.Label>
                                            </Col>
                                            <Col sm="7">
                                                <Form.Range
                                                min="1"
                                                max="10"
                                                value={answers2.question5}
                                                onChange={e => {
                                                    if (!question5Changed) {
                                                        setQuestion5Changed(true);
                                                    }
                                                    handleAnswerChange2("question5", Number(e.target.value))}}
                                                />
                                            </Col>
                                            <Col sm="2"><strong>{(answers2.question5 === 0) ? "" : answers2.question5}</strong></Col>
                                            </Form.Group>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>
    
                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 6 */}
                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={5} />
                            </Col>
                            <Col sm="10">
                                <div id="question6">
                                    <OverlappingBoxes text={`Question 6 - ${QuestionList2[5]}`} />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question7Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            <ListGroup>
                                                {questionOptions2[5].map(option => (
                                                    <ListGroup.Item
                                                        className = "mb-2"
                                                        key={option}
                                                        action
                                                        active={answers2.question6.includes(option)}
                                                        onClick={() => {
                                                            const isSelected = answers2.question6.includes(option);
                                                            const newSelection = isSelected
                                                                ? answers2.question6.filter(o => o !== option)
                                                                : [...answers2.question6, option];
                                                            handleAnswerChange2("question6", newSelection);
                                                        }}
                                                        style={{
                                                            cursor: "pointer",
                                                            backgroundColor: answers2.question6.includes(option) ? "#cc2435" : "#e98585", // persistent color change
                                                            color: answers2.question6.includes(option) ? "white" : "black", // persistent text color change
                                                            borderColor: answers2.question6.includes(option) ? "#cc2435" : "#e98585", // persistent border color change
                                                          }}
                                                        variant="danger"
                                                    >
                                                        {option}
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 7 */}
                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={6} />
                            </Col>
                            <Col sm="10">
                                <div id="question7">
                                    <OverlappingBoxes text={`Question 7 - ${QuestionList2[6]}`} />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question8Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            {questionOptions2[6].map(option => (
                                                <Form.Check
                                                    className = "custom-checkbox"
                                                    key={option}
                                                    inline
                                                    type="checkbox"
                                                    label={option}
                                                    value={option}
                                                    checked={answers2.question7.includes(option)}
                                                    onChange={() =>
                                                        handleAnswerChange2(
                                                            "question7",
                                                            answers2.question7.includes(option)
                                                                ? answers2.question7.filter(e => e !== option)
                                                                : [...answers2.question7, option]
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 8 */}
                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={7} />
                            </Col>
                            <Col sm="10">
                                <div id="question8">
                                    <OverlappingBoxes text={`Question 8 - ${QuestionList2[7]}`} />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question9Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            <Form.Group as={Row}>
                                                <Col sm="3">
                                                    <Form.Label>Rating:</Form.Label>
                                                </Col>
                                                <Col sm="7">
                                                    <Form.Range
                                                        min="1"
                                                        max="10"
                                                        value={answers2.question8}
                                                        onChange={e => {
                                                            if (!question8Changed) {
                                                                setQuestion8Changed(true);
                                                            }
                                                            handleAnswerChange2("question8", Number(e.target.value));
                                                        }}
                                                    />
                                                </Col>
                                                <Col sm="2"><strong>{answers2.question8 === 0 ? "" : answers2.question8}</strong></Col>
                                            </Form.Group>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 9 */}
                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={8} />
                            </Col>
                            <Col sm="10">
                                <div id="question9">
                                    <OverlappingBoxes text={`Question 9 - ${QuestionList2[8]}`} />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question10Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            {questionOptions2[8].map(option => (
                                                <Button
                                                    key={option}
                                                    variant={answers2.question9.includes(option) ? "danger" : "outline-danger"}
                                                    onClick={() =>
                                                        handleAnswerChange2(
                                                            "question9",
                                                            answers2.question9.includes(option)
                                                                ? answers2.question9.filter(e => e !== option)
                                                                : [...answers2.question9, option]
                                                        )
                                                    }
                                                    className="me-2"
                                                >
                                                    {option}
                                                </Button>
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 10 */}
                        <Row className="mb-4">
                            <Col sm="1">
                                <HelpButton qnumber={9} />
                            </Col>
                            <Col sm="10">
                                <div id="question10">
                                    <OverlappingBoxes text={`Question 10 - ${QuestionList2[9]}`} />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question11Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            <Form.Group as={Row} controlId="rating">
                                                <Col sm = "1"/>
                                                <Col sm="2">
                                                    <Form.Label>Rating:</Form.Label>
                                                </Col>
                                                <Col sm="7">
                                                    <Form.Control
                                                        type="number"
                                                        min="1"
                                                        max="10"
                                                        value={answers2.question10 === 0 ? NaN : answers2.question10}
                                                        onChange={e => {
                                                            if (!question10Changed) {
                                                                setQuestion10Changed(true);
                                                            }
                                                            handleAnswerChange2("question10", Number(e.target.value));
                                                        }}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1}} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 11 */}
                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={10} />
                        </Col>
                        <Col sm="10">
                            <div id="question11">
                            <OverlappingBoxes text = {`Question 11 - ${QuestionList2[10]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question12Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            {questionOptions2[10].map(option => (
                                                            <Button
                                                                variant={answers2.question11.includes(option) ? "danger" : "outline-danger"}
                                                                onClick={() => handleAnswerChange2("question11", answers2.question11.includes(option)
                                                                    ? answers2.question11.filter(e => e !== option)
                                                                    : [...answers2.question11, option]
                                                                )}
                                                                className="me-2"
                                                            >
                                                                {option}
                                                            </Button>
                                            ))}
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                            </Col>
                        </Row>

                        <Row>
                        <Col sm="1" />
                        <Col sm="10">
                            <hr style={{ border: "4px solid #555", width: "100%", opacity:1}} className="my-5" />
                        </Col>
                        </Row>

                        {/* Question 12 */}
                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={11} />
                        </Col>
                        <Col sm="10">
                            <div id="question12">
                            <OverlappingBoxes text = {`Question 12 - ${QuestionList2[11]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                <Row ref={question13Ref}>
                                    <div style={{ fontSize: '0.94rem', textAlign: 'center' }}>
                                    {questionOptions2[11].map(option => (
                                        <Form.Check
                                            className = "custom-checkbox"
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
                                    ))}
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                            </Col>
                        </Row>
                    

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={12} />
                        </Col>
                        <Col sm="10">
                            <div id="question13">
                            <OverlappingBoxes text = {`Question 13 - ${QuestionList2[12]}`}/>
                            </div>
                        </Col>
                        </Row>
                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question14Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            <Form.Group as={Row}>
                                            <Col sm = "2"/>
                                                <Form.Label column sm="2">Rating:</Form.Label>
                                                <Col sm="6">
                                                <Form.Control
                                                type="number"
                                                min="1"
                                                max="10"
                                                value={answers2.question13 === 0 ? NaN : answers2.question13}
                                                onChange={e => {
                                                    if (!question13Changed) {
                                                        setQuestion13Changed(true);
                                                    }
                                                    handleAnswerChange2("question13", Number(e.target.value))}}
                                                />
                                            </Col>
                                            </Form.Group>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>


                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 14 */}
                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={13} />
                        </Col>
                        <Col sm="10">
                            <div id="question14">
                            <OverlappingBoxes text = {`Question 14 - ${QuestionList2[13]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question15Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center'}}>
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
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor: answers2.question14.includes(option) ? "#cc2435" : "#e98585", // persistent color change
                                                    color: answers2.question14.includes(option) ? "white" : "black", // persistent text color change
                                                    borderColor: answers2.question14.includes(option) ? "#cc2435" : "#e98585", // persistent border color change
                                                  }}
                                                variant = "danger"
                                                className = "mb-2"
                                                >
                                                {option}
                                                </ListGroup.Item>
                                            ))}
                                            </ListGroup>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 15 */}
                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={14} />
                        </Col>
                        <Col sm="10">
                            <div id="question15">
                            <OverlappingBoxes text = {`Question 15 - ${QuestionList2[14]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question16Ref}>
                                        <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                            {questionOptions2[14].map(option => (
                                                <Form.Check
                                                    className = "custom-checkbox"
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
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 16 */}
                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={15} />
                        </Col>
                        <Col sm="10">
                            <div id="question16">
                            <OverlappingBoxes text = {`Question 16 - ${QuestionList2[15]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question17Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            {questionOptions2[15].map(option => (        
                                                            <Button
                                                                variant={answers2.question16.includes(option) ? "danger" : "outline-danger"}
                                                                onClick={() => handleAnswerChange2("question16", answers2.question16.includes(option)
                                                                    ? answers2.question16.filter(e => e !== option)
                                                                    : [...answers2.question16, option]
                                                                )}
                                                                className="me-2"
                                                            >
                                                                {option}
                                                            </Button>
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={16} />
                        </Col>
                        <Col sm="10">
                            <div id="question17">
                            <OverlappingBoxes text = {`Question 17 - ${QuestionList2[16]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question18Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center' }}>
                                            <Form.Group as={Row}>
                                                <Col sm = "1"/>
                                                <Col sm="2">
                                                    <Form.Label>Rating:</Form.Label>
                                                </Col>
                                                <Col sm="7">
                                                <Form.Range
                                                min="1"
                                                max="10"
                                                value={answers2.question17}
                                                onChange={e => {
                                                    if (!question17Changed) {
                                                        setQuestion17Changed(true);
                                                    }
                                                    handleAnswerChange2("question17", Number(e.target.value))}}
                                                />
                                            </Col>
                                            <Col sm="2"><strong>{answers2.question17 === 0 ? "" : answers2.question17}</strong></Col>
                                            </Form.Group>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 18 */}
                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={17} />
                        </Col>
                        <Col sm="10">
                            <div id="question18">
                            <OverlappingBoxes text = {`Question 18 - ${QuestionList2[17]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question19Ref}>
                                        <div style={{ fontSize: '1rem', textAlign: 'center'}}>
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
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor: answers2.question18.includes(option) ? "#cc2435" : "#e98585", // persistent color change
                                                    color: answers2.question18.includes(option) ? "white" : "black", // persistent text color change
                                                    borderColor: answers2.question18.includes(option) ? "#cc2435" : "#e98585", // persistent border color change
                                                  }}
                                                variant = "danger"
                                                className = "mb-2"
                                                >
                                                {option}
                                                </ListGroup.Item>
                                            ))}
                                            </ListGroup>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 19 */}
                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={18} />
                        </Col>
                        <Col sm="10">
                            <div id="question19">
                            <OverlappingBoxes text = {`Question 19 - ${QuestionList2[18]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row ref={question20Ref}>
                                        <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                            {questionOptions2[18].map(option => (
                                                <Form.Check
                                                    className = "custom-checkbox"
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
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1 }} className="my-5" />
                            </Col>
                        </Row>

                        {/* Question 20 */}
                        <Row className="mb-4">
                        <Col sm="1">
                            <HelpButton qnumber={19} />
                        </Col>
                        <Col sm="10">
                            <div id="question20">
                            <OverlappingBoxes text = {`Question 20 - ${QuestionList2[19]}`}/>
                            </div>
                        </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                        <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row>
                                        <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                            {questionOptions2[19].map(option => (    
                                                            <Button
                                                                variant={answers2.question20.includes(option) ? "danger" : "outline-danger"}
                                                                onClick={() => handleAnswerChange2("question20", answers2.question20.includes(option)
                                                                    ? answers2.question20.filter(e => e !== option)
                                                                    : [...answers2.question20, option]
                                                                )}
                                                                className="me-2"
                                                            >
                                                                {option}
                                                            </Button>
                                            ))}
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1}} className="my-5" />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm = "1"/>
                            <Col sm = "10">
                            <div className="box-wrapper">
                            <div className="box-background">
                                <div className="box-foreground">
                                    <Row>
                                        <Col sm = "1"/>
                                        <Col sm="4">
                                            <Button variant = "outline-danger" disabled = {progress!==100} onClick={() => {
                                                window.location.hash = ``;
                                                changePage("Review")}}>Review Answers</Button>
                                        </Col>
                                        <Col sm = "1"/>
                                        <Col sm="5">
                                            <Button variant = "outline-danger" disabled = {progress!==100} onClick={() => {
                                                window.location.hash = ``;
                                                changePage("Answers")}}>Get Answers</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                            </Col>
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
                        <Row className="my-5">
                            <Col sm="1" />
                            <Col sm="10">
                                <hr style={{ border: "4px solid #555", width: "100%", opacity:1}} className="mb-5" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            

        </div>
    );
}