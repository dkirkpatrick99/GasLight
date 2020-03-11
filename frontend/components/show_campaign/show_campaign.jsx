import React from 'react'
import { NavLink } from 'react-router-dom';
import CustomArrows from '../home-slider/home-slider'


class ShowCampaign extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCampaign(this.props.match.params.campaignId)
    }



    render() {
        if (!this.props.campaign) return null
        return(
            <div>
            <CustomArrows />

            <div>
                {
                  this.props.campaign.title
                }
            </div>
            </div>
        )
    }
}

export default ShowCampaign;