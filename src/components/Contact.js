import React from 'react';
import { MyForm } from './MyForm';
import { Jumbotron } from './Jumbotron';
import { Layout } from './Layout';
import {FaCopyright} from 'react-icons/fa';

export const Contact = () => (
  <div>
    <Jumbotron/>
    <Layout>
      <MyForm/>
      <br/>
      <br/>
      <div>
        <center>
          <p>Made by Pure Heart&nbsp; <FaCopyright/> 2019</p>
        </center>         
      </div> 
    </Layout>
  </div>
)
