import React from 'react'
import {NavLink} from 'react-router-dom'
import { selectFollowId } from '../../reducers/selectors'


const IndexCampaignItem = (props) => {
    let follow = [];
    if(props.currentUser) {
        follow = selectFollowId(props.allFollows, props.currentUser.id, props.campaign.id)
    }
    let funds;
    if (props.campaign.funding_percent < 100) {
      funds = props.campaign.funding_percent;
    } else {
      funds = 100;
    }

    let followHeart = <i class="far fa-heart"></i>
    if(follow.length){
        followHeart = <i class="fas fa-heart following"></i>
    }

    return (
    <li className="campaign-item">
        <NavLink to={`/campaigns/${props.campaign.id}`}>
            <div className="camp-item">
                <img className="campimage1" src={props.campaign.photoUrl} alt=""/>
                <div className="lower-item">
                    <div className="heart-bar">
                        <span className="fund-text">FUNDING</span>
                        <div className="heart">{followHeart}</div>
                    </div>
                    <div className="camp-content">
                    <div className="space">
                        <h1>{props.campaign.title}</h1>
                        <div className="short-dis">{props.campaign.short_description}</div>
                   </div>
                   <div className="to-bottom">
                       <div class="deet-holder">
                    <div className="funding-details">
                        <div className="percent">
                            <div className="goal-amt">{`$${props.campaign.goal_in_dollars} goal`}</div>
                            <div>{`${props.campaign.funding_percent}% `}</div>
                        </div>
                    </div>
                    <div className="tile-bar">
                        <div className="tile-bar-done" style={{width: `${funds}%`}}></div>
                    </div>
                        <div className="days-left"><span><i class="fas fa-clock"></i> &nbsp; {props.campaign.end_date}</span> days left</div>
                   </div>
                   </div>
                    </div>
                </div>
            </div>
        </NavLink>
    </li>
    )
}

export default IndexCampaignItem;
