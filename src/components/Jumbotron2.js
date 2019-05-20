import React from 'react';
import { Jumbotron as Jumbo, Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import edu from '../assets/edu.jpg';
import {FaGraduationCap} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Styles = styled.div`
  .jumbo {
    background: url(${edu}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height:600px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron2 = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <center>
          <h1>Education</h1>
          <hr style={{width:"10", border:"1px solid white"}}/>
          <br/>
          <br/>
          <br/>
          <IconContext.Provider value={{size: 100}}>
          <Row>
            <Col>
            <h4>2011-2014</h4>
            <FaGraduationCap/>
            <h4>Junior High School 1 Nganjuk</h4>
            </Col>
            <Col>
            <h4>2014-2017</h4>
            <FaGraduationCap/>
            <h4>Senior High School 1 Nganjuk</h4>
            </Col>
            <Col>
            <h4>2017-Now</h4>
            <FaGraduationCap/>
            <h4>Universitas Gadjah Mada</h4>
            </Col>
          </Row>
          </IconContext.Provider>
        </center>
      </Container>
    </Jumbo>
  </Styles>
)
