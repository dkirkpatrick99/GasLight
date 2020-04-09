import React from 'react'
import ProfileTabs from './tabs'

class UserProfile extends React.Component {
    constructor(props){
        super(props)
        this.tabNum = 0;
        this.panes = [
          {title: 'Profile', 
          content:  <div className="profile-move">
                      <div>
                        <img className="saver-image" src="profile_saver.png"/>
                      </div>
                      <div className="tab-counts">
                        <div className="small-saver">
                          <img className="saver-image-inner" src="profile_saver.png"/>
                          <div>About Me</div>
                        </div>
                        <div>10 Campaigns</div>
                        <div>20 Contributions</div>
                        <div>55 Comments</div>
                      </div>
                    </div>},
          {title: 'Campaigns', content: 'Second pane here'},
          {title: 'Contributions', content: 'Third pane here'}
        ];
        // this.toggleTab = this.toggleTab.bind(this)
    }




    render() {
        return(
            <div className="profile-first">
              <div className="main-contain">
                <div className="user-name">
                  <div>{this.props.currentUser.username}</div>
                </div>
              <ProfileTabs panes={this.panes}/>
              </div>
            </div>
        )
    }
}

export default UserProfile;