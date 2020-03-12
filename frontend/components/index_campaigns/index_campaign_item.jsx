import React from 'react'
import {NavLink} from 'react-router-dom'

const IndexCampaignItem = (props) => {
    return (
    <li className="campaign-item">
        <NavLink to={`/campaigns/${props.campaign.id}`}>
            <div className="camp-item">
                <img src={props.campaign.photoUrl} alt=""/>
                <div className="lower-item">
                    <div className="heart-bar">
                        <span>FUNDING</span>
                        <div className="heart"></div>
                    </div>
                    <div className="camp-content">
                        <h1>{props.campaign.title}</h1>
                        <p>{props.campaign.short_description}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    </li>
    )
}

export default IndexCampaignItem;
