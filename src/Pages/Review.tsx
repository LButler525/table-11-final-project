import React, { useEffect } from "react";
import { Button, ButtonGroup, Form, Row, Col, ListGroup, Container} from "react-bootstrap";
import OverlappingBoxes from "./OverlappingBoxes";

interface ReviewProps {
    changePage:(input: string) => void;
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
}

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

export function jumpTo(questionId: string, changePage: (input: string) => void) {
    window.location.hash = `#${questionId}`;
    changePage('Basic');
};

export function Review({changePage, answers2}:ReviewProps) {    

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
    <div>
                <Container fluid>
                <Row>
                    <Col sm = "2"/>
                    <Col sm = "8">
                   <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                
                                    <h1>Review Page</h1>

                                      
                                    <ButtonGroup>
                                        {["Home", "Basic", "Detailed"].map(page => (
                                            <Button variant = "outline-danger" key={page} onClick={() => changePage(page)}>
                                                {page} Page
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col sm = "2"/>
                </Row>
                </Container>
    
                <Row>
                    <Col sm = "4" />
                    <Col sm = "4">
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                </Row>
    
                
                <Row>
                    <Col sm = "3"/>
                    <Col sm = "6">
                    <OverlappingBoxes text = {`Questions`}/>
                    </Col>
                </Row>

                <Row>
                    <Col sm = "4" />
                    <Col sm = "4">
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                </Row>
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <OverlappingBoxes text = {`Question 1 - ${QuestionList2[0]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div className = "my-2" style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[0].map(option => (
                                            <Form.Check
                                            className = "custom-checkbox"
                                            key={option}
                                            inline
                                            type="checkbox"
                                            label={option}
                                            value={option}
                                            checked={answers2.question1.includes(option)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>  
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question1', changePage)}}>Go to Question 1</Button>     
                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row>         
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 2 - ${QuestionList2[1]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div className = "my-1" style={{ fontSize: '0.85rem', textAlign: 'left' }}>
                                    <ListGroup horizontal>
                                        {questionOptions2[1].map(option => (
                                        <ListGroup.Item
                                        key={option}
                                        action
                                        active={answers2.question2.includes(option)}
                                        variant = "danger" 
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: answers2.question2.includes(option) ? "#cc2435" : "#e98585", // persistent color change
                                            color: answers2.question2.includes(option) ? "white" : "black", // persistent text color change
                                            borderColor: answers2.question2.includes(option) ? "#cc2435" : "#e98585", // persistent border color change
                                            pointerEvents: 'none'
                                          }}
                                        >
                                        {option}
                                        </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row> 
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question2', changePage)}}>Go to Question 2</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 3 - ${QuestionList2[2]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[2].map(option => (
                                        <Button
                                            variant={answers2.question3.includes(option) ? "danger" : "outline-danger"}
                                            style = {{pointerEvents: 'none'}}
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button  variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question3', changePage);
                }}>
                    Go to Question 3 </Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
                
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 4 - ${QuestionList2[3]}`}/>
                    </Col>
                    <Col sm="5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div className = "my-4" style={{ fontSize: '1.0rem', textAlign: 'left' }}>
                                    <Form.Group as = {Row} controlId="rating">
                                        <Col sm = "2"/>
                                        <Form.Label column sm="2">Rating:</Form.Label>
                                        <Col sm="6">
                                        <Form.Control
                                            style = {{pointerEvents: 'none'}}
                                            type="number"
                                            min="1"
                                            max="10"
                                            value={answers2.question4}
                                        />
                                        </Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question4', changePage);
                }}>
                    Go to Question 4
                </Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 5 - ${QuestionList2[4]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div className = "my-3" style={{ fontSize: '1rem', textAlign: 'left' }}>
                                    <Form.Group as={Row}>
                                    <Col sm = "2"/>
                                    <Col sm = "2">
                                        <Form.Label>Rating:</Form.Label>
                                    </Col>
                                    <Col sm="5">
                                        <Form.Range
                                        min="1"
                                        max="10"
                                        value={answers2.question5}
                                    />
                                    </Col>
                                    <Col sm="1"><strong>{answers2.question5}</strong></Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question5', changePage);
                }}>
                    Go to Question 5
                </Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 6 - ${QuestionList2[5]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'left' }}>
                                    <ListGroup horizontal>
                                        {questionOptions2[5].map(option => (
                                        <ListGroup.Item
                                            key={option}
                                            action
                                            active={answers2.question6.includes(option)} 
                                            variant = "danger" 
                                            style={{
                                                cursor: "pointer",
                                                backgroundColor: answers2.question6.includes(option) ? "#cc2435" : "#e98585", // persistent color change
                                                color: answers2.question6.includes(option) ? "white" : "black", // persistent text color change
                                                borderColor: answers2.question6.includes(option) ? "#cc2435" : "#e98585", // persistent border color change
                                                pointerEvents: 'none'
                                            }}
                                            >
                                            {option}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row> 
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question6', changePage)}}>Go to Question 6</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
    
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 7 - ${QuestionList2[6]}`}/>
                    </Col><Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[6].map(option => (
                                            <Form.Check
                                                className = "custom-checkbox"
                                                key={option}
                                                inline
                                                type="checkbox"
                                                label={option}
                                                value={option}
                                                checked={answers2.question7.includes(option)}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row> 
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question7', changePage)}}>Go to Question 7</Button>
    
                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 8 - ${QuestionList2[7]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div className = "my-4" style={{ fontSize: '1rem', textAlign: 'left' }}>
                                    <Form.Group as={Row}>
                                    <Col sm = "2"/>
                                    <Col sm = "2">
                                        <Form.Label>Rating:</Form.Label>
                                    </Col>
                                    <Col sm="5">
                                        <Form.Range
                                            min="1"
                                            max="10"
                                            value={answers2.question8}
                                        />
                                    </Col>
                                    <Col sm="2"><strong>{answers2.question8}</strong></Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question8', changePage)}}>Go to Question 8</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
                
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 9 - ${QuestionList2[8]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[8].map(option => (
                                                    <Button
                                                        variant={answers2.question9.includes(option) ? "danger" : "outline-danger"}
                                                        style = {{pointerEvents: 'none'}}
                                                    >
                                                        {option}
                                                    </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question9', changePage)}}>Go to Question 9</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 10 - ${QuestionList2[9]}`}/>
                    </Col>
                    <Col sm="5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div className = "my-4" style={{ fontSize: '1.0rem', textAlign: 'left' }}>
                                    <Form.Group as = {Row} controlId="rating">
                                    <Col sm = "2"/>
                                        <Form.Label column sm="2">Rating:</Form.Label>
                                        <Col sm="6">
                        <Form.Control
                            style = {{pointerEvents: 'none'}}
                            type="number"
                            min="1"
                            max="10"
                            value={answers2.question10}
                        />
                                        </Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question10', changePage)}}>Go to Question 10</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
                
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 11 - ${QuestionList2[10]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[10].map(option => (
                                                    <Button
                                                        variant={answers2.question11.includes(option) ? "danger" : "outline-danger"}
                                                        style = {{pointerEvents: 'none'}}
                                                    >
                                                        {option}
                                                    </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question11', changePage)}}>Go to Question 11</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 12 - ${QuestionList2[11]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[11].map(option => (
                                            <Form.Check
                                                className = "custom-checkbox"
                                                key={option}
                                                inline
                                                type="checkbox"
                                                label={option}
                                                value={option}
                                                checked={answers2.question12.includes(option)}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>  
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question12', changePage)}}>Go to Question 12</Button> 

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row>  

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 13 - ${QuestionList2[12]}`}/>
                    </Col>
                    <Col sm="5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div className = "my-4" style={{ fontSize: '1.0rem', textAlign: 'left' }}>
                                    <Form.Group as = {Row} controlId="rating">
                                        <Col sm = "2"/>
                                        <Form.Label column sm="2">Rating:</Form.Label>
                                        <Col sm="6">
                                        <Form.Control
                            style = {{pointerEvents: 'none'}}
                            type="number"
                            min="1"
                            max="10"
                            value={answers2.question13}
                        />
                                        </Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question13', changePage)}}>Go to Question 13</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                        <OverlappingBoxes text = {`Question 14 - ${QuestionList2[13]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '0.85rem', textAlign: 'left' }}>
                                    <ListGroup horizontal>
                                        {questionOptions2[13].map(option => (
                                        <ListGroup.Item
                                            key={option}
                                            action
                                            active={answers2.question14.includes(option)} 
                                            variant = "danger" 
                                            style={{
                                                cursor: "pointer",
                                                backgroundColor: answers2.question14.includes(option) ? "#cc2435" : "#e98585", // persistent color change
                                                color: answers2.question14.includes(option) ? "white" : "black", // persistent text color change
                                                borderColor: answers2.question14.includes(option) ? "#cc2435" : "#e98585", // persistent border color change
                                                pointerEvents: 'none'
                                            }}
                                            >
                                            {option}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row> 
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question14', changePage)}}>Go to Question 14</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 15 - ${QuestionList2[14]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[14].map(option => (
                                            <Form.Check
                                                className = "custom-checkbox"
                                                key={option}
                                                inline
                                                type="checkbox"
                                                label={option}
                                                value={option}
                                                checked={answers2.question15.includes(option)}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>  
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question15', changePage)}}>Go to Question 15</Button>  

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 16 - ${QuestionList2[15]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[15].map(option => (
                                                    <Button
                                                        variant={answers2.question16.includes(option) ? "danger" : "outline-danger"}
                                                        style = {{pointerEvents: 'none'}}
                                                    >
                                                        {option}
                                                    </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question16', changePage)}}>Go to Question 16</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 17 - ${QuestionList2[16]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div className = "my-4" style={{ fontSize: '1rem', textAlign: 'left' }}>
                                    <Form.Group as={Row}>
                                        <Col sm = "2"/>
                                        <Col sm = "2">
                                            <Form.Label>Rating:</Form.Label>
                                        </Col>
                                        <Col sm="5">
                                            <Form.Range
                                                min="1"
                                                max="10"
                                                value={answers2.question17}
                                            />
                                        </Col>
                                        <Col sm="2"><strong>{answers2.question17}</strong></Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question17', changePage)}}>Go to Question 17</Button>
                    
                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 
                
                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 18 - ${QuestionList2[17]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '0.85rem', textAlign: 'left' }}>
                                    <ListGroup horizontal>
                                        {questionOptions2[17].map(option => (
                                        <ListGroup.Item
                                            key={option}
                                            action
                                            active={answers2.question18.includes(option)} 
                                            variant = "danger" 
                                            style={{
                                                cursor: "pointer",
                                                backgroundColor: answers2.question18.includes(option) ? "#cc2435" : "#e98585", // persistent color change
                                                color: answers2.question18.includes(option) ? "white" : "black", // persistent text color change
                                                borderColor: answers2.question18.includes(option) ? "#cc2435" : "#e98585", // persistent border color change
                                                pointerEvents: 'none'
                                            }}
                                            >
                                            {option}
                                        </ListGroup.Item>
                                    ))}
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row> 
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question18', changePage)}}>Go to Question 18</Button>

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row> 

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 19 - ${QuestionList2[18]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[18].map(option => (
                                            <Form.Check
                                                className = "custom-checkbox"
                                                key={option}
                                                inline
                                                type="checkbox"
                                                label={option}
                                                value={option}
                                                checked={answers2.question19.includes(option)}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>  
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question19', changePage)}}>Go to Question 19</Button> 

                <Row>
                    <Col sm = "1" />
                    <Col sm = "10" >
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                    <Col sm = "1"/>
                </Row>  

                <Row  className="mb-3">
                    <Col sm = "1" />
                    <Col sm = "5">
                    <OverlappingBoxes text = {`Question 20 - ${QuestionList2[19]}`}/>
                    </Col>
                    <Col sm = "5">
                    <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                <div style={{ fontSize: '1.0rem', textAlign: 'center' }}>
                                    {questionOptions2[19].map(option => (
                                                    <Button
                                                        variant={answers2.question20.includes(option) ? "danger" : "outline-danger"}
                                                        style = {{pointerEvents: 'none'}}
                                                    >
                                                        {option}
                                                    </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Button variant= "danger" onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    jumpTo('question20', changePage)}}>Go to Question 20</Button>



                <Row>
                    <Col sm = "1" />
                    <Col sm = "10">
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                </Row>
    
                <Row>
                    <Col sm = "3" />
                    <Col sm = "3">
                    <Button variant= "danger" onClick={() => {
                        localStorage.setItem("returnFromReview", "true");
                        jumpTo('', changePage);
                    }}>
                        Return to Basic Quiz
                    </Button>
                    </Col>
                    <Col sm = "2">
                        <Button variant= "danger" onClick={() => {
                            window.location.hash = ``;
                            changePage("Answers")}}>Get Answers</Button>
                    </Col>
                </Row>
    
                <Row>
                    <Col sm = "1" />
                    <Col sm = "10">
                        <hr style = {{border : "3px solid white", opacity:1, width: "100%"}} className="my-3" />
                    </Col>
                </Row>
    
            </div>
        );
}