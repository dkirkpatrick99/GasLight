import React from 'react'
import { NavLink } from 'react-router-dom';
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
                    <div className="allcontain">
                        <div className="cat-contain">
                            <div className="cat1">Category</div>
                            <div className="cat-switch">
                                <div className="switch-tab">
                                    <NavLink to={"/campaigns"}>
                                        <div>All</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={"/categories/1"}>
                                        <div>Travel</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={"/categories/2"}>
                                        <div>Fitness</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={"/categories/3"}>
                                        <div>Accessories</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={"/categories/4"}>
                                        <div>Audio</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={"/categories/5"}>
                                        <div>Film</div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="items-container">
                            <ul className="list-of-items">
                                {
                                    camps.map((campaign) => <IndexCampaignItem key={campaign.id} campaign={campaign}/>)
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}

export default IndexCategory;