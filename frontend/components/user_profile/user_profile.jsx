import React from 'react';
import ProfileTabs from './tabs';
import IndexCampaignItem from '../index_campaigns/index_campaign_item';

class UserProfile extends React.Component {
    constructor(props){

        super(props)
        this.tabNum = 0;
        this.panes;
      
    }


    componentDidMount() {
      this.props.fetchCampaigns()
      this.props.fetchContributions()
    }


    render() {
      if(this.props.campaigns === []) return nil

      const panes = [
        {title: 'Profile', 
        content:  <div className="profile-move">
                    <div className="D1">
                      <img className="saver-image" src="profile_saver.png"/>
                    </div>
                    <div className="tab-counts">
                      <div className="small-saver">
                        <img className="saver-image-inner" src="profile_saver.png"/>
                        <div>About Me</div>
                      </div>
                      <div className="F1">{this.props.campaigns.length} Campaigns</div>
                      <div className="F1">{this.props.contributions.length} Contributions</div>
                      <div className="F1">55 Following</div>
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
                          this.props.campaigns.map((campaign) => <IndexCampaignItem key={campaign.id} campaign={campaign}/>)
                      }
                    </ul>
                  </div>
                </div> },
        {title: 'Contributions', content: 'Third pane here'}
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