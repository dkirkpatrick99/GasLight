import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { selectFollowId } from '../../reducers/selectors'



export class ContributionItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = 0
    }

    componentDidMount() {
        this.props.fetchCampaign(this.props.campaignId)
            .then(payload => {
                this.setState(Object.values(payload)[1])
                })
    }
            
            
            
            
    render() {
        if(this.state === 0) return null
        let follow = [];
        if(this.props.currentUser) {
            follow = selectFollowId(this.props.allFollows, this.props.currentUser.id, this.props.campaignId)

        }

        let funds;
        if (this.state[this.props.campaignId].funding_percent < 100) {
            funds = this.state[this.props.campaignId].funding_percent;
        } else {
            funds = 100;
        }

        let followHeart = <i class="far fa-heart"></i>
        if(follow.length){
            followHeart = <i class="fas fa-heart following"></i>
        }
        debugger
        return (
        <li className="campaign-item">
            <div className="amount-header">${this.props.contribution.amount} contributed to:</div>
            <NavLink to={`/campaigns/${this.state[this.props.campaignId].id}`}>
                <div className="camp-item">
                    <img className="campimage1" src={this.state[this.props.campaignId].photoUrl} alt=""/>
                    <div className="lower-item">
                        <div className="heart-bar">
                            <span className="fund-text">FUNDING</span>
                            <div className="heart">{followHeart}</div>
                        </div>
                        <div className="camp-content">
                        <div className="space">
                            <h1>{this.state[this.props.campaignId].title}</h1>
                            <div className="short-dis">{this.state[this.props.campaignId].short_description}</div>
                    </div>
                    <div className="to-bottom">
                        <div class="deet-holder">
                        <div className="funding-details">
                            <div className="percent">
                                <div className="goal-amt">{`$${this.state[this.props.campaignId].goal_in_dollars} goal`}</div>
                                <div>{`${this.state[this.props.campaignId].funding_percent}% `}</div>
                            </div>
                        </div>
                        <div className="tile-bar">
                            <div className="tile-bar-done" style={{width: `${funds}%`}}></div>
                        </div>
                            <div className="days-left"><span><i class="fas fa-clock"></i> &nbsp; {this.state[this.props.campaignId].end_date}</span> days left</div>
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

export default connect(mSTP, mDTP)(ContributionItem)