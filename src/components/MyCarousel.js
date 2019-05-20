import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.kecil{
    height: 600px;
}`;
class MyCarousel extends React.Component {
    render(){
        return(
            <Styles>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100 kecil"
            src="https://images4.alphacoders.com/288/288256.png"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Ini deskripsi ya nanti.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 kecil"
            src="https://www.wallpaperflare.com/static/308/903/804/digital-art-minimalism-simple-simple-background-wallpaper.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Ini juga deskripsi ya nanti</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </Styles>
    )
}
    }

export default MyCarousel;