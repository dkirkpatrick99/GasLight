import React from 'react'
import { NavLink } from 'react-router-dom';
import ContributionModal from '../contribution/contribution_modal'
import Modal from '../modal/modal';
import { selectFollowId } from '../../reducers/selectors'
import ShowTabs from './show_tabs'
import RewardItem from '../rewards/reward_item'
import EditCampaignContainer from '../campaign_form/edit_campaign_container'


class ShowCampaign extends React.Component{
    constructor(props){
        super(props)
        this.toggleFollow = this.toggleFollow.bind(this)
        this.state;
    }

    componentDidMount() {
        this.props.fetchCampaign(this.props.match.params.campaignId);
        this.props.fetchCampaigns();
        this.props.fetchFollows()
        this.props.fetchRewards()
        window.scrollTo(0,0);

    }


    toggleOverlay(e) {
        document.querySelector('.over-lay').style.display = "none"

    }

    toggleFollow(e) {
        
        if (this.props.userFollowId.length) {
            this.props.deleteFollow(this.props.userFollowId[0].id)
            this.setState(this.state)

        } else {
            this.props.createFollow({user_id: this.props.currentUser, campaign_id: this.props.campaign.id})
                .then( payload => {
                    this.props.fetchFollows()
                })
            this.setState(this.state)
        }
    }

    toggleEdit(action) {
        let show = document.querySelector('.camp-show-all')
        let editForm = document.querySelector('.toggle-edit')
        if(!show){
            return null
        } else {
            show.style.display = "none"
            editForm.style.display = "block"
        }

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
                                <div className="welcome-to">Welcome To Your Campaign!</div>
                            </div>
                            <div className="user-campbutton-contain">
                                <div className="user-camp-button">
                                    <div onClick={this.toggleEdit}>Edit This Campaign</div>
                                </div>
                                <div className="user-camp-button">
                                    <NavLink to={`/rewards/${this.props.campaign.id}/new`}>Create Reward</NavLink>
                                </div>
                            </div>


                        </div>
        }  else {
            ownerBar = null
        }

        const panes = [
            {title: 'Story', 
            content:  <div className="story-contain">
                        <div className="long-content">
                            <div className="long-campaign-content">
                                <div className="camplongdisc">
                                    {this.props.campaign.long_description}
                                </div>
                            </div>
                        </div>
                      </div>},
            {title: 'Rewards', 
            content: <div className="reward-contain">
                        <div className="reward-stuff">
                            <ul className="list-of-rewards">
                                {
                                    this.props.campRewards.map((reward) => <RewardItem key={reward.id} reward={reward}/>)
                                }
                            </ul>
                        </div>
                    </div> },
            {title: 'Followers',
            content: <div>

                    </div> }
          
          ];

        let followButton = <button className="campaign-button follow-it" onClick={this.toggleFollow}><i class="far fa-heart"></i> &nbsp;FOLLOW</button>

        if(this.props.userFollowId.length){
            followButton = <button className="campaign-button follow-it" onClick={this.toggleFollow}><i class="fas fa-heart following"></i> &nbsp;FOLLOW</button>
        }

        if (!this.props.currentUser){
            followButton = <button className="campaign-button follow-it" onClick={() => this.props.openModal('signup')}><i class="far fa-heart"></i> &nbsp;FOLLOW</button>
        }

        return(
            <div>
                <div className="camp-show-all">
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
                                            {followButton}
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
                    <div>
                        <ShowTabs panes={panes} />
                    </div>
                </div>
                <Modal campaignId={this.props.campaign.id}/>
                <div className="toggle-edit">
                    <EditCampaignContainer campaign={this.props.campaign} />
                </div>
            </div>
        )
    }
}

export default ShowCampaign;