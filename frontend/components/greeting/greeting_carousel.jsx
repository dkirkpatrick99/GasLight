import React from "react";
import Slider from "react-slick";
import IndexCampaignItem from "../index_campaigns/index_campaign_item";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
class GreetingCarousel extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
      this.props.fetchCampaigns()
  }


  render() {
      if (!this.props.campaigns) return null
    const images = this.props.campaigns.map(campaign => 
      <div>
        <IndexCampaignItem
            campaign={campaign}
        />
      </div>
    );
    const settings = {
      dots: true,
      infinite: false,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],

      // nextArrow: <img src=""
      // prevArrow: <SamplePrevArrow />
    };
    return (
          <Slider {...settings}>
        {images}
      </Slider>
    );
  }
}
export default GreetingCarousel;