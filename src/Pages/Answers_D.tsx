import React, { useEffect, useState, useMemo } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
//import { Form } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import OpenAI from "openai";
import { summrizeDetailResponse } from "./Detailed";
import loading_actual from '../Images/loading-actual.gif'
const key = localStorage.getItem("MYKEY") 
const apiKey = key ? JSON.parse(key) : null;
let Ran = false;




interface AnswersProps {
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
}


export function AnswersD({changePage, answersD}:AnswersProps) {  

    const [response, setResponse] = useState<string>("Loading...");
    
    const openai = useMemo(() => {
        return new OpenAI({
            apiKey: apiKey,
            dangerouslyAllowBrowser: true
        });
    }, []);

    useEffect(() => {
      if (!answersD.question1.length) return; //way to verify it's ready

        async function OpenAiResponse() {
          try {
            const response = await openai.chat.completions.create({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "system",
                  content:
                    `You are a career expert that wishes to provide a list of viable career options for the user based off of answers to a career quiz. You should also provide suggestions on education or other means to reach the top career suggested. Please return the response in the following format, however not necessarily the same careers: 
                    2-3 Sentence introduction summarizing the answers and introducting the career options to follow:
                    ###  1. Job 1

                    3-4 Sentence Description of the Job.

                    **Education / Steps to Reach This Career:**
                    - Degrees that are necessary or helpful for this job.
                    - Certifications or licenses that are necessary or helpful for this job.
                    - Other helpful actions to seek this career.

                    ###  1. Job 2

                    3-4 Sentence Description of the Job.

                    **Education / Steps to Reach This Career:**
                    - Degrees that are necessary or helpful for this job.
                    - Certifications or licenses that are necessary or helpful for this job.
                    - Other helpful actions to seek this career.

                    ###  1. Job 3

                    3-4 Sentence Description of the Job.

                    **Education / Steps to Reach This Career:**
                    - Degrees that are necessary or helpful for this job.
                    - Certifications or licenses that are necessary or helpful for this job.
                    - Other helpful actions to seek this career.

                    ###  1. Job 4

                    3-4 Sentence Description of the Job.

                    **Education / Steps to Reach This Career:**
                    - Degrees that are necessary or helpful for this job.
                    - Certifications or licenses that are necessary or helpful for this job.
                    - Other helpful actions to seek this career.

                    ###  1. Job 5

                    3-4 Sentence Description of the Job.

                    **Education / Steps to Reach This Career:**
                    - Degrees that are necessary or helpful for this job.
                    - Certifications or licenses that are necessary or helpful for this job.
                    - Other helpful actions to seek this career.

                    ###  Summary

                    A 3-4 sentence summary of the jobs as well as recommended actions/educations to pursue.
                    `,
                },
                {
                  role: "user",
                  content: summrizeDetailResponse(answersD),
                },
              ],
            });
            if (!Ran) {
              let raw = response.choices[0].message.content || "No content returned"
              let cleaned = raw
              .replace(/\n{3,}/g, "\n\n")
              .replace(/###([^\n])/g, "### $1")
              .replace(/(### .+?)\n(?!\n)/g, "$1\n\n");

              // 2️⃣ Move bold from after number to before number
              cleaned = cleaned.replace(
              /^(\d+)\.\s\*\*(.+?)\*\*/gm,
              (_, num, title) => `**${num}. ${title}**`
              );

              setResponse(cleaned);
              Ran = true;
            }
          } catch (err) {
            console.error("OpenAI error:", err);
            if (!Ran) setResponse("Something went wrong with the OpenAI request.");
          }
        }
    
        OpenAiResponse(); //Run
      }, [answersD, openai.chat.completions]);

    
    
    

    return(
        <div>
            <Container fluid>
                <Row className="mb-5">
                    <Col sm = "2"/>
                    <Col sm = "8">
                   <div className="box-wrapper">
                        <div className="box-background">
                            <div className="box-foreground">
                                
                                    <h2>Answers Page</h2>

                                      
                                    <ButtonGroup>
                                        {["Home", "Basic", "Detailed"].map(page => (
                                            <Button variant = "outline-danger" key={page} onClick={() => {changePage(page); Ran = false;}}>
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
              <Col sm = "1"/>
              <Col sm = "10">
              <div className="box-wrapper">
                <div className="box-background">
                  <div className="box-foreground">
                        <div style={{ fontSize: '1rem', textAlign: 'left'}}>
                          {(!Ran ? 
                          (
                          <div style={{ textAlign: 'center' }}>
                            <h3>Loading your Career Quiz Results!</h3>
                            <img src={loading_actual} alt="Working with Hands" width={900} height={507}/>
                          </div> 
                          )
                          :
                          (
                            <ReactMarkdown 
                              components={{
                                h3: ({ node, children, ...props }) => (
                                  <h3 {...props} style={{ color: 'black' }} id="Response Header 3">{children}</h3>
                                ),
                                h4: ({ node, children, ...props }) => (
                                  <h4 {...props} style={{ color: 'black' }} id="Response Header 4">{children}</h4>
                                ),
                                li: ({ node, ...props }) => <li {...props} style={{ color: 'black' }}/>,
                                strong: ({ node, ...props }) => (
                                  <strong style={{ color: 'black' }} {...props} />
                                ),
                              }}
                            >
                              {response}
                            </ReactMarkdown>))}
                        </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            
        </div>
    )
}