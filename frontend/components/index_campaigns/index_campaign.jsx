import React from 'react'
import { Link } from 'react-router-dom';
import IndexCampaignItem from "./index_campaign_item"

class IndexCampaign extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCampaigns()
    }



    render() {
        
        if (!this.props.campaigns) return null
            return(
                <div>
                    <div className="header-element">
                        <div className="header-image"></div>
                    </div>
                    <div className="items-container">
                        <ul className="list-of-items">
                            {
                                this.props.campaigns.map((campaign) => <IndexCampaignItem key={campaign.id} campaign={campaign}/>)
                            }
                            
                        </ul>
                    </div>
                </div>
        )
    }
}

export default IndexCampaign;