import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {AnimateOnChange} from "react-animation"
class Landing extends Component {

    state = {
        changeable: null,
    }
    componentDidMount() {
        const texts = ["HEROES","AWESOME","FANTASY"];
        let counter = 0;
        setInterval(() => {
            this.setState({ changable: texts[counter]})
            counter++;
            if(counter === 3) counter = 0 ;
        }, 3000)

    }
    render() {
        return (
            <div>
                <body>
                <header class="header_area" id="header">
                    <div class="container-fluid h-100">
                        <div class="row h-100">
                            <div class="col-12 h-100">
                                <nav class="h-100 navbar navbar-expand-lg align-items-center">
                                    <a class="navbar-brand" href="index.html">FOOTBALL FANTASY</a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#fancyNav" aria-controls="fancyNav" aria-expanded="false" aria-label="Toggle navigation"><span class="ti-menu"></span></button>
                                    <div class="collapse navbar-collapse" id="fancyNav">
                                        <ul class="navbar-nav ml-auto">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a class="dropdown-item" href="index.html">Home</a>
                                                    <a class="dropdown-item" href="static-page.html">Static Page</a>
                                                    <a class="dropdown-item" href="contact.html">Contact</a>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Work</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="static-page.html">Blog</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Shop</a>
                                            </li>
                                            <li class="nav-item">
                                                <a  class="nav-link" href="/login">Login/Signup</a>
                                            </li>
                                        </ul>
                                        <div class="fancy-search-and-shop-area">
                                            <a id="search-btn" href="#"><i class="icon_search" aria-hidden="true"></i></a>
                                            <a id="shop-btn" href="#"><i class="icon_bag_alt" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="fancy-hero-area bg-img bg-overlay image-landing" >
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-12">
                                <div class="fancy-hero-content text-center">
                                    <div className="row align-items-center">
                                        <div className="col-3 offset-3 justify-content-end">
                                           <h2 className="whiteText">WE ARE ...</h2>
                                        </div>
                                        <div className="col-2 justify-content-start">
                                            <AnimateOnChange
                                                style={{display:"block"}}
                                                animationIn="bounceIn"
                                                animationOut="bounceOut"
                                                durationOut={500}
                                            >
                                                <h2>{this.state.changable}</h2>
                                            </AnimateOnChange>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-5">
                                        <div className="col-6 offset-3 justify-content-center">
                                            <h6 className="whiteText text-center">
                                                With over 6 million players, Fantasy Premier League is the biggest Fantasy Football game in the world. It’s FREE to play and you can win great prizes!
                                            </h6>
                                        </div>
                                    </div>



                                    <a href="#" class="btn fancy-btn fancy-active">About Us</a>
                                    <a href="#" class="btn fancy-btn">Get a quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fancy-top-features-area bg-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="fancy-top-features-content">
                                    <div class="row no-gutters">
                                        <div class="col-12 col-md-4">
                                            <div class="single-top-feature">
                                                <h5><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Reliability</h5>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="single-top-feature">
                                                <h5><i class="fa fa-clock-o" aria-hidden="true"></i> Expertise</h5>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="single-top-feature">
                                                <h5><i class="fa fa-diamond" aria-hidden="true"></i> Quality</h5>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </body>
            </div>
        );
    }
}

export default Landing;