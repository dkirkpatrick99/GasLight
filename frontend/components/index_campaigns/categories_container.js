import { connect } from "react-redux"
import IndexCategory from "./categories"
import { fetchCampaigns } from '../../actions/campaign_action';
import { requestCategories } from '../../actions/category_action';



const mSTP = (state, ownProps) => {
    
    return {
        campaigns: Object.values(state.entities.campaigns),
        categories: Object.values(state.entities.categories),
        categoryId: ownProps.match.params.categoryId
    }
};

const mDTP = dispatch => ({
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    requestCategories: () => dispatch(requestCategories())
});

export default connect(mSTP, mDTP)(IndexCategory)