import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from "utils/nhost";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useAuth } from "@nhost/react-auth";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import '../styles/custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const GET_USER_DATA = gql`
query getUserData($user_id: uuid!) {
  user: users_by_pk(id: $user_id) {
    id
    display_name
  }
}
`

export function UserHeader() {
  let history = useHistory();
  const { loading, error, data } = useQuery(GET_USER_DATA, {
    variables: {
      user_id: auth.getClaim("x-hasura-user-id"),
    },
  });

  if (loading && !data) {
    return <div>Loading...</div>
  }

  if (error) {
    console.error("error fetching users");
    console.error(error);
    return <div>Error...</div>;
  }

  const { user } = data;

  return (
    <div style={{ display: "inline" }}>
      <div>
        {user.display_name}
        <Button>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </Button>
        <Button variant="danger" onClick={() => {
          auth.logout();
          history.push("/login");
        }}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export function Header() {
  const { signedIn } = useAuth();

  return (
    <div>
      <Navbar className="header" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt="Kahina I'Care Logo"
            src="/kahina-i-care-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Kahina I'Care
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="mr-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div>
            {signedIn ? (
              <UserHeader />
            ) : (
                <>
                  <Link to="/login"><Button variant="primary">Login</Button></Link>
                  <Link to="/register"><Button variant="primary">Register</Button></Link>
                </>
              )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export function Main({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <div>
      <Container fluid className="footer">
        <Row>
          <Col xs="4">
              <h5>Contact Us</h5>
          </Col>
          <Col xs="4">
          <h5>Social Media</h5>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookSquare} />
          </Col>
          <Col xs="4">
          <h5>About Us</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Main children={children} />
      <Footer />
    </div>
  )
}