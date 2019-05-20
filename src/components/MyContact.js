import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { Card, Col, Row } from 'react-bootstrap';
import {FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';

const { Meta } = Card;

class MyContact extends React.Component {
    render(){
        return(
          <Card  title="Contact Me"> 
          <div style={{ background: '#00000', padding: '20px' }}>
            <Row gutter={16}>
              <Col span={12}>
                <Card bordered={false}>
                  <p>&emsp; ennodestias@gmail.com</p>
                  <p><FaPhone/>&emsp; 089808279264</p>
                  <p><FaFacebook/>&emsp; Enno Destias</p>
                  <p><FaInstagram/>&emsp; ennodstsr</p>
                  <p><FaTwitter/>&emsp; ennodstsr</p>
                  
                </Card>
              </Col>
            </Row>
          </div>
          </Card>
        );
    }
}


export default MyContact;