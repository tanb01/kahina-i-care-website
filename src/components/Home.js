import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login() {
  return (
    <Container fluid className="home">
      <Row>
        <Col>
          <h1>Protect your beloved ones</h1>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <p>Before, during or after an aggression,we wish to accompany our users by giving them the means to protect themselves, to feel safe and to share their experience, in an environment of kindness, trust and love. The Kahina project includes the connected jewel which will send information about the user (location,...) , the alert accessory and the I'Care platform.</p>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <img src="/img/default.png" width="250px" />
          </Col>
          <Col md="4">
            <img src="/img/default.png" width="250px" />
          </Col>
          <Col md="4">
            <img src="/img/default.png" width="250px" />
          </Col>
        </Row>
        <Row>
          <Col className="flex justify-center">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>Feel safe wherever you are</Card.Title>
                  <Card.Text>
                    <p>
                      With Kahina products whenever a dangerous event occurs, it will be displayed in our localisation page. Whether you are a guest or a user, you can view freely all the danger around you.
                    </p>
                  </Card.Text>
                </Card.Body>  
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img src="/img/default.png" />
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col className="flex justify-center">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>Our Team</Card.Title>
                  <Card.Img src="/img/default.png" />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Our Story</Card.Title>
                  <Card.Text>
                    <p>
                      It was during the summer of 2020 that the Kahina I’Care project saw the light of day. Joanélia RAPSODE and Camille EUNG did their 3<sup>rd</sup> year internships with the start-up Kahina. Kahina’s aim is to create a bracelet which would launch an alert when someone is being assaulted.
                    </p>
                    <p>
                      Inspired by Kahina, Camille and Joanélia decided to build a team to contribute to their cause. Joined by five other members of which Emilie Cai, Léonie Cadot, Benjamin Tan, Jennifer Tecpanecatl and Cyril Bopoungo.
                    </p>
                    <p>
                      For the team’s 2020-2021 school year Multidisciplinary Team Project and to help Kahina and their community, the Kahina I’Care Project wishes to create a web application allowing people to be helped and supported throughout their lives. We wish to create a safe environment by accompanying and encouraging our users’ mental and physical wellbeing. This is an internal project of the Kahina start-up.{' '}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>

    </Container>
  )
}