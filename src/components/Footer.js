import React from 'react';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { LINKS } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return (
    <Container fluid className="footer align-items-center">
      <Row className="justify-content-center">
        <Col>
          <a href={LINKS.linkedin} className="footerLink">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </Col>
        <Col>
          <a href={LINKS.instagram} className="footerLink">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </Col>
        <Col>
          <a href={LINKS.facebook} className="footerLink">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
          </a>
        </Col>
        <Col>
          <a href={LINKS.email} className="footerLink">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}