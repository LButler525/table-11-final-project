import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import '../App.css';

interface LearnMoreProps {
  changePage: (input: string) => void;
}

export function LearnMore({ changePage }: LearnMoreProps) {
  return (
    <Container style={{ padding: '40px' }}>
      {/* Hero Section */}
      <Row className="mb-5">
        <Col>
          <h1 style={{
            textAlign: 'center',
            marginBottom: '10px',
            fontWeight: 700,
            textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
          }}>
            How This Quiz Works
          </h1>
          <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#555' }}>
            Discover your ideal career path—powered by you, guided by AI.
          </p>
        </Col>
      </Row>

      {/* Features Grid */}
      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <div className="box-wrapper">
            <div className="box-background">
              <div className="box-foreground">
                <h2>1. Tell Us About You</h2>
                <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                  Answer fun, thought-provoking questions about your interests, values, and work style. Every response helps us tailor your results.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="box-wrapper">
            <div className="box-background">
              <div className="box-foreground">
                <h2>2. AI-Powered Matching</h2>
                <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                  Our AI analyzes your answers against thousands of real-world career profiles to find the best fits—fast and accurately.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="box-wrapper">
            <div className="box-background">
              <div className="box-foreground">
                <h2>3. Live Progress Tracker</h2>
                <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                  See your quiz completion in real time with a dynamic progress bar. Stay motivated as you move closer to your personalized results!
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="box-wrapper">
            <div className="box-background">
              <div className="box-foreground">
                <h2>4. Instant Insights</h2>
                <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                  Get clear recommendations with descriptions, education requirements, next steps, and resources—immediately after finishing the quiz.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="box-wrapper interactive-box">
            <div className="box-background">
              <div className="box-foreground">
                <h2>Ready to Explore?</h2>
                <p style={{ fontWeight: 400, fontSize: '0.9rem' }}>
                  Start the quiz anytime or return to the home page to learn more about how we're making career discovery fun and insightful.
                </p>
                <Button variant="outline-danger" onClick={() => changePage("Home")}>
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}