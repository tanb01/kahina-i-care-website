import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Layout, {Main} from './Layout';
import { LINKS } from '../constants';
import '../styles/custom.css';


export default function Example() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
          <Container>
          <Modal show={show} onHide={handleClose} size="lg">
          <form>
            <Modal.Header closeButton>
              <Modal.Title>Theme Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body >Hi Justine ! You have to answer several questions so we can determine your journey on I'Care !</Modal.Body>

                <div class="modal-body">
                Question 1 : How successful are you in finding your motivation to start a project ?
                <div class="form-group" >
                <select class="form-control" id="question1" required>
                <option>Choose</option>
                <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
              </div>
                <div class="modal-body">
                Question 2 : Do you diversify your occupations in your day ?
                <div class="form-group" required>
                <select class="form-control" id="question2">
                <option>Choose</option>
                <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>
                <div class="modal-body">
                Question 3 : How much are you facing preoccupying and intrusive thoughts throughout your days ?
                <div class="form-group" required>
                <select class="form-control" id="question3">
                <option>Choose</option>
                <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>
                <div class="modal-body">
                Question 4 : Do you often have pain ?
                <div class="form-group" required>
                <select class="form-control" id="question4">
                <option>Choose</option>
                <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>
                <div class="modal-body">
                Question 5 : On a scale of 10, where do you rank in time spent with your family ?
                <div class="form-group" required>
                <select class="form-control" id="question5">
                <option>Choose</option>
                <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>
                <div class="modal-body">
                Question 6 : On a scale of 10, where do you rank in time spent with your friends ?
                <div class="form-group" required>
                <select class="form-control" id="question6">
                <option>Choose</option>
                <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>
                <div class="modal-body">
                Question 7 : Do you feel comfortable speaking in public ?
                <div class="form-group" required>
                <select class="form-control" id="question7">
                <option>Choose</option>
                <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>
                <div class="modal-body">
                Question 8 : On a scale of 1 to 10, how good are you at having a discussion with others ?
                <div class="form-group" required>
                <select class="form-control" id="question8">
                  <option>Choose</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>
                <div class="modal-body">
                Question 9 : Did you see/meet people in difficulty this week?
                <div class="form-group" required>
                <select class="form-control" id="question9">
                <option>Choose</option>
                <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>
                <div class="modal-body">
                Question 10 : Do you take initiatives to reach out to others ?
                <div class="form-group" required>
                <select class="form-control" id="question10">
                <option>Choose</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
                </div>
                </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type='submit' variant="primary" onClick={handleClose}>
                Submit
              </Button>
              
            </Modal.Footer>
            </form>
          </Modal>
          </Container>
        </>
      );
    }