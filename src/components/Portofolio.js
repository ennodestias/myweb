import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Layout } from './Layout';
import { Jumbotron1 } from './Jumbotron1';
import web1 from '../assets/web1.png';
import pap from '../assets/pap.png';
import pap2 from '../assets/pap2.png';
import web2 from '../assets/web2.jpg';
import chelsea from '../assets/chelsea.jpg';
import de from '../assets/de.png';
import { Row, Col } from 'react-bootstrap';
import {FaFacebook, FaTwitter, FaInstagram, FaCopyright} from 'react-icons/fa';
import { IconContext } from 'react-icons';

export class Portofolio extends Component {
  render() {
    return (
      <div>
        <Jumbotron1/>
        <Layout>
          <br/>
          <br/>
          <center>
          <h1>My Latest Work</h1>
          </center>
           <br/>
         <CardDeck>
          <Card className="foto">
            <Card.Img variant="top" src={web1} />
          </Card>
          <Card className="foto">
            <Card.Img variant="top" src={pap} />
          </Card>
          <Card className="foto">
            <Card.Img variant="top" src={pap2} />
          </Card>
        </CardDeck>
        <br/>
        <CardDeck>
        <Card className="foto">
          <Card.Img variant="top" src={web2} />
        </Card>
        <Card className="foto">
          <Card.Img variant="top" src={de} />
        </Card>
        <Card className="foto">
          <Card.Img variant="top" src={chelsea} />
        </Card>
      </CardDeck>
      <br/>
      <br/>
      <div className="footer">
      <Row>
        <Col span={24}>
          <center>
            <IconContext.Provider value={{size: 30}}>
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagram/>
            </IconContext.Provider>
          </center>
        </Col>  
      </Row>
      <br/>   
      <center>
          <p>Made by Pure Heart&nbsp; <FaCopyright/> 2019</p>
        </center>   
    </div>
      </Layout>
      </div>
    )
  }
}

export default Portofolio;
