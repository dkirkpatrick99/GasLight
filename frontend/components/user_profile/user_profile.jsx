import React from 'react';
import ProfileTabs from './tabs';
import IndexCampaignItem from '../index_campaigns/index_campaign_item';
import FollowItem from '../follow/follow_item';
import ContributionItem from '../contribution/contribution_item';


class UserProfile extends React.Component {
    constructor(props){

        super(props)
        this.tabNum = 0;
        this.panes;
      
    }


    componentDidMount() {
      this.props.fetchCampaigns()
      this.props.fetchContributions()
      this.props.fetchFollows()
      this.props.fetchUsers()
      window.scrollTo(0,0);

    }


    render() {
      if(!this.props.currentUser) return null
      if(this.props.campaigns === []) return nil
      if(this.props.userFollows === []) return nil
      let saverImage = <img className="saver-image" src="profile_saver.png"/>
      if(this.props.currentUser.photo_url) {
        saverImage = <img className="saver-image" src={this.props.currentUser.photo_url}/>

      }
      const panes = [
        {title: 'Profile', 
        content:  <div className="profile-move">
                    <div className="D1">
                      {saverImage}
                    </div>
                    <div className="tab-counts">
                      <div className="small-saver">
                        <img className="saver-image-inner" src="profile_saver.png"/>
                        <div>About Me</div>
                      </div>
                      <div className="F1">{this.props.campaigns.length} Campaigns</div>
                      <div className="F1">{this.props.contributions.length} Contributions</div>
                      <div className="F1">{this.props.userFollows.length} Following</div>
                    </div>
                  </div>},
        {title: 'Campaigns', 
        content: <div>
                  <div className="Q1">
                    <div className="Q2">Campaigns I'm On</div>
                  </div>
                  <div>
                    <ul className="list-of-items">
                      {
                          this.props.campaigns.map((campaign) => <IndexCampaignItem key={campaign.id} currentUser={this.props.currentUser} allFollows={this.props.allFollows} campaign={campaign}/>)
                      }
                    </ul>
                  </div>
                </div> },
        {title: 'Contributions', 
        content: <div>
                  <div>
                    <ul className="list-of-items">
                          {
                              this.props.contributions.map((cont) => <ContributionItem key={cont.id} currentUser={this.props.currentUser} allFollows={this.props.allFollows} fetchCampaign={this.props.fetchCampaign} campaignId={cont.campaign_id}/>)
                          }
                    </ul>
                  </div>
                </div> },
        {title: 'Following', 
        content: <div>
                  <div>
                    <ul className="list-of-items">
                        {
                            this.props.userFollows.map((follow) => <FollowItem key={follow.id}  currentUser={this.props.currentUser} allFollows={this.props.allFollows}fetchCampaign={this.props.fetchCampaign} campaignId={follow.campaign_id}/>)
                        }
                    </ul>
                  </div>
                </div> }
      ];
        return(
            <div className="profile-first">
              <div className="main-contain">
                <div className="user-name">
                  <div>{this.props.currentUser.username}</div>
                </div>
              <ProfileTabs panes={panes}/>
              </div>
            </div>
        )
    }
}

export default UserProfile;