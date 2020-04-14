import React from 'react'
import { NavLink } from 'react-router-dom';
import ContributionModal from '../contribution/contribution_modal'
import Modal from '../modal/modal';


class ShowCampaign extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCampaign(this.props.match.params.campaignId);
        this.props.fetchCampaigns();
    }


    toggleOverlay(e) {
        document.querySelector('.over-lay').style.display = "none"
    }

    toggleFollow(e) {
        status = document.querySelector('.over-lay')
        //for rewards try rendering the update on submit then use id for rewards
    }


    render() {
 
        if (!this.props.campaign) return null

        let funds;
        if (this.props.campaign.funding_percent < 100) {
          funds = this.props.campaign.funding_percent;
        } else {
          funds = 100;
        }
        let owner = false
        let thisCampaign = this.props.campaign
        this.props.userCampaigns.forEach((camp) => {
            if(camp.id === thisCampaign.id) {owner = true}
        })
        let ownerBar = null;
        if(owner === true){
            ownerBar =  <div className="owner-bar">
                            <div>
                                <div>Welcome To Your Campaign!</div>
                            </div>
                            <div>
                                <NavLink to={`/campaigns/${this.props.campaign.id}/edit`}>Edit This Campaign</NavLink>
                            </div>

                        </div>
        }  else {
            ownerBar = null
        }


        
        return(
            <div>
                <div>{ownerBar}</div>
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
                                    <div className="campaign-showlocation">{this.props.campaign.location}</div>
                                </div>
                                <div className="bar-container">
                                    {/* <div>{this.props.owner.company_name}</div> */}
                                    <div className="funding-details">
                                        <div className="percent1">
                                            {`$${this.props.campaign.current_sum}`}
                                        </div>
                                    </div>
                                    <div className="tile-bar1">
                                        <div className="tile-bar-done1" style={{width: `${funds}%`}}></div>
                                    </div>
                                    <div className="bar-text">
                                        <span>{`${this.props.campaign.funding_percent}% of`}{` $${this.props.campaign.goal_in_dollars} FIXED GOAL`}</span>
                                        <div className="days-left1"><span><i class="fas fa-clock"></i> &nbsp; {this.props.campaign.end_date}</span> days left</div>
                                    </div>
                                </div>
                                <div className="follow-content">
                                    <div className="button-container">
                                        <button className="campaign-button back" onClick={() => this.props.openModal('contribution')}>BACK IT</button>
                                        <button className="campaign-button follow-it"><i class="far fa-heart"></i> &nbsp;FOLLOW</button>
                                    </div>
                                    <div className="social-icons">
                                        <i class="fab fa-instagram"></i>
                                        <i class="fab fa-twitter"></i>
                                        <i class="fas fa-link"></i>
                                    </div>
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
                <Modal campaignId={this.props.campaign.id}/>
            </div>
        )
    }
}

export default ShowCampaign;