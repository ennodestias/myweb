import React from 'react';
import Article from './Article';
import CardDeck from 'react-bootstrap/CardDeck';
import { Jumbotron } from './Jumbotron';
import { Jumb2 } from './Jumb2';
import { Layout } from './Layout';
import { Row, Col } from 'react-bootstrap';
import {FaFacebook, FaTwitter, FaInstagram, FaCopyright} from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const Home = () => (
  <div>
    <Jumb2/>
    <br/>
      <Layout>
      <CardDeck>
        <Article height="670px" title="SUMMER FRUIT CAKE" desc="You’ll be enjoying this fruit cake all summer long once you try it! " gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/07/Summer-Sangria-Cake-4.jpg"/>
        <Article height="670px" title="KETO CHOCOLATE MOUSSE CAKE" desc="This keto chocolate mousse cake dessert cravings while you’re on the keto diet!" gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/11/Keto-Chocolate-Mousse-Cake-2-1.jpg"/>
        <Article height="670px" title="STRAWBERRY TUXEDO CAKE" desc="It’s made with tender chocolate and vanilla cake layers and loads of strawberries" gambar="https://tatyanaseverydayfood.com/wp-content/uploads/2018/02/Strawberry-Tuxedo-Cake-4.jpg"/>
      </CardDeck>
      </Layout>
      <br/>
      <Jumbotron />
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
