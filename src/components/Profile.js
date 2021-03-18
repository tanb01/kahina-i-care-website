import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout, { Main } from './Layout';

import { Link, useHistory } from 'react-router-dom';
import { auth } from "utils/nhost";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';

const GET_USER_DATA = gql`
query getUserData($user_id: uuid!) {
  user: users_by_pk(id: $user_id) {
    id
    display_name
    email
  }
}
`

const UPDATE_USER_DATA = gql`
  mutation updateUserData($display_name: String!) {
    updateUsername(type: $display_name) {
      display_name
    }
  }
`;

export default function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [updateEmail] = useMutation(UPDATE_USER_DATA);

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     await auth.register(email, password);
  //   } catch (error) {
  //     return alert("Registration failed!");
  //   }

  //   alert("Registration successful!");
  // }

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
  console.log('data', data);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log('display_name', username)
      await updateEmail({
        variables: {
          username
        }
      });
    } catch (error) {
      console.log(error)
      return alert("Update failed!");
    }

    alert("Update successful!");
  }

  return (
    <Layout>
      <Main>
        <Container className="profile">
          <Row>

            <Col className="flex justify-center">
              <div className="text-center flex flex-col mx-auto shadow p-5 my-12 mt-4 mb-4">
                <div className="text-center h2 mb-4">Profile</div>
                <Form>
                  <Form.Group as={Row} controlId="formDisplayUsername">
                    <Form.Label column sm="2">
                      Username
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={user.display_name} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formDisplayEmail">
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={user.email} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formDisplayPassword">
                    <Form.Label column sm="2">
                      Password
                  </Form.Label>
                    <Col sm="10">
                      <Form.Control type="password" readOnly defaultValue="password" />
                    </Col>
                  </Form.Group>
                </Form>


                {/* <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmailLogin">
                    <Form.Control type="text" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formPasswordLogin">
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                </Button>
                </Form> */}
              </div>
            </Col>

            <Col className="flex justify-center">
              <div className="text-center flex flex-col mx-auto shadow p-5 my-12 mt-4 mb-4">
                <div className="text-center h2 mb-4">Change Information</div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsernameRegistration">
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                  </Form.Group>

                  <Form.Group controlId="formEmailRegistration">
                    <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formPasswordRegistration">
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Update
                </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Main>
    </Layout>
  )
}