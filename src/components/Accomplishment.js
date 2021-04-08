import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';
import { faHome,faCalendar, faAward,faBaseballBall,faBook,faAppleAlt,faEnvelope,faHandsHelping} from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

export default function Accomplishment() {
  return (
    <Container className="accomplishment">
      <Row>
        <Col><Badge variant="primary">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Badge></Col>
        <Col>  <Badge variant="success">
          <FontAwesomeIcon icon={faCalendar} size="2x" />
        </Badge></Col>
        <Col>  <Badge variant="danger">
          <FontAwesomeIcon icon={faAward} size="2x" />
        </Badge></Col>
        <Col>   <Badge variant="warning">
          <FontAwesomeIcon icon={faBaseballBall} size="2x" />
        </Badge></Col>
      </Row>
      <Row>
      </Row>
      <Row>
        <Col><Badge variant="light">
          <FontAwesomeIcon icon={faBook} size="2x" />
        </Badge></Col>
        <Col>  <Badge variant="dark">
          <FontAwesomeIcon icon={faAppleAlt} size="2x" />
        </Badge></Col>
        <Col>  <Badge variant="primary">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Badge></Col>
        <Col>   <Badge variant="success">
          <FontAwesomeIcon icon={faHandsHelping} size="2x" />
        </Badge></Col>
      </Row>
      <Row>
      </Row>
    </Container>

  )
}

