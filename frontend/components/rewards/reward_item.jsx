import React from 'react'
import {NavLink} from 'react-router-dom'

const RewardItem = (props) => {


    return (
    <li className="rewarditem">
        <div className="item-content-contain">
            <div className="reward-itemname">{props.reward.name}</div>
            <div className="reward-itemprice">Price: ${props.reward.min_contribution}</div>
            <div className="reward-itemdesc">{props.reward.description}</div>
        </div>
    </li>
    )
}

export default RewardItem;
