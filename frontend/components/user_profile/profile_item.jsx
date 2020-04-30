import React from 'react'
import {NavLink} from 'react-router-dom'

const ProfileItem = (props) => {


    return (

    <li className="followitem1">
        <NavLink to={`/users/3`} >
        <div className="followitem-content-contain">
            <div className="profile-pic1">
                <img src={props.follower.photo_url} alt=""/>
            </div>
            <div className="profile-username1">{props.follower.username}</div>
        </div>
        </NavLink>
    </li>
    )
}

export default ProfileItem;