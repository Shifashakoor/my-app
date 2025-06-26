import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AlertDismissibleExample from './AlertDismissibleExample';
import TextControlsExample from './TextControlsExample';
import About from './About'; // ✅ new About component

const textareaBoxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f8f9fa',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? 'bg-dark text-light min-vh-100' : 'bg-light text-dark min-vh-100'}>
        <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">TextUtils</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
              <Button onClick={toggleDarkMode} variant={darkMode ? 'outline-light' : 'outline-dark'}>
                {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Alert */}
        <Container className="mt-4">
          <AlertDismissibleExample />
        </Container>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Container className="mt-5">
                <h2 className="mb-3">Fill Form</h2>
                <div
                  style={{
                    ...textareaBoxStyle,
                    backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa',
                    color: darkMode ? '#fff' : '#000',
                    border: darkMode ? '1px solid #555' : '1px solid #ccc',
                  }}
                >
                  <TextControlsExample />
                </div>
              </Container>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
