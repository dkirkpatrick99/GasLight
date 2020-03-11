
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
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
      {/* <div className="gray-out"></div> */}
      <div className="featured-carousel">
        <Slider {...featured}>
          <div className="home-slide">
            <NavLink to={'/campaigns/1'} className="featured-product">
              <div className="featured-image featured-image1"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="slide-title">Drop x THX Panda Headphones</div>
                    <div className="slide-desc">The World’s highest fidelity wireless headphones.</div>
                  </div>
                </div>
            </NavLink>
          </div>
          <div className="home-slide">
            <NavLink to={'/campaigns/2'} className="featured-product">
              <div className="featured-image featured-image2"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="slide-title">CIGA Design Z-Series Mechanical Titanium Watch</div>
                    <div className="slide-desc">Designed to highlight real men’s love of complexity with outstanding design and superb performance</div>
                  </div>
                </div>
            </NavLink>
          </div>
          <div className="home-slide">
            <NavLink to={'/campaigns/3'} className="featured-product">
              <div className="featured-image featured-image3"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="slide-title">V-Tex: 12 Feature Nanotech Shoe for all Seasons</div>
                    <div className="slide-desc">A mix of a slipper & a boot in one 12 feature all-weather waterproof breathable nanotech knit shoe</div>
                  </div>
                </div>
            </NavLink>
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
              <NavLink to={"/campaigns"}>
                  <i class="fas fa-home"></i>
              </NavLink>
                  <j>HOME</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/campaigns"}>
                  <i class="fas fa-mobile-alt"></i>
              </NavLink>
                  <j>ACCESSORIES</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/campaigns"}>
                  <i class="fas fa-hiking"></i>
              </NavLink>
                  <j>TRAVEL</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/campaigns"}>
                  <i class="fas fa-heartbeat"></i>
              </NavLink>
                  <j>FITNESS</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/campaigns"}>
                  <i class="fas fa-headphones"></i>
              </NavLink>
                  <j>AUDIO</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/campaigns"}>
                  <i class="fas fa-video"></i>
              </NavLink>
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
              <NavLink to={"/campaigns"}>
                <div className="image1 squre"></div>
                <div className="image-text">10 Cool & Clever Finds</div>
              </NavLink>

              <NavLink to={"/campaigns"}>
                <div className="image2 squre" ></div>
                <div className="image-text">Team Favorites</div>
              </NavLink>

              <NavLink to={"/campaigns"}>
                <div className="image3 squre"></div>
                <div className="image-text">InDemand Superstars</div>
              </NavLink>
              
              <NavLink to={"/campaigns"}>
                <div className="image4 squre"></div>
                <div className="image-text">Production Ready</div>
              </NavLink>
          </div>
        </div>


        
      </div>
    )
  }
};


export default Greeting;


