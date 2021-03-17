import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout, {Main} from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <Main>
        <Container id="page-container" className="aboutUs">
          <Row>
            <Col>
              <h3>Our Mission</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Protect your beloved ones</h5>
            </Col>
          </Row>
          <Row>
            <Col className="flex justify-center">
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>Our Team</Card.Title>
                  <Card.Img id="about-us-team-photo" variant="top" src="/img/i'care-team-photo.png" />
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
      </Main>
    </Layout>
  )
}