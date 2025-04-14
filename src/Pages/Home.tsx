import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../App.css';
import LinkedInLogo from '../Images/LinkedIn.jpg';
import TwitterLogo from '../Images/twitter.jpg'; 
import IGLogo from '../Images/IG.jpg';
import YTBLogo from '../Images/ytb.jpg';
import Facebook from '../Images/facebook.jpg';

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

interface HomeProps {
    changePage:(input: string) => void;
}


export function Home({changePage}:HomeProps) { 
    const [key, setKey] = useState<string>(keyData); //for api key input

    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
      }
    
      //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
      function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
      }

    return(
        <div className="App" style={{ backgroundColor: "#F2F2F2", minHeight: "100vh", padding: "20px" }}>
          {/* Header Section */}
          <section style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1>Personalized Career Quiz</h1>
            <p>Take the basic or detailed quiz to find a career that fits your strengths and preferences</p>
            <Button variant="outline-dark" onClick={() => window.open("https://www.google.com/search?q=career+assessment+quizzes", "_blank")}>Find Other Quizzes</Button>
          </section>

          {/* Testimonials Section */}
          <section style={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
            <div style={{ maxWidth: "45%" }}>
              <p><strong>“</strong>I love how the quiz personalized my results—it really helped me understand which careers fit me best!<strong>”</strong></p>
              <p>—Anonymous Quiz Taker</p>
            </div>
            <div style={{ maxWidth: "45%" }}>
              <p><strong>“</strong>Navigating this quiz was effortless! The interface was intuitive, making it easy to move through questions.<strong>”</strong></p>
              <p>—Anonymous Quiz Taker</p>
            </div>
          </section>

          {/* Basic Quiz Section */}
          <section style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "12px", padding: "20px" }}>
              <div style={{ maxWidth: "60%", textAlign: "left", marginRight: "20px" }}>
                <h2>Basic Questions Quiz</h2>
                <p>A quick quiz with straightforward questions to help you explore career paths in just a few minutes</p>
                <Button variant="primary" onClick={() => changePage("Basic")}>Take Quiz (10–15 min)</Button>
              </div>
              <div>
                {/* Placeholder for image/icon */}
                <div style={{ fontSize: "40px" }}>📝</div>
              </div>
            </div>
          </section>

          {/* Detailed Quiz Section */}
          <section style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "12px", padding: "20px" }}>
              <div style={{ maxWidth: "60%", textAlign: "left", marginRight: "20px" }}>
                <h2>Detailed Questions Quiz</h2>
                <p>A deeper dive into your skills, values, and interests with varied question formats for a more personalized result</p>
                <Button variant="primary" onClick={() => changePage("Detailed")}>Take Quiz (30–40 min)</Button>
              </div>
              <div>
                {/* Placeholder for image/icon */}
                <div style={{ fontSize: "40px" }}>📋</div>
              </div>
            </div>
          </section>

          {/* Learn More Section */}
          <section style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "12px", padding: "20px" }}>
              <div style={{ maxWidth: "60%", textAlign: "left", marginRight: "20px" }}>
                <h2>Learn More About the Quiz</h2>
                <p>Discover how this quiz can guide your career choices—quick, insightful, and research-backed!</p>
              </div>
              <div>
                {/* Placeholder for image/icon */}
                <div style={{ fontSize: "40px" }}>📖</div>
              </div>
            </div>
          </section>

          {/* Social Icons Section */}
          <section style={{ textAlign: "center", marginBottom: "40px" }}>
            <p>Follow us</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
                style={{ width: "40px", height: "40px" }}
              />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={TwitterLogo}
                  alt="X"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src={IGLogo}
                alt="Instagram"
                style={{ width: "40px", height: "40px" }}
              />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src={YTBLogo}
                      alt="YouTube"
                      style={{ width: "40px", height: "40px" }}
                    />
              </a>
              <img
                src={Facebook}
                alt="facebook"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
          </section>

          {/* Footer Section */}
          <section style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3>Explore More</h3>
            <p>Join Thousands Who’ve Found Their Career Path! This quiz has helped countless users explore their strengths and discover careers that truly fit them. Start now!</p>
            <div>
              <Button variant="secondary" style={{ marginRight: "10px" }}>Privacy & Policy</Button>
              <Button variant="secondary">FAQs</Button>
            </div>
          </section>

          {/* Leave the API key section below untouched */}
          <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <br></br>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>
    )
}
