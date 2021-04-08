import React from 'react';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
  return (
    <Container className="home">
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <Card.Body>
                <div>

                  <section class="jumbotron text-center" >


                    <div class="container" >
                      <h1 class="jumbotron-heading" id="protect" > Protect your beloved ones</h1>
                      <p id="lead-text-muted" >Before, during or after an aggression,we wish to accompany our users by giving them the means to protect themselves, to feel safe and to share their experience, in an environment of kindness, trust and love. </p>
                    </div>
                  </section>
                  <br />
                  <p classNam="caroussel-intro">The Kahina project includes the connected jewel which will send information about the user, the alert accessory and the I'Care platform. </p>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>

        </Col>
      </Row>

      <Container>


        <Row className="products ">


          <Carousel className="caroussel">


            <Carousel.Item >

              <Col md="4">
                <img src="/img/bracelet.jpg" width={800} height={300} />
                <Carousel.Caption id="caroussel-caption-j" > <h5 >Jewel</h5></Carousel.Caption>
              </Col>

            </Carousel.Item>

            <Carousel.Item>
              <Col md="4">
                <img src="/img/accessory.jpg" width={800} height={300} />
                <Carousel.Caption id="caroussel-caption"><h5>Accessory</h5></Carousel.Caption>
              </Col>
            </Carousel.Item>

            <Carousel.Item>
              <Col md="4">
                <img src="/img/platform.jpg" width={800} height={300} />
                <Carousel.Caption id="caroussel-caption"> <h5 >Platform</h5></Carousel.Caption>
                <br />
              </Col>
            </Carousel.Item>

          </Carousel>

        </Row>
        <br /> <br />

        <hr class="divider-h" />

        <br /> <br />

        <Row>
          <Col className="flex justify-center">
            <CardDeck>
              <Card >
                <Card.Body>

                  <hr class="dotted" />
                  <Card.Title>Feel safe wherever you are</Card.Title>
                  <Card.Text>
                    With Kahina products whenever a dangerous event occurs, it will be displayed in our localisation page. Whether you are a guest or a user, you can view freely all the danger around you.

                      <br /><br />
                    <Button variant="outline-info" style={{ borderRadius: '10px' }} >Learn more</Button>{''}

                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img src="/img/localisation.jpg" />
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


                  <Card.Img src="/img/gamification.jpg" />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>

                  <hr class="dotted" />

                  <Card.Title>A full specialized journey awaits you</Card.Title>
                  <Card.Text>
                    <p>
                      Funny and serious challenges to help you overcome your fears. Build your confidence and find joy in your daily life. View your progression, collect accomplishments and uncover your true potential.
            <br /><br />
                      <Button variant="outline-info" style={{ borderRadius: '10px' }} >Begin your journey now</Button>{''}


                    </p>
                  </Card.Text>
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
                  <hr class="dotted" />

                  <Card.Title>Cooking Lessons</Card.Title>
                  <Card.Text>
                    <p>
                      Whether you are a beginner or a master of cooking. Learn how to make healthy recipes, share your masterpieces with your beloved ones and rediscover the joy of cooking.
                      <br /><br />
                      <Button variant="outline-info" style={{ borderRadius: '10px' }} >Participate now</Button>{''}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img src="/img/cooking.jpg" />
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
                  <Card.Img src="/img/self-defense.jpg" />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <hr class="dotted" />

                  <Card.Title>Self-defense classes </Card.Title>
                  <Card.Text>
                    <p>
                      Discover how to protect yourself from assaults. Learn self-defense techniques and the behaviors to adopt to prevent attacks.
                      Consult our ressources about Avoidance, Awareness and Prevention...
                      <br /><br />
                      <Button variant="outline-info" style={{ borderRadius: '10px' }} >Start now </Button>{''}</p>
                  </Card.Text>
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
                  <hr class="dotted" />
                  <Card.Title>Counselling</Card.Title>
                  <Card.Text>
                    <p>
                      Get a glimpse at our selection of our theme oriented counselling. Whether it’s for your personal life or professional life, instruct yourself and master all the knowledge needed to face your day with confidence.
                      <br /><br />
                      <Button variant="outline-info" style={{ borderRadius: '10px' }} >Advice Me</Button>{''}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Img src="/img/counselling.jpg" />
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>

      </Container>

    </Container>
  )
}