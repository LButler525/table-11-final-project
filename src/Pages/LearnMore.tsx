import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
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
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
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
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>1. Tell Us About You</Card.Title>
              <Card.Text>
                Answer fun, thought-provoking questions about your interests,
                values, and work style. Every response helps us tailor your results.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>2. AI-Powered Matching</Card.Title>
              <Card.Text>
                Our AI analyzes your answers against thousands of real-world
                career profiles to find the best fits—fast and accurately.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>3. Live Progress Tracker</Card.Title>
              <Card.Text>
                See your quiz completion in real time with a dynamic progress
                bar. Stay motivated as you move closer to your personalized results!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>4. Instant Insights</Card.Title>
              <Card.Text>
                Get clear recommendations with descriptions, education
                requirements, next steps, and resources—immediately after
                finishing the quiz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center border-0 shadow-sm" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
            <Card.Body>
              <Card.Title>Ready to Explore?</Card.Title>
              <Card.Text>
                Start the quiz anytime or return to the home page to learn more
                about how we're making career discovery fun and insightful.
              </Card.Text>
              <Button variant="primary" onClick={() => changePage("Home")}>
                Back to Home
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}