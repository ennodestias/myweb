import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import palmtree from '../assets/palmtree.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${palmtree}) no-repeat fixed bottom;
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

export const Jumb2 = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay">
        <center>
          <br/>
          <br/>
        <h1 style={{fontSize:'200px'}}>WELCOME</h1>
        </center>
      </div>
      <Container>
      </Container>
    </Jumbo>
  </Styles>
)
