import React from 'react';
import {Carousel} from "react-bootstrap";

const Competition = (props) => {
    return (
        <Carousel.Item>
            <img className="d-block w-100" src={"https://amp.computerbild.de/imgs/1/1/1/2/4/2/8/3/Fussball-Bundesliga-658x370-53d2c834c2e290a0.jpg"} alt="competition"/>
            <Carousel.Caption>
                <h3>{props.name}</h3>
                <p>{props.area_name}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default Competition;