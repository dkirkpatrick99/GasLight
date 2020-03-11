import React from 'react'
import {NavLink} from 'react-router-dom'

const IndexCampaignItem = (props) => {
    return (
    <li className="campaign-item">
        <NavLink to={`/campaigns/${props.campaign.id}`}>
            <div className="camp-item">
                <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_273,w_273/vdkcrhwsyoi3yhlwhwjq.jpg" alt=""/>
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
