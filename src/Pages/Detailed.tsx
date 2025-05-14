import React from "react";
import { Button, OverlayTrigger, Row, Col, Tooltip, ProgressBar } from "react-bootstrap";
import { Form } from "react-bootstrap";
import OverlappingBoxes from "./OverlappingBoxes";
import q1_pic from "../Images/Detailed Page/temp-img.jpg";
import q2_pic from "../Images/Detailed Page/temp-img.jpg";
import q3_pic from "../Images/Detailed Page/temp-img.jpg";
import q4_pic from "../Images/Detailed Page/temp-img.jpg";
import q5_pic from "../Images/Detailed Page/temp-img.jpg";
import q6_pic from "../Images/Detailed Page/temp-img.jpg";
import q7_pic from "../Images/Detailed Page/temp-img.jpg";


interface DetailedProps {
    changePage:(input: string) => void;
    answersD: {
        question1: string;
        question2: string;
        question3: string;
        question4: string;
        question5: string;
        question6: string;
        question7: string;
    };
    setAnswersD: React.Dispatch<React.SetStateAction<DetailedProps["answersD"]>>;
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

export function summrizeDetailResponse(answersD: DetailedProps["answersD"]) {
    const response = `
        The user has answered as follows:

        Question 1 - ${QuestionList[0]}:
        ${answersD.question1}

        Question 2 - ${QuestionList[1]}:
        ${answersD.question2}

        Question 3 - ${QuestionList[2]}:
        ${answersD.question3}

        Question 4 - ${QuestionList[3]}:
        ${answersD.question4}

        Question 5 - ${QuestionList[4]}:
        ${answersD.question5}

        Question 6 - ${QuestionList[5]}:
        ${answersD.question6}

        Question 7 - ${QuestionList[6]}:
        ${answersD.question7}
        `;
    console.log(response)
    return response
}

export function Detailed({changePage, answersD, setAnswersD}:DetailedProps) {

    const handleAnswerChange = <K extends keyof DetailedProps["answersD"]>(
        questionKey: K,
        value: DetailedProps["answersD"][K]
    ) => {
        setAnswersD((prevAnswers) => ({
            ...prevAnswers,
            [questionKey]: value,
        }));
    };
    // Calculate detailed quiz progress
    const totalQuestions = QuestionList.length;
    const answeredCount =
     [answersD.question1, answersD.question2, answersD.question3, answersD.question4, answersD.question5, answersD.question6, answersD.question7]
       .filter(ans => ans.trim() !== "" && ans !== "Enter response here")
       .length;
    const progress = Math.round((answeredCount / totalQuestions) * 100);


    return(
        <div>
            <Row>
                <Col sm = "2"/>
                <Col sm = "8">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <h1>Detailed Page</h1>
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
                marginBottom: "10px",
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
                                    <Button variant = "outline-danger" onClick={() => changePage("Home")}>Home Page</Button>
                                    <Button variant = "outline-danger" onClick={() => changePage("Basic")}>Basic Page</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            
            <Row>
                <Col sm = "1" />
                <Col sm = "10">
                <hr style = {{border : "4px solid white", width: "100%", opacity: 1}} className="my-5" />
                </Col>
            </Row>

            <Row>
                <Col sm="8">
                    <Row className="mb-4">
                        <Col sm = "1">
                            <HelpButton qnumber = {0} />
                        </Col>
                        <Col sm = "10">
                            <div id="question 1">
                                <OverlappingBoxes text = {`Question 1 - ${QuestionList[0]}`}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="1"/>
                        <Col sm = "10">
                            <div className="box-wrapper">
                                <div className="box-background">
                                    <div className="box-forground">
                                        <Form.Group controlId="formMovieName">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                style={{opacity: 0}}
                                                value={answersD.question1}
                                                onChange={(e) => handleAnswerChange("question1", e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col sm = "1">
                            <HelpButton qnumber = {1} />
                        </Col>
                        <Col sm = "10">
                            <div id="question 2">
                                <OverlappingBoxes text = {`Question 2 - ${QuestionList[1]}`}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="1"/>
                        <Col sm = "10">
                            <div className="box-wrapper">
                                <div className="box-background">
                                    <div className="box-forground">
                                        <Form.Group controlId="formMovieName">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={answersD.question2}
                                                onChange={(e) => handleAnswerChange("question2", e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col sm = "1">
                            <HelpButton qnumber = {2} />
                        </Col>
                        <Col sm = "10">
                            <div id="question 3">
                                <OverlappingBoxes text = {`Question 3 - ${QuestionList[2]}`}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="1"/>
                        <Col sm = "10">
                            <div className="box-wrapper">
                                <div className="box-background">
                                    <div className="box-forground">
                                        <Form.Group controlId="formMovieName">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={answersD.question3}
                                                onChange={(e) => handleAnswerChange("question3", e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col sm = "1">
                            <HelpButton qnumber = {3} />
                        </Col>
                        <Col sm = "10">
                            <div id="question 4">
                                <OverlappingBoxes text = {`Question 4 - ${QuestionList[3]}`}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="1"/>
                        <Col sm = "10">
                            <div className="box-wrapper">
                                <div className="box-background">
                                    <div className="box-forground">
                                        <Form.Group controlId="formMovieName">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={answersD.question4}
                                                onChange={(e) => handleAnswerChange("question4", e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col sm = "1">
                            <HelpButton qnumber = {4} />
                        </Col>
                        <Col sm = "10">
                            <div id="question 5">
                                <OverlappingBoxes text = {`Question 5 - ${QuestionList[4]}`}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="1"/>
                        <Col sm = "10">
                            <div className="box-wrapper">
                                <div className="box-background">
                                    <div className="box-forground">
                                        <Form.Group controlId="formMovieName">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={answersD.question5}
                                                onChange={(e) => handleAnswerChange("question5", e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col sm = "1">
                            <HelpButton qnumber = {5} />
                        </Col>
                        <Col sm = "10">
                            <div id="question 6">
                                <OverlappingBoxes text = {`Question 6 - ${QuestionList[5]}`}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="1"/>
                        <Col sm = "10">
                            <div className="box-wrapper">
                                <div className="box-background">
                                    <div className="box-forground">
                                        <Form.Group controlId="formMovieName">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={answersD.question6}
                                                onChange={(e) => handleAnswerChange("question6", e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                   <Row className="mb-4">
                        <Col sm = "1">
                            <HelpButton qnumber = {6} />
                        </Col>
                        <Col sm = "10">
                            <div id="question 7">
                                <OverlappingBoxes text = {`Question 7 - ${QuestionList[6]}`}/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="1"/>
                        <Col sm = "10">
                            <div className="box-wrapper">
                                <div className="box-background">
                                    <div className="box-forground">
                                        <Form.Group controlId="formMovieName">
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={answersD.question7}
                                                onChange={(e) => handleAnswerChange("question7", e.target.value)} />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col sm="4">
                {/*images here*/}
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <img src={q1_pic} className="my-3" alt="A temporary" width={350} height={300}/>
                            </div>
                        </div>
                    </div>

                    <Row className="my-5"/>
                    <Row className="my-4"/>
                    <Row className="mb-3"/>

                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <img src={q2_pic} className="my-3" alt="A temporary" width={350} height={300}/>
                            </div>
                        </div>
                    </div>
                    
                    <Row className="my-5"/>
                    <Row className="my-4"/>
                    <Row className="mb-3"/>

                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <img src={q3_pic} className="my-3" alt="A temporary" width={350} height={300}/>
                            </div>
                        </div>
                    </div>
                    
                    <Row className="my-5"/>
                    <Row className="my-4"/>
                    <Row className="mb-3"/>

                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <img src={q4_pic} className="my-3" alt="A temporary" width={350} height={300}/>
                            </div>
                        </div>
                    </div>
                    
                    <Row className="my-5"/>
                    <Row className="my-4"/>
                    <Row className="mb-3"/>

                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <img src={q5_pic} className="my-3" alt="A temporary" width={350} height={300}/>
                            </div>
                        </div>
                    </div>
                    
                    <Row className="my-5"/>
                    <Row className="my-4"/>
                    <Row className="mb-3"/>

                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <img src={q6_pic} className="my-3" alt="A temporary" width={350} height={300}/>
                            </div>
                        </div>
                    </div>
                    
                    <Row className="my-5"/>
                    <Row className="my-4"/>
                    <Row className="mb-3"/>

                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <img src={q7_pic} className="my-3" alt="A temporary" width={350} height={300}/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm="1"/>
                <Col sm="10">
                    <hr style={{ border: "4px solid white", width: "100%", opacity:1}} className="my-5" />
                </Col>
            </Row>

            <Row>
                <Col sm="1" />
                <Col sm="2">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <Row>
                                    <Col sm = "1"/>
                                    <Col sm = "4">
                                        <Button variant = "outline-danger" disabled = {progress!==100} onClick={() => changePage("AnswersD")}>Get Answers</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm = "1"/>
                <Col sm="10">
                    <hr style={{ border: "4px solid white", width: "100%", opacity:1}} className="my-5" />
                </Col>
            </Row>
        </div>
    )
}