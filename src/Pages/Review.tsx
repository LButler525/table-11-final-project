import React, { useEffect } from "react";
import { Button, ButtonGroup, Form, Row, Col, ListGroup} from "react-bootstrap";

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

// const QuestionList = 
// ["I like working and creating things with my hands",
//      "On a scale to 1-10, how much do you enjoy collaborating with others (10 being the desire to always collaborate)",
//      "I want a job that is extremely secure with no risk",
//      "On a scale of 1-10, how much variability do you want in your day-to-day work (10 being extreme variability)",
//      "I like to oversee other people and manage them",
//      "I want religion to affect my carrer",
//      "I prefer to be methodical when making decisions and take my time"]

// const questionOptions = ["Strongly Agree", "Agree", "Neither Agree nor Disagree", "Disagree", "Strongly Disagree"];

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



export function Review({changePage, answers2}:ReviewProps) {    
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
                        <h3 className="text-start">Question 1 - {QuestionList2[0]}</h3>
                    </Col>
                    {questionOptions2[0].map(option => (
                        <Col key = {option} sm = "1">
                            <Form.Check
                                key={option}
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question1.includes(option)}
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
                        <h3 className="text-start">Question 2 - {QuestionList2[1]}</h3>
                    </Col>
                    <Col sm="5">
                            <ListGroup horizontal>
                                {questionOptions2[1].map(option => (
                                <ListGroup.Item
                                    key={option}
                                    action
                                    active={answers2.question2.includes(option)} 
                                    style={{ cursor: "pointer" }}
                                    >
                                    {option}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
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
                        <h3 className="text-start">Question 3 - {QuestionList2[2]}</h3>
                    </Col>
                        {questionOptions2[2].map(option => (
                                    <Col key = {option} sm = "1">
                                        <Button
                                            variant={answers2.question3.includes(option) ? "primary" : "outline-primary"}
                                        >
                                            {option}
                                        </Button>
                                    </Col>
                        ))}
                </Row>
                <Button onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    changePage("Basic");
                    jumpTo('question3');
                }}>
                    Go to Question 3 </Button>

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
                        <h3 className="text-start">Question 4 - {QuestionList2[3]}</h3>
                    </Col>
                    <Form.Label column sm="1">Rating:</Form.Label>
                    <Col sm="1">
                        <Form.Control
                            type="number"
                            min="1"
                            max="10"
                            value={answers2.question4}
                        />
                    </Col>
                </Row>
                <Button onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    changePage("Basic");
                    jumpTo('question4');
                }}>
                    Go to Question 4
                </Button>

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
                        <h3 className="text-start">Question 5 - {QuestionList2[4]}</h3>
                    </Col>
                    <Col sm = "1">
                        <Form.Label>Rating:</Form.Label>
                    </Col>
                    <Col sm="3">
                        <Form.Range
                            min="1"
                            max="10"
                            value={answers2.question5}
                        />
                    </Col>
                    <Col sm="1"><strong>{answers2.question5}</strong></Col>
                </Row>
                <Button onClick={() => {
                    localStorage.setItem("returnFromReview", "true");
                    changePage("Basic");
                    jumpTo('question5');
                }}>
                    Go to Question 5
                </Button>

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
                        <h3 className="text-start">Question 6 - {QuestionList2[5]}</h3>
                    </Col>
                    <Col sm="5">
                            <ListGroup horizontal>
                                {questionOptions2[5].map(option => (
                                <ListGroup.Item
                                    key={option}
                                    action
                                    active={answers2.question6.includes(option)} 
                                    style={{ cursor: "pointer" }}
                                    >
                                    {option}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row> 
                <Button onClick={() => jumpTo('question6')}>Go to Question 6</Button>

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
                        <h3 className="text-start">Question 7 - {QuestionList2[6]}</h3>
                    </Col>
                    {questionOptions2[6].map(option => (
                        <Col key = {option} sm = "1">
                            <Form.Check
                                key={option}
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question7.includes(option)}
                            />
                        </Col>
                        ))}
                </Row> 
                <Button onClick={() => jumpTo('question7')}>Go to Question 7</Button>
    
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
                        <h3 className="text-start">Question 8 - {QuestionList2[7]}</h3>
                    </Col>
                    <Col sm = "1">
                        <Form.Label>Rating:</Form.Label>
                    </Col>
                    <Col sm="3">
                        <Form.Range
                            min="1"
                            max="10"
                            value={answers2.question8}
                        />
                    </Col>
                    <Col sm="1"><strong>{answers2.question8}</strong></Col>
                </Row>
                <Button onClick={() => jumpTo('question8')}>Go to Question 8</Button>

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
                        <h3 className="text-start">Question 9 - {QuestionList2[8]}</h3>
                    </Col>
                        {questionOptions2[8].map(option => (
                                    <Col key = {option} sm = "1">
                                        <Button
                                            variant={answers2.question9.includes(option) ? "primary" : "outline-primary"}
                                        >
                                            {option}
                                        </Button>
                                    </Col>
                        ))}
                </Row>
                <Button onClick={() => jumpTo('question9')}>Go to Question 9</Button>

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
                        <h3 className="text-start">Question 10 - {QuestionList2[9]}</h3>
                    </Col>
                    <Form.Label column sm="1">Rating:</Form.Label>
                    <Col sm="1">
                        <Form.Control
                            type="number"
                            min="1"
                            max="10"
                            value={answers2.question10}
                        />
                    </Col>
                </Row>
                <Button onClick={() => jumpTo('question10')}>Go to Question 10</Button>

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
                        <h3 className="text-start">Question 11 - {QuestionList2[10]}</h3>
                    </Col>
                        {questionOptions2[10].map(option => (
                                    <Col key = {option} sm = "1">
                                        <Button
                                            variant={answers2.question11.includes(option) ? "primary" : "outline-primary"}
                                        >
                                            {option}
                                        </Button>
                                    </Col>
                        ))}
                </Row>
                <Button onClick={() => jumpTo('question11')}>Go to Question 11</Button>

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
                        <h3 className="text-start">Question 12 - {QuestionList2[11]}</h3>
                    </Col>
                    {questionOptions2[11].map(option => (
                        <Col key = {option} sm = "1">
                            <Form.Check
                                key={option}
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question12.includes(option)}
                            />
                        </Col>
                        ))}
                </Row>  
                <Button onClick={() => jumpTo('question12')}>Go to Question 12</Button> 

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
                        <h3 className="text-start">Question 13 - {QuestionList2[12]}</h3>
                    </Col>
                    <Form.Label column sm="1">Rating:</Form.Label>
                    <Col sm="1">
                        <Form.Control
                            type="number"
                            min="1"
                            max="10"
                            value={answers2.question13}
                        />
                    </Col>
                </Row>
                <Button onClick={() => jumpTo('question13')}>Go to Question 13</Button>

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
                        <h3 className="text-start">Question 14 - {QuestionList2[13]}</h3>
                    </Col>
                    <Col sm="5">
                            <ListGroup horizontal>
                                {questionOptions2[13].map(option => (
                                <ListGroup.Item
                                    key={option}
                                    action
                                    active={answers2.question14.includes(option)} 
                                    style={{ cursor: "pointer" }}
                                    >
                                    {option}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row> 
                <Button onClick={() => jumpTo('question14')}>Go to Question 14</Button>

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
                        <h3 className="text-start">Question 15 - {QuestionList2[14]}</h3>
                    </Col>
                    {questionOptions2[14].map(option => (
                        <Col key = {option} sm = "1">
                            <Form.Check
                                key={option}
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question15.includes(option)}
                            />
                        </Col>
                        ))}
                </Row>  
                <Button onClick={() => jumpTo('question15')}>Go to Question 15</Button>  

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
                        <h3 className="text-start">Question 16 - {QuestionList2[15]}</h3>
                    </Col>
                        {questionOptions2[15].map(option => (
                                    <Col key = {option} sm = "1">
                                        <Button
                                            variant={answers2.question16.includes(option) ? "primary" : "outline-primary"}
                                        >
                                            {option}
                                        </Button>
                                    </Col>
                        ))}
                </Row>
                <Button onClick={() => jumpTo('question16')}>Go to Question 16</Button>

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
                        <h3 className="text-start">Question 17 - {QuestionList2[16]}</h3>
                    </Col>
                    <Col sm = "1">
                        <Form.Label>Rating:</Form.Label>
                    </Col>
                    <Col sm="3">
                        <Form.Range
                            min="1"
                            max="10"
                            value={answers2.question17}
                        />
                    </Col>
                    <Col sm="1"><strong>{answers2.question17}</strong></Col>
                </Row>
                <Button onClick={() => jumpTo('question17')}>Go to Question 17</Button>
                    
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
                        <h3 className="text-start">Question 18 - {QuestionList2[17]}</h3>
                    </Col>
                    <Col sm="5">
                            <ListGroup horizontal>
                                {questionOptions2[17].map(option => (
                                <ListGroup.Item
                                    key={option}
                                    action
                                    active={answers2.question18.includes(option)} 
                                    style={{ cursor: "pointer" }}
                                    >
                                    {option}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row> 
                <Button onClick={() => jumpTo('question18')}>Go to Question 18</Button>

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
                        <h3 className="text-start">Question 19 - {QuestionList2[18]}</h3>
                    </Col>
                    {questionOptions2[18].map(option => (
                        <Col key = {option} sm = "1">
                            <Form.Check
                                key={option}
                                inline
                                type="checkbox"
                                label={option}
                                value={option}
                                checked={answers2.question19.includes(option)}
                            />
                        </Col>
                        ))}
                </Row>  
                <Button onClick={() => jumpTo('question19')}>Go to Question 19</Button> 

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
                        <h3 className="text-start">Question 20 - {QuestionList2[19]}</h3>
                    </Col>
                        {questionOptions2[19].map(option => (
                                    <Col key = {option} sm = "1">
                                        <Button
                                            variant={answers2.question20.includes(option) ? "primary" : "outline-primary"}
                                        >
                                            {option}
                                        </Button>
                                    </Col>
                        ))}
                </Row>
                <Button onClick={() => jumpTo('question20')}>Go to Question 20</Button>



                <Row>
                    <Col sm = "1" />
                    <Col sm = "10">
                        <hr style = {{border : "2px solid black", width: "100%"}} className="my-3" />
                    </Col>
                </Row>
    
                <Row>
                    <Col sm = "3" />
                    <Col sm = "3">
                    <Button onClick={() => {
                        localStorage.setItem("returnFromReview", "true");
                        changePage("Basic");
                        jumpTo('');
                    }}>
                        Return to Basic Quiz
                    </Button>
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