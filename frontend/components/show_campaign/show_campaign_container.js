import { connect } from "react-redux"
import ShowCampaign from "./show_campaign"
import { fetchCampaigns, fetchCampaign, deleteCampaign } from '../../actions/campaign_action';
import {openModal} from '../../actions/modal_action'
import { selectCampaignsFromUser, selectFollowId } from '../../reducers/selectors'
import { fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions'



const mSTP = (state, ownProps) => {
    const userId = state.entities.users[state.session.id];
    let camps;
    let followId
    if(userId) {
        camps = selectCampaignsFromUser(state.entities.campaigns, userId.id) 
        followId = selectFollowId(state.entities.follows, userId.id, parseInt(ownProps.match.params.campaignId))
    }
    return {
        campaign: state.entities.campaigns[ownProps.match.params.campaignId],
        userCampaigns: camps || [],
        currentUser: userId,
        userFollowId: followId || [],
        allFollows: state.entities.follows
    }
}

const mDTP = dispatch => ({
    fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId)),
    deleteCampaign: campaignId => dispatch(deleteCampaign(campaignId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: followId => dispatch(deleteFollow(followId))

});

export default connect(mSTP, mDTP)(ShowCampaign)