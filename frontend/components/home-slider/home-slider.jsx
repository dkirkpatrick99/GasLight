import React, { Component } from "react";
import Slider from "react-slick";
import {NavLink} from 'react-router-dom'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="featured-carousel">
        <Slider {...settings}>
          <div className="home-slide">
            <NavLink to={'/campaigns/1'} className="featured-product">
              <div className="featured-image featured-image1">
              </div>
            </NavLink>
          </div>
          <div className="home-slide">
            <NavLink to={'/campaigns/2'} className="featured-product">
              <div className="featured-image featured-image2">
              </div>
            </NavLink>
          </div>
          <div className="home-slide">
            <NavLink to={'/campaigns/3'} className="featured-product">
              <div className="featured-image featured-image3">
              </div>
            </NavLink>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CustomArrows