import { connect } from "react-redux"
import ShowCampaign from "./show_campaign"
import { fetchCampaigns, fetchCampaign, deleteCampaign } from '../../actions/campaign_action';
import {openModal} from '../../actions/modal_action'
import { selectCampaignsFromUser } from '../../reducers/selectors'
import { fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions'



const mSTP = (state, ownProps) => {
    const userId = state.entities.users[state.session.id];
    const camps = selectCampaignsFromUser(state.entities.campaigns, userId.id);
    return {
        campaign: state.entities.campaigns[ownProps.match.params.campaignId],
        userCampaigns: camps,
        currentUser: state.entities.users[state.session.id]
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