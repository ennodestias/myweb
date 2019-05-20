import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { Layout } from './Layout';
import { DetailProfil } from './DetailProfil';
import { Jumbotron2 } from './Jumbotron2';
import {FaFacebook, FaTwitter, FaInstagram, FaCopyright} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Style = styled.div`
.banner{
  position: relative;
  top: 0;
  bottom: 0;
  height: 500px;
  width: 100%;
}
.overlay{
  position: absolute;
  top: 200px;
  background-color: white;
  width: 82%;
  height: 450px;
}
.inidiv{
  position: relative;
  left:0;
  top:0;
}
.poto{
  width: 290px;
  height: 310px;
  padding-Left: 50px;
  padding-Top: 0px;
}`
;

export const Profile = () => (
  <div>
    <div className="inidiv">
    <Style>
      <Image className="banner" src="https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" fluid />
      <Layout>
        <Card className="overlay">
        <Card.Header bg="primary"><h1>Hello!</h1></Card.Header>
        <br/>
        <Row>
          <Col xs="auto">
            <Image className="poto" src="https://scontent-lht6-1.cdninstagram.com/vp/1b40b86bfa6634df84cf5b76764d677f/5D0D8F1D/t51.2885-15/e35/42830824_2193103600969503_3295358884846072401_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MTg4MzQ2MzUyMDM1MjUyNzQ5Nw%3D%3D.2" rounded/>
          </Col>
          <Col xs>
            <DetailProfil/>
          </Col>
        </Row>
      </Card>
      </Layout>
    </Style>
    <br/>
    <br/>
    <br/>
    <Jumbotron2/>
    </div>
    <Layout>
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
