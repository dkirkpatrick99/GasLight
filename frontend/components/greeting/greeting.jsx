
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import GreetingCarouselContainer from './greeting_carousel_container'
import Slider from "react-slick";

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }


  render() {

    const featured = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)"
    };

    return(
      <div>

        <div className="featured-carousel">
        <Slider {...featured}>
          <div className="home-slide">
            <a href="#" className="featured-product">
              <div className="featured-image featured-image1">
              </div>
            </a>
          </div>
          <div className="home-slide">
            <a href="#" className="featured-product">
              <div className="featured-image featured-image2">
              </div>
            </a>
          </div>
          <div className="home-slide">
            <a href="#" className="featured-product">
              <div className="featured-image featured-image3">
              </div>
            </a>
          </div>
        </Slider>
      </div>

        <div className="search-icons">
          <div className="icon-container">
            <div className="create-image"></div>
            <h1>Which categories interest you?</h1>
            <h3>Discover projects just for you and get great recommendations when you select your interests.</h3>
            <div className="icons">
                <div className="inner-icon">
              <a href="/campaigns">
                  <i class="fas fa-home"></i>
              </a>
                  <j>HOME</j>
                </div>
                <div className="inner-icon">
              <a href="/campaigns">
                  <i class="fas fa-mobile-alt"></i>
              </a>
                  <j>ACCESSORIES</j>
                </div>
                <div className="inner-icon">
              <a href="/campaigns">
                  <i class="fas fa-hiking"></i>
              </a>
                  <j>TRAVEL</j>
                </div>
                <div className="inner-icon">
              <a href="/campaigns">
                  <i class="fas fa-heartbeat"></i>
              </a>
                  <j>FITNESS</j>
                </div>
                <div className="inner-icon">
              <a href="/campaigns">
                  <i class="fas fa-headphones"></i>
              </a>
                  <j>AUDIO</j>
                </div>
                <div className="inner-icon">
              <a href="/campaigns">
                  <i class="fas fa-video"></i>
              </a>
                  <j>FILM</j>
                </div>
            </div>
          </div>
        </div>

        <div className="content-carousel">
          <div className="popular-projects">
            <h3>Popular Projects</h3>
            <div>
              <GreetingCarouselContainer /> 
            </div>
          </div>
        </div>

        <div className="all-images">
          <div className="image-blocks">
              <a href="#">
                <div className="image1 squre"></div>
                <div className="image-text">10 Cool & Clever Finds</div>
              </a>

              <a href="#">
                <div className="image2 squre" ></div>
                <div className="image-text">Team Favorites</div>
              </a>

              <a href="#">
                <div className="image3 squre"></div>
                <div className="image-text">InDemand Superstars</div>
              </a>
              
              <a href="#">
                <div className="image4 squre"></div>
                <div className="image-text">Production Ready</div>
              </a>
          </div>
        </div>


        
      </div>
    )
  }
};


export default Greeting;


