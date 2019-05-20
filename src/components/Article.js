import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import React, {Component} from 'react';

class Article extends Component {
  render(){
      return(
            <Card
                hoverable
                style={{ width: this.props.width, height: this.props.height }}>
                <Card.Img variant="top" src={this.props.gambar}/>              
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.desc}
                    </Card.Text>
                    <br/>
                    <Button variant="primary">See More</Button>
                </Card.Body>
            </Card>
             
              
        );
      }
    }

    export default Article;