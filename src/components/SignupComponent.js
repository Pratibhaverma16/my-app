import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class Signup extends Component {
  render(){

    return (
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Add New Employee</Card.Title>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Container>
  <Row>
    <Col><Form.Label>Enter First name</Form.Label>
    <Form.Control type="email" placeholder="ENTER FIRST NAME" /></Col>
    <Col><Form.Label>Enter Middle Name</Form.Label>
    <Form.Control type="email" placeholder="ENTER MIDDLE NAME" /></Col>
    <Col><Form.Label>Enter Last Name</Form.Label>
    <Form.Control type="email" placeholder="ENTER LAST NAME" /></Col>
  </Row>
</Container>
 </Form.Group>



    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Container>
  <Row>
    <Col><Form.Label>Designation</Form.Label>
    <Form.Control type="email" placeholder="ENTER " /></Col>
    <Col><Form.Label>Gender</Form.Label>
    <Form.Control type="email" placeholder="ENTER" /></Col>
    <Col><Form.Label>Date of birth</Form.Label>
    <Form.Control type="email" placeholder="YYYY-MM-DD" /></Col>
  </Row>
</Container>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Container>
  <Row>
    <Col><Form.Label>Date of joining(SSPL)</Form.Label>
    <Form.Control type="email" placeholder="YYYY-MM-DD " /></Col>
    <Col><Form.Label>Date of joining DRDO</Form.Label>
    <Form.Control type="email" placeholder="YYYY-MM-DD" /></Col>
    <Col><Form.Label>Date of Present rank</Form.Label>
    <Form.Control type="email" placeholder="YYYY-MM-DD" /></Col>
  </Row>
</Container>
  </Form.Group>















  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Internal no</Form.Label>
    <Form.Control type="email" placeholder="enter internal no" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Internet Mail-Id</Form.Label>
    <Form.Control type="email" placeholder="enter internet mail" />
    
  </Form.Group>
  


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>SSPL mail ID</Form.Label>
    <Form.Control type="email" placeholder="enter" />
    
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
    
  </Card.Body>
</Card>
    );
  }
}