import { connect } from "react-redux"
import IndexCategory from "./categories"
import { fetchCampaigns } from '../../actions/campaign_action';
import { requestCategories } from '../../actions/category_action';
import { fetchFollows } from '../../actions/follow_actions'

const mSTP = (state, ownProps) => {
    const userId = state.entities.users[state.session.id];
    return {
        campaigns: Object.values(state.entities.campaigns),
        categories: Object.values(state.entities.categories),
        categoryId: ownProps.match.params.categoryId,
        allFollows: state.entities.follows,
        currentUser: userId

    }
};

const mDTP = dispatch => ({
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    requestCategories: () => dispatch(requestCategories()),
    fetchFollows: () => dispatch(fetchFollows()),

});

export default connect(mSTP, mDTP)(IndexCategory)