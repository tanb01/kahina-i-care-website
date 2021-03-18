import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Layout, {Main} from './Layout';

export default function HelpfulLinks() {
    return (
      <Layout>
          <Main>
              <Container className="contacts">

                  <Col className="flex justify-center">
                    <CardDeck>
                        <CardColumns>
                        <Card>
                            <Card.Body>
                            <Card.Title>Websites and associations</Card.Title>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <Card.Title>France Victimes</Card.Title>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/logo-france-victimes.png" style={{width:'150px'}} />
                                </Col>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <h5>Fil Santé Jeunes</h5>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/filsantejeunes.jpg" style={{width:'150px'}} thumbnail />
                                </Col>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <h5>Tous Bénévoles</h5>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/tousbenevoles.jpg" style={{width:'150px'}} />
                                </Col>
                                </Card>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title>Applications</Card.Title>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <h5>Street Alert</h5>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/streetalert.png" style={{width:'140px'}} />
                                </Col>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <h5>Petit Bambou</h5>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/petitbambou.png" style={{width:'150px'}} />
                                </Col>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <h5>App-Elles</h5>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/appelles.png" style={{width:'150px'}} />
                                </Col>
                                </Card>
                            </Row>
                            </Card.Body>
                        </Card> 
                        <Card>
                            <Card.Body>
                            <Card.Title>Specialists</Card.Title>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <p></p>
                                <h6>Trouvez un psychologue grâce au site Mon Psy</h6>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/monpsy.png" style={{width:'180px'}} />
                                </Col>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <p></p>
                                <h6>Réservez une consultation physique ou en vidéo avec un professionnel de santé sur Doctolib</h6>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/doctolib.png" style={{width:'180px'}} />
                                </Col>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                <Col className="Assos">
                                <p></p>
                                <h6>Renseignez-vous sur différents symptômes sur le site Doctissimo</h6>
                                </Col>
                                <Col>
                                <Card.Img className="imagescontacts" variant="top" src="/img/doctissimo.jpg" style={{width:'180px'}} />
                                </Col>
                                </Card>
                            </Row>
                            </Card.Body>
                        </Card>
                        </CardColumns>  
                    </CardDeck>
                  </Col>
              </Container>
          </Main>
      </Layout>
    )
  }