import React from 'react'
import { Link } from 'react-router-dom';

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
                {
                  this.props.campaign.title
                }
            </div>
        )
    }
}

export default ShowCampaign;