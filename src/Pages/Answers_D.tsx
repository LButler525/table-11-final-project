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
      if (!answersD.question1.length) return; //way to verify it's ready

        async function OpenAiResponse() {
          try {
            const response = await openai.chat.completions.create({
              model: "gpt-4o-mini",
              messages: [
                {
                  role: "system",
                  content:
                    `You are a career expert that wishes to provide a list of viable career options for the user based off of answers to a career quiz. You should also provide suggestions on education or other means to reach the top career suggested. Please return the response in the following format: 
                    Based on your responses, here are some viable career options that align with your preferences and strengths:
                    ###  1. Remote Engineering Consultant

                    As an engineering consultant, you can leverage your engineering background while working from home. This role often involves advising companies on projects, solving complex problems, and collaborating with teams remotely.

                    **Education / Steps to Reach This Career:**
                    - A bachelor's degree in engineering (mechanical, civil, electrical, etc.) is typically required.
                    - Consider obtaining professional certifications or licenses (e.g., PE license) relevant to your engineering field.
                    - Build a portfolio of your work and establish a strong professional network.

                    ###  2. Project Manager in Engineering

                    A project manager oversees engineering projects, ensuring they are on track, within budget, and meeting specifications. This role can often be performed from home, depending on the company.

                    **Education / Steps to Reach This Career:**
                    - A degree in engineering or a related field is necessary.
                    - A master's degree in project management or an MBA can enhance your qualifications.
                    - Certifications such as PMP (Project Management Professional) can also be beneficial.

                    ###  3. Technical Writer 

                    A technical writer creates manuals, guides, and documentation tailored to engineering products or solutions. This job typically offers flexible remote work options.

                    **Education / Steps to Reach This Career:**
                    - A degree in engineering, communications, or English can be helpful.
                    - Familiarity with documentation tools and technical writing software is advantageous.
                    - Building a portfolio of writing samples can help you secure positions.

                    ###  4. Remote Quality Assurance Analyst 

                    Quality assurance analysts test products to ensure they meet required standards. This role is crucial in engineering sectors and can often be performed remotely.

                    **Education / Steps to Reach This Career:**
                    - A degree in engineering or a related technical field is useful.
                    - Consider certifications in software quality assurance or testing.
                    - Gaining experience in software development life cycles can enhance prospects.

                    ###  5. Virtual Engineering Trainer or Educator

                    With your background, you could educate others online through platforms that offer courses in engineering disciplines or soft skills related to working in teams. 

                    **Education / Steps to Reach This Career:**
                    - A degree in engineering is a must; an advanced degree can bolster your credibility.
                    - Experience in teaching or training, along with skill in creating engaging educational content, is essential.
                    - Familiarizing yourself with online teaching platforms and techniques can be beneficial.

                    ###  Summary

                    You have a unique skill set that combines engineering expertise with the desire for remote work, which opens up various paths. Pursuing further education, certifications, or gaining experience in these areas will set you on a successful trajectory in your chosen career.
                    `,
                },
                {
                  role: "user",
                  content: summrizeDetailResponse(answersD),
                },
              ],
            });
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
          } catch (err) {
            console.error("OpenAI error:", err);
            setResponse("Something went wrong with the OpenAI request.");
          }
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
                      <div className="card-body" style={{ whiteSpace: "pre-wrap", textAlign: "left"}}>
                      {response && (
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
                      </ReactMarkdown>)}
                      </div>
                  </div>
              </Col>
            </Row>
            
        </div>
    )
}