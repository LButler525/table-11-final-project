import React, { useEffect, useState, useMemo } from "react";
import { Button, Col, Row } from "react-bootstrap";
//import { Form } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import OpenAI from "openai";
import { summrizeDetailResponse } from "./Detailed";
const key = localStorage.getItem("MYKEY") 
const apiKey = key ? JSON.parse(key) : null;




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
        async function OpenAiResponse() {
          try {
            const response = await openai.chat.completions.create({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "system",
                  content:
                    "You are a career expert that wishes to provide a list of viable career options for the user based off of answers to a career quiz. You should also provide suggestions on education or other means to reach the top career suggested.",
                },
                {
                  role: "user",
                  content: summrizeDetailResponse(answersD),
                },
              ],
            });
    
            setResponse(
              response.choices[0].message.content || "No content returned."
            );
          } catch (err) {
            console.error("OpenAI error:", err);
            setResponse("Something went wrong with the OpenAI request.");
          }
          console.log(AnswersD);
        }
    
        OpenAiResponse(); //Run
      }, [answersD, openai.chat.completions]);

    
    

    

    return(
        <div>
            <h3>Answers Page</h3>
            <Button onClick={() => changePage("Home")}>Home Page</Button>
            <Button onClick={() => changePage("Basic")}>Basic Page</Button>
            <Button onClick={() => changePage("Detailed")}>Detailed Page</Button>

            <Row>
              <Col sm = "2" />
              <Col sm = "8">
                <div className="card mt-3">
                      <div className="card-body" style={{ whiteSpace: "pre-wrap" }}>
                      {response && (
                      <ReactMarkdown
                        components={{
                          h3: ({ node, ...props }) => (
                            <h3 {...props} style={{ color: 'black' }} id="Response Header 3">‍</h3>
                          ),
                          h4: ({ node, ...props }) => (
                            <h4 {...props} style={{ color: 'black' }} id="Response Header 4">‍</h4>
                          ),
                          li: ({ node, ...props }) => <li className="mb-1" {...props} style={{ color: 'black' }}/>,
                          strong: ({ node, ...props }) => (
                            <strong style={{ color: 'black' }} {...props} />
                          ),
                        }}
                      >
                        {response}
                      </ReactMarkdown>)}
                      </div>
                  </div>
              </Col>
            </Row>
            
        </div>
    )
}