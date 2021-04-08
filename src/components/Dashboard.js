import {React} from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Layout, { Main } from './Layout';
import { ROUTES, LINKS } from '../constants';
import { useState, useEffect, useCallback } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalQuizz from 'components/ModalQuizz'

//Fetch API
import axios from 'axios';
import Quotes from 'components/Quotes';
import Music from 'components/Music';
import Progression from 'components/Progression';
import Accomplishment from 'components/Accomplishment';


export default function Dashboard() {
    return (

        <Layout>
          <ModalQuizz/>
            <Row> <Col sm><Card className="card-dashboard-quotes" >

                <Card.Header> <h3 id="dash-quotes">Daily Quotes</h3></Card.Header>
                <Card.Body>
                    <Quotes />
                </Card.Body>
            </Card>
            </Col>
            </Row>

            <Container fluid={true} className="dashboard">
                <Row>

                    <Col sm>
                        <Card className="card-dashboard" style={{ width: '25rem' }}>
                            <Card.Header id="dash-goals"><h3>Goals</h3></Card.Header>
                            <Card.Body>
                              <Link to={ROUTES.goals}><Button className="button-goals" variant="primary" size="lg" variant="dark">START</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm><Card className="card-dashboard" style={{ width: '25rem' }}>
                        <Card.Header id="dash-prog"><h3>Progression</h3></Card.Header>
                        <Card.Body>
                            <Progression />
                        </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm> <Card className="card-dashboard" style={{ width: '25rem' }}>
                        <Card.Header id="dash-acc"><h3>Accomplishments</h3></Card.Header>

                        <Card.Body>
                            <Accomplishment></Accomplishment>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm>
                        <Card className="card-dashboard" style={{ width: '25rem' }}>
                            <Card.Header id="dash-mus"><h3>Music</h3></Card.Header>
                            <Card.Body>
                                <Music /> </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </Layout>
    )
}
