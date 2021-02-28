import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { auth } from "utils/nhost";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await auth.login(email, password);
    } catch (error) {
      return alert("Login failed!");
    }

    alert("Login successful!");
    history.push("/");
  }

  return (
    <Container fluid>
      <Row>
        <Col className="flex justify-center">
          <div className="flex flex-col mx-auto shadow p-5 my-12 mt-4">
            <div className="text-center h2">Login</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmailLogin">
                <Form.Control type="text" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="formPasswordLogin">
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
                </Button>
              <div>
                Don't have an account? <Link to="/register">Register</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}