import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout, { Main } from '../components/Layout';
import { Jumbotron } from 'react-bootstrap';

export default function AboutUs() {
  return (
    <Layout>
      <Main>
        <Container className="aboutUs">
          <Row>
            <Col>
              <Jumbotron>
                <h3 class="underlined-color-title">Our Mission</h3>
                <h5>"Protect your beloved ones"</h5>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col className="flex justify-center">
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title class="secondary-title">Our Team</Card.Title>
                    <hr />
                    <Card.Img id="about-us-team-photo" variant="top" src="/img/i'care-team-photo.png" />
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title class="secondary-title">Our Story</Card.Title>
                    <hr />
                    <Card.Text>
                      It was during the summer of 2020 that the Kahina I’Care project saw the light of day. Joanélia RAPSODE and Camille EUNG did their 3<sup>rd</sup> year internships with the start-up Kahina. Kahina’s aim is to create a bracelet which would launch an alert when someone is being assaulted.
                      </Card.Text>
                    <Card.Text>
                      Inspired by Kahina, Camille and Joanélia decided to build a team to contribute to their cause. Joined by five other members of which Emilie Cai, Léonie Cadot, Benjamin Tan, Jennifer Tecpanecatl and Cyril Bopoungo.
                      </Card.Text>
                    <Card.Text>
                      For the team’s 2020-2021 school year Multidisciplinary Team Project and to help Kahina and their community, the Kahina I’Care Project wishes to create a web application allowing people to be helped and supported throughout their lives. We wish to create a safe environment by accompanying and encouraging our users’ mental and physical wellbeing. This is an internal project of the Kahina start-up.{' '}
                    </Card.Text>
                    <Card.Text>
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