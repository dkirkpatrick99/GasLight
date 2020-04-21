import { connect } from "react-redux"
import IndexCategory from "./categories"
import { fetchCampaigns } from '../../actions/campaign_action';
import { requestCategories } from '../../actions/category_action';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions'
import { selectCampaignsFromUser, selectFollowId, selectRewardsFromCampaignId } from '../../reducers/selectors'


const mSTP = (state, ownProps) => {
    const userId = state.entities.users[state.session.id];
    let camps;
    let followId;
    if(userId) {
        camps = selectCampaignsFromUser(state.entities.campaigns, userId.id) 
        followId = selectFollowId(state.entities.follows, userId.id, parseInt(ownProps.match.params.campaignId))
    }
    return {
        campaigns: Object.values(state.entities.campaigns),
        categories: Object.values(state.entities.categories),
        categoryId: ownProps.match.params.categoryId,
        allFollows: state.entities.follows,
        currentUser: userId,
        userFollowId: followId || []

    }
};

const mDTP = dispatch => ({
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    requestCategories: () => dispatch(requestCategories()),
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: followId => dispatch(deleteFollow(followId)),

});

export default connect(mSTP, mDTP)(IndexCategory)