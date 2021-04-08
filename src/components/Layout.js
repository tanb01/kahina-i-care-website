import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from "utils/nhost";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useAuth } from "@nhost/react-auth";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { ROUTES } from '../constants';
import Footer from 'components/Footer';


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
    <div className="btn-group">
      <DropdownButton title={user.display_name}>
        <Dropdown.Item as={Link} to={ROUTES.profile}>Profile</Dropdown.Item>
        <Dropdown.Item as={Link} to={ROUTES.progression}>Progress</Dropdown.Item>
      </DropdownButton>
      <Button variant="danger" onClick={() => {
        auth.logout();
        history.push("/login");
      }}>
        Logout
      </Button>
    </div>
  );
}

export function Header() {
  const { signedIn } = useAuth();

  return (
    <div>
      <Navbar className="header" expand="lg">
        <Navbar.Brand as={Link} to={ROUTES.home}>
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
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={ROUTES.home}>Home</Nav.Link>
            {signedIn ? (<Nav.Link as={Link} to={ROUTES.dashboard}>Dashboard</Nav.Link>) : ''}
            <Nav.Link as={Link} to={ROUTES.helpfulLinks}>Helpful Links</Nav.Link>
            <Nav.Link as={Link} to={ROUTES.aboutUs}>About Us</Nav.Link>
            <NavDropdown title="Change Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="english">English</NavDropdown.Item>
              <NavDropdown.Item href="french">French</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="mr-auto">
          </Form>
          <div>
            {signedIn ? (
              <UserHeader />
            ) : (
              <>
                <Link to={ROUTES.login}><Button variant="primary">Login</Button></Link>
                <Link to={ROUTES.register}><Button variant="primary">Register</Button></Link>
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



export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Main children={children} />
      <Footer />
    </div>
  )
}
