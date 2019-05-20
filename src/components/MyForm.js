import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaWhatsapp, FaPhone} from 'react-icons/fa';
import { IconContext } from 'react-icons';


export const MyForm = () => (
    <div>
        <Row>
            <Col>
                <Card>
                <Card.Body>
                <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group controlId="formBasicComment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" row="4" placeholder="Enter Your Comment" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </Card.Body>      
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <IconContext.Provider value={{size: 25}}>
                        <Row>&nbsp;&nbsp;&nbsp;&nbsp;<FaEnvelope/>&nbsp;&nbsp;<p>ennodestias@gmail.com</p></Row>
                        <Row>&nbsp;&nbsp;&nbsp;&nbsp;<FaPhone/>&nbsp;&nbsp;<p>0856-0827-9264</p></Row>
                        <Row>&nbsp;&nbsp;&nbsp;&nbsp;<FaWhatsapp/>&nbsp;&nbsp;<p>0896-0827-9264</p></Row>
                        <Row>&nbsp;&nbsp;&nbsp;&nbsp;<FaFacebook/>&nbsp;&nbsp;<p>Enno Destias</p></Row>
                        <Row>&nbsp;&nbsp;&nbsp;&nbsp;<FaTwitter/>&nbsp;&nbsp;<p>ennodstsr</p></Row>
                        <Row>&nbsp;&nbsp;&nbsp;&nbsp;<FaInstagram/>&nbsp;&nbsp;<p>ennodstsr</p></Row>
                        </IconContext.Provider>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
        )