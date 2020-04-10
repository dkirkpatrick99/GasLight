import React from 'react'
import { Link } from 'react-router-dom';
import IndexCampaignItem from "./index_campaign_item"

class IndexCategory extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCampaigns()
        this.props.requestCategories()
    }




    render() {
        if (!this.props.campaigns) return null
        if (!this.props.categoryId) return null

        let catId = this.props.categoryId
        let camps = []
        this.props.campaigns.forEach((campaign) => {
            if(campaign.category_id === parseInt(catId)) {camps.push(campaign)}
        })
        // this.props.campaigns = camps

            return(
                <div>
                    <div className="header-element">
                        <div className="header-image"></div>
                    </div>
                    <div className="items-container">
                        <ul className="list-of-items">
                            {
                                camps.map((campaign) => <IndexCampaignItem key={campaign.id} campaign={campaign}/>)
                            }
                            
                        </ul>
                    </div>
                </div>
        )
    }
}

export default IndexCategory;