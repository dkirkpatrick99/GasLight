import React from 'react'
import { NavLink } from 'react-router-dom';

class ShowCampaign extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCampaign(this.props.match.params.campaignId)
    }


    toggleOverlay(e) {
        document.querySelector('.over-lay').style.display = "none"
    }


    render() {

        // let funds;
        // if (this.props.campaign.funding_percent < 100) {
        //   funds = this.props.campaign.funding_percent;
        // } else {
        //   funds = 100;
        // }

        if (!this.props.campaign) return null
        return(
            <div>
                <div className="short-container">
                    <div className="short-campaign-content">
                        <div className="campaign-video">
                            <div className="over-lay" onClick={this.toggleOverlay}>
                                <img src={this.props.campaign.photoUrl} alt=""/>
                                <i class="fas fa-play-circle"></i>
                            </div>
                            <iframe className="camp-video" width="720" height="495" 
                                src="https://www.youtube.com/embed/Rm7gVae7vUY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>    
                        <div className="short-content">
                            <div className="campaign-stage">INDEMAND</div>
                            <div className="campaign-showtitle">{this.props.campaign.title}</div>
                            <div className="campaign-showshort">{this.props.campaign.short_description}</div>
                            <div className="lower-short">
                                <div className="campaign-showimage">
                                    <img src={this.props.campaign.photoUrl}/>
                                </div>
                                <div>
                                    {/* <div>{this.props.owner.company_name}</div> */}
                                    <div className="campaign-showlocation">{this.props.campaign.location}</div>
                                    <div className="funding-details">
                                        <div className="percent"><span>{`${this.props.campaign.funding_percent}% `}</span>{`of $${this.props.campaign.goal_in_dollars} goal`}</div>
                                    </div>
                                    <div className="tile-bar">
                                        <div className="tile-bar-done" style={{width: `${this.props.campaign.funding_percent}%`}}></div>
                                    </div>
                                    <div><span>{this.props.campaign.end_date}</span> days left</div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>

                <div className="long-content">
                    <div className="long-campaign-content">
                    <h1>Story</h1>
                        {
                            this.props.campaign.long_description
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowCampaign;