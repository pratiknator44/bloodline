"use client";

import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Bloodline</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <div className="bg-light py-5 mb-4 border-bottom">
          <Container className="py-5">
            <Row className="align-items-center">
              <Col lg={7}>
                <h1 className="display-4 fw-bold mb-4">Welcome to Bloodline</h1>
                <p className="lead mb-4">
                  A modern platform for creating and exploring family histories, lineage,
                  and understanding genetically inherited traits and diseases.
                </p>
                <div className="d-grid gap-3 d-md-flex justify-content-md-start">
                  <Button variant="primary" size="lg" className="px-4">
                    Get Started
                  </Button>
                  <Button variant="outline-secondary" size="lg" className="px-4">
                    Learn More
                  </Button>
                </div>
              </Col>
              <Col lg={5} className="d-none d-lg-block">
                <div className="bg-secondary bg-opacity-10 p-5 rounded-3 text-center">
                  <span className="display-1 text-muted">🌳</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="py-5">
          <Row className="g-4">
            <Col md={4}>
              <div className="p-4 border rounded-3 h-100">
                <h3>Family Tree</h3>
                <p>Visualize your ancestry with an interactive family tree creator.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4 border rounded-3 h-100">
                <h3>Genetic History</h3>
                <p>Track genetically inherited diseases and traits through generations.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-4 border rounded-3 h-100">
                <h3>Collaboration</h3>
                <p>Invite family members to contribute and share historical findings.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="py-4 mt-5 bg-dark text-light border-top">
        <Container className="text-center">
          <p className="mb-0">&copy; 2026 Bloodline Project. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}
