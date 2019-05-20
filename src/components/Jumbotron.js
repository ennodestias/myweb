import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import head from '../assets/head.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${head}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height:500px;
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

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <br/>
        <br/>
        <h1>Get In Touch</h1>
        <p>Ask me about this site or just say hello <br/>then I would love to hear from you</p>
      </Container>
    </Jumbo>
  </Styles>
)
