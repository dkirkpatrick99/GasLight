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
        if (!this.props.categories.length) return null


        let thisCatId = parseInt(this.props.match.params.categoryId)
        let thisCat = "All Campaigns";
        this.props.categories.forEach((cat) => {
            if(cat.id === thisCatId) {
                thisCat = cat.title;
                return;
            }
        })

        let catId;
        let camps = []
        if(this.props.match.params.categoryId === "0"){
            camps = this.props.campaigns
        } else {
            catId = this.props.categoryId
            this.props.campaigns.forEach((campaign) => {
                if(campaign.category_id === parseInt(catId)) {camps.push(campaign)}
            })
        }

        // this.props.campaigns = camps
            return(
                <div>
                    <div className="header-element">
                        <div className="header-image"></div>
                    </div>
                    <div className="catname-contain">
                        <div className="cat-name">{`${thisCat}`}</div>
                    </div>
                    <div className="allcontain">
                        <div className="cat-contain">
                            <div className="cat1">Category</div>
                            <div className="cat-switch">
                                <div className="switch-tab">
                                    <NavLink to={"/categories/0"}>
                                        <div>All</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[0].id}`}>
                                        <div>Travel</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[1].id}`}>
                                        <div>Fitness</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[2].id}`}>
                                        <div>Accessories</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[3].id}`}>
                                        <div>Audio</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[4].id}`}>
                                        <div>Film</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[4].id}`}>
                                        <div>Cool Finds!</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[4].id}`}>
                                        <div>Team Favorites</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[4].id}`}>
                                        <div>InDemand</div>
                                    </NavLink>
                                </div>
                                <div className="switch-tab">
                                    <NavLink to={`/categories/${this.props.categories[4].id}`}>
                                        <div>Production Ready</div>
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