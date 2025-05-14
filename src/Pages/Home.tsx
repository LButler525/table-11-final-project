import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import '../App.css';
import LinkedInLogo from '../Images/LinkedIn.png';
import TwitterLogo from '../Images/twitter.png'; 
import IGLogo from '../Images/IG.png';
import YTBLogo from '../Images/ytb.png';
import Facebook from '../Images/facebook.png';

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when we inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

interface HomeProps {
    changePage:(input: string) => void;
}


export function Home({changePage}:HomeProps) { 
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerWidth, setHeaderWidth] = useState<number>(0);
    const detailedRef = useRef<HTMLDivElement>(null);
    const [sectionWidth, setSectionWidth] = useState<number>(0);

    useEffect(() => {
      if (headerRef.current) {
        setHeaderWidth(headerRef.current.offsetWidth);
      }
      if (detailedRef.current) {
        setSectionWidth(detailedRef.current.offsetWidth);
      }
    }, []);

    const [key, setKey] = useState<string>(keyData); //for api key input

    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
      }
    
      //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
      function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
      }

      const tips = [
        "Did you know? 70% of jobs are filled through networking—so connect with peers!",
        "Fun Fact: Candidates with optimized profiles are 30% more likely to be contacted by recruiters.",
        "Tip: Tailoring your resume to each job can boost your chances by up to 50%.",
        "Insight: Hiring managers spend an average of 6 seconds reviewing a resume—make those seconds count.",
        "Reminder: 85% of hiring managers use LinkedIn to vet candidates—keep your profile updated.",
        "Fact: Practicing mock interviews improves interview performance by up to 60%.",
        "Career Tip: Internships increase your chance of a full-time offer by 70%.",
        "Insight: Soft skills like communication and adaptability rank among the top traits employers seek.",
        "Stat: People who set clear career goals are 10x more likely to achieve them.",
        "Tip: Adding quantifiable results to your resume (e.g., 'increased sales by 20%') makes a big impact."
      ];
    const [basicTipIndex, setBasicTipIndex] = useState(0);
    const [detailedTipIndex, setDetailedTipIndex] = useState(0);
    const [basicHovered, setBasicHovered] = useState(false);
    const [detailedHovered, setDetailedHovered] = useState(false);
    return(
        <div className="App" style={{ minHeight: "100vh", padding: "20px" }}>
          {/* Header Section */}
          <div className="box-wrapper" ref={headerRef}>
            <div className="box-background">
              <div className="box-foreground">
          <section style={{ textAlign: "center", marginBottom: "0px" }}>
            <h1>Personalized Career Quiz</h1>
            <p>Take the basic or detailed quiz to find a career that fits your strengths and preferences</p>
            <Button variant="outline-danger" onClick={() => window.open("https://www.google.com/search?q=career+assessment+quizzes", "_blank")}>Find Other Quizzes</Button>
          </section>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="box-wrapper" style={headerWidth ? { width: headerWidth } : undefined}>
            <div className="box-background">
              <div className="box-foreground">
          <section style={{ display: "flex", justifyContent: "space-around", marginBottom: "0px" }}>
            <div style={{ maxWidth: "45%" }}>
              <p className="testimonial-text"><strong>“</strong>I love how the quiz personalized my results—it really helped me understand which careers fit me best!<strong>”</strong></p>
              <p className="testimonial-author">—Anonymous Quiz Taker</p>
            </div>
            <div style={{ maxWidth: "45%" }}>
              <p className="testimonial-text"><strong>“</strong>Navigating this quiz was effortless! The interface was intuitive, making it easy to move through questions.<strong>”</strong></p>
              <p className="testimonial-author">—Anonymous Quiz Taker</p>
            </div>
          </section>
              </div>
            </div>
          </div>

          {/* Basic Quiz Section */}
          <div
            className="box-wrapper"
            style={sectionWidth ? { width: sectionWidth } : undefined}
            onMouseEnter={() => { setBasicTipIndex(Math.floor(Math.random() * tips.length)); setBasicHovered(true); }}
            onMouseLeave={() => setBasicHovered(false)}
          >
            <div className="box-background">
              <div className="box-foreground">
          <section style={{ marginBottom: "0px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
              <div style={{ maxWidth: "60%", textAlign: "left", marginRight: "20px" }}>
                <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>Basic Questions Quiz</h2>
                <p style={{ fontWeight: 400, fontSize: '1rem' }}>A quick quiz with straightforward questions to help you explore career paths in just a few minutes</p>
                <Button variant="outline-danger" onClick={() => changePage("Basic")}>Take Quiz (10–15 min)</Button>
              </div>
              <div style={{ marginLeft: 'auto', maxWidth: '30%', textAlign: 'right' }}>
                {basicHovered && (
                  <span style={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    display: 'block'
                  }}>
                    {tips[basicTipIndex]}
                  </span>
                )}
              </div>
            </div>
          </section>
              </div>
            </div>
          </div>

          {/* Detailed Quiz Section */}
          <div
            className="box-wrapper"
            ref={detailedRef}
            style={{ width: 'calc(100% - 20px)', margin: '20px auto' }}
            onMouseEnter={() => { setDetailedTipIndex(Math.floor(Math.random() * tips.length)); setDetailedHovered(true); }}
            onMouseLeave={() => setDetailedHovered(false)}
          >
            <div className="box-background">
              <div className="box-foreground">
          <section style={{ marginBottom: "0px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
              <div style={{ maxWidth: "60%", textAlign: "left", marginRight: "20px" }}>
                <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>Detailed Questions Quiz</h2>
                <p style={{ fontWeight: 400, fontSize: '1rem' }}>A deeper dive into your skills, values, and interests with varied question formats for a more personalized result</p>
                <Button variant="outline-danger" onClick={() => changePage("Detailed")}>Take Quiz (30–40 min)</Button>
              </div>
              <div style={{ marginLeft: 'auto', maxWidth: '30%', textAlign: 'right' }}>
                {detailedHovered && (
                  <span style={{
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    display: 'block'
                  }}>
                    {tips[detailedTipIndex]}
                  </span>
                )}
              </div>
            </div>
          </section>
              </div>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="box-wrapper interactive-box" style={sectionWidth ? { width: sectionWidth } : undefined}>
            <div className="box-background">
              <div className="box-foreground">
          <section style={{ marginBottom: "0px" }}>
            <div
              onClick={() => changePage("LearnMore")}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
            >
              <div style={{ maxWidth: "60%", textAlign: "left", marginRight: "20px" }}>
                <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>Learn More About the Quiz</h2>
                <p style={{ fontWeight: 400, fontSize: '1rem' }}>
                  Discover how this quiz can guide your career choices—quick,
                  insightful, and research-backed!
                </p>
              </div>
              <div>
                {/* Placeholder for image/icon */}
                <div style={{ fontSize: "40px" }}>📖</div>
              </div>
            </div>
          </section>
              </div>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="box-wrapper">
            <div className="box-background">
              <div className="box-foreground">
          <section style={{ textAlign: "center", marginBottom: "0px" }}>
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
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src={Facebook}
                alt="facebook"
                style={{ width: "40px", height: "40px" }}
              />
              </a>
            </div>
          </section>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="box-wrapper">
            <div className="box-background">
              <div className="box-foreground">
          <section style={{ textAlign: "center", marginBottom: "0px" }}>
            <h3>Explore More</h3>
            <p>Join Thousands Who’ve Found Their Career Path! This quiz has helped countless users explore their strengths and discover careers that truly fit them. Start now!</p>
            <div>
              <Button variant="outline-danger" style={{ marginRight: "10px" }}>Privacy & Policy</Button>
              <Button variant="outline-danger">FAQs</Button>
            </div>
          </section>
              </div>
            </div>
          </div>

          {/* Leave the API key section below untouched */}
          <Form>
            <Form.Label style={{ color: "#ffffff" }}>API Key:</Form.Label>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <br></br>
            <Button variant="outline-danger" onClick={handleSubmit}>Submit</Button>
          </Form>
        </div>
    )
}
