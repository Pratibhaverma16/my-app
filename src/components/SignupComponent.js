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
<Card style={{ marginTop:'8vh'}}>
  
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
    <Container>
  <Row>
    <Col><Form.Label>Internal No</Form.Label>
    <Form.Control type="email" placeholder="enter internal no " /></Col>
    <Col><Form.Label>Mobile No</Form.Label>
    <Form.Control type="email" placeholder="enter mobile no" /></Col>
    <Col><Form.Label>Permanent Address</Form.Label>
    <Form.Control type="email" placeholder="enter address" /></Col>
  </Row>
</Container>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Container>
  <Row>
    <Col><Form.Label>Cadre</Form.Label>
    <Form.Control type="email" placeholder="-Select-" /></Col>
    <Col><Form.Label>Place of Posting</Form.Label>
    <Form.Control type="email" placeholder="SSPL" /></Col>
    <Col><Form.Label>Present Address</Form.Label>
    <Form.Control type="email" placeholder="enter address" /></Col>
  </Row>
</Container>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Container>
  <Row>
    <Col><Form.Label>Internet Mail-ID</Form.Label>
    <Form.Control type="email" placeholder="enter internet mail" /></Col>
    <Col><Form.Label>SSPL Mail-ID</Form.Label>
    <Form.Control type="email" placeholder="enter SSPL mail" /></Col>
    <Col><Form.Label>Group/Division</Form.Label>
    <Form.Control type="email" placeholder="-Select" /></Col>
  </Row>
</Container>
  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Container>
  <Row>
    <Col><Form.Label>Group Officer</Form.Label>
    <Form.Control type="email" placeholder="-Select-" /></Col>
    <Col><Form.Label>Division Officer</Form.Label>
    <Form.Control type="email" placeholder="-Select-" /></Col>
    <Col><Form.Label>Technical Director</Form.Label>
    <Form.Control type="email" placeholder="-Select-" /></Col>
  </Row>
</Container>
  </Form.Group>




  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Container>
  <Row>
    <Col><Form.Label>Images</Form.Label>
    <Form.Control type="email" placeholder="no file chosen" /><button>Choose File</button></Col>
    <Col><Form.Label>Enter ICNO</Form.Label>
    <Form.Control type="email" placeholder="Enter" /></Col>
    <Col><Form.Label>Remarks</Form.Label>
    <Form.Control type="email" placeholder="enter remarks" /></Col>
  </Row>
</Container>
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