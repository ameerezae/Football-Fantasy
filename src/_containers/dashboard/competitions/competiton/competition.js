import React from 'react';
import {Carousel} from "react-bootstrap";

const Competition = (props) => {
    return (
        <Carousel.Item>
            <img className="d-block w-100" src={props.image} alt="competition"/>
            <Carousel.Caption>
                <h3>{props.name}</h3>
                <p>{props.area.name}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default Competition;