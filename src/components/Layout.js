import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from "utils/nhost";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useAuth } from "@nhost/react-auth";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

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

  const {user} = data;

  return (
    <div>
      <div>{user.display_name}</div>
      <div>
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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img
          alt=""
          src="./react-logo.svg"
          width="20"
          height="20"
          className="d-inline-block align-top"
        />{' '}
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
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
  return (<div>Footer</div>);
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