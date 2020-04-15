
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import GreetingCarouselContainer from './greeting_carousel_container'
import Slider from "react-slick";

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchCampaigns()
    this.props.requestCategories()
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
      <div className="home-page">
    
      <div className="featured-carousel">
        <Slider {...featured}>
          <div className="home-slide">
            <NavLink to={'/campaigns/7'} className="featured-product">
              <div className="featured-image featured-image1"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="slide-title">Drop x THX Panda Headphones</div>
                    <div className="slide-desc">The World’s highest fidelity wireless headphones.</div>
                    <div className="click-to-see">SEE CAMPAIGN <i class="fas fa-angle-right"></i></div>
                  </div>
                </div>
            </NavLink>
          </div>
          <div className="home-slide">
            <NavLink to={'/campaigns/8'} className="featured-product">
              <div className="featured-image featured-image2"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="slide-title">CIGA Design Z-Series Mechanical Titanium Watch</div>
                    <div className="slide-desc">Designed to highlight real men’s love of complexity with outstanding design and superb performance</div>
                    <div className="click-to-see">SEE CAMPAIGN <i class="fas fa-angle-right"></i></div>
                  </div>
                </div>
            </NavLink>
          </div>
          <div className="home-slide">
            <NavLink to={'/campaigns/6'} className="featured-product">
              <div className="featured-image featured-image3"></div>
                <div className="slide-content">
                  <div className="move-content">
                    <div className="slide-title">V-Tex: 12 Feature Nanotech Shoe for all Seasons</div>
                    <div className="slide-desc">A mix of a slipper & a boot in one 12 feature all-weather waterproof breathable nanotech knit shoe</div>
                    <div className="click-to-see">SEE CAMPAIGN <i class="fas fa-angle-right"></i></div>
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
              <NavLink to={"/categories/3"}>
                  <i class="fas fa-mobile-alt"></i>
              </NavLink>
                  <j>ACCESSORIES</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/categories/1"}>
                  <i class="fas fa-hiking"></i>
              </NavLink>
                  <j>TRAVEL</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/categories/2"}>
                  <i class="fas fa-heartbeat"></i>
              </NavLink>
                  <j>FITNESS</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/categories/4"}>
                  <i class="fas fa-headphones"></i>
              </NavLink>
                  <j>AUDIO</j>
                </div>
                <div className="inner-icon">
              <NavLink to={"/categories/5"}>
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
                <div className="block-to-flex">
              <NavLink to={"/campaigns"}>
                <div className="image-flex">
                  <div className="image1 squre"></div>
                  <div className="image-text">10 Cool & Clever Finds</div>
                </div>
                <div className="see-collection">SEE THE COLLECTION <i class="fas fa-angle-right"></i></div>
              </NavLink>
                </div>
              
              <div className="block-to-flex">
                <NavLink to={"/campaigns"}>
                  <div className="image-flex">
                    <div className="image2 squre" ></div>
                    <div className="image-text">Team Favorites</div>
                  </div>
                  <div className="see-collection">SEE THE COLLECTION <i class="fas fa-angle-right"></i></div>
                </NavLink>
              </div>

              <div className="block-to-flex">
                <NavLink to={"/campaigns"}>
                  <div className="image-flex">
                    <div className="image3 squre"></div>
                    <div className="image-text">InDemand Superstars</div>
                  </div>
                  <div className="see-collection">SEE THE COLLECTION <i class="fas fa-angle-right"></i></div>
                </NavLink>
              </div>

              <div className="block-to-flex">
                <NavLink to={"/campaigns"}>
                  <div className="image-flex">
                    <div className="image4 squre"></div>
                    <div className="image-text">Production Ready</div>
                  </div>
                  <div className="see-collection">SEE THE COLLECTION <i class="fas fa-angle-right"></i></div>
                </NavLink>
              </div>
          </div>
        </div>

        <footer className="foot">

          {/* <div className="cat-list">
            <ul className="cat">EXPLORE
              <li>What We Do</li>
              <li>Funding</li>
              <li>GoFundMe</li>
            </ul>

            <ul className="cat">ABOUT
              <li>About Us</li>
              <li>Blog</li>
              <li>Trust & Saftey</li>
              <li>Help & Support</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>

            <ul className="cat">ENTREPRENEURS
              <li>How it Works</li>
              <li>MoneyWise Vs KickStarter</li>
              <li>Education Career</li>
              <li>Experts Directory</li>
              <li>Fees</li>
              <li>Enterprise</li>
              <li>China</li>
            </ul>
          </div> */}

          <div className="bottom-footer">
            {/* <div>Terms of Use</div>
            <div>Pirvacy Policy</div>
            <div>Cookie Policy</div>
            <div>Do Not Sell My Personal Information</div> */}
            <div>2020 MoneyWise, INC. All Rights Reserved </div>
          </div>
        </footer>
        
      </div>
    )
  }
};


export default Greeting;


