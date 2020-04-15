import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCampaigns, fetchCampaign } from '../../actions/campaign_action';


export class FollowItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = 0
    }

    componentDidMount() {
        this.props.fetchCampaign(this.props.campaignId)
            .then(payload => {
                this.setState(Object.values(payload)[1][1])
                })
    }




    render() {
        // if(this.state === 0) return null

        let funds;
        if (this.state.funding_percent < 100) {
        funds = this.state.funding_percent;
        } else {
        funds = 100;
        }
        return (
        <li className="campaign-item">
            <NavLink to={`/campaigns/${this.state.id}`}>
                <div className="camp-item">
                    <img className="campimage1" src={this.state.photoUrl} alt=""/>
                    <div className="lower-item">
                        <div className="heart-bar">
                            <span className="fund-text">FUNDING</span>
                            <div className="heart"><i class="far fa-heart"></i></div>
                        </div>
                        <div className="camp-content">
                        <div className="space">
                            <h1>{this.state.title}</h1>
                            <div className="short-dis">{this.state.short_description}</div>
                    </div>
                    <div className="to-bottom">
                        <div class="deet-holder">
                        <div className="funding-details">
                            <div className="percent">
                                <div className="goal-amt">{`$${this.state.goal_in_dollars} goal`}</div>
                                <div>{`${this.state.funding_percent}% `}</div>
                            </div>
                        </div>
                        <div className="tile-bar">
                            <div className="tile-bar-done" style={{width: `${funds}%`}}></div>
                        </div>
                            <div className="days-left"><span><i class="fas fa-clock"></i> &nbsp; {this.state.end_date}</span> days left</div>
                    </div>
                    </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </li>
        )
    }
}


const mSTP = (state, ownProps) => ({

})

const mDTP = dispatch => ({
    // fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId))
})

export default connect(mSTP, mDTP)(FollowItem)