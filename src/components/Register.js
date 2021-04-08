import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "utils/nhost";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await auth.register(email, password);
    } catch (error) {
      return alert("Registration failed!");
    }

    alert("Registration successful!");
  }

  return (
    <Container className="register">
      <Row>
        <Col className="flex justify-center">
          <div className="text-center flex flex-col mx-auto shadow p-5 my-12 mt-4 mb-4">
            <img
              alt="Kahina I'Care Logo"
              src="/kahina-i-care-logo.png"
              width="200"
              height="200"
              className="d-inline-block align-top mb-4"
            />
            <div className="text-center h2 mb-4">Register</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmailRegistration">
                <Form.Control type="text" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formPasswordRegistration">
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
                </Button>
              <div>
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}