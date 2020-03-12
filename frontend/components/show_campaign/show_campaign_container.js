import { connect } from "react-redux"
import ShowCampaign from "./show_campaign"
import { fetchCampaign, deleteCampaign } from '../../actions/campaign_action';

const mSTP = (state, ownProps) => {
    return {
        campaign: state.entities.campaigns[ownProps.match.params.campaignId]
        // owner: state.entities.users[state.entities.campaigns[ownProps.match.params.campaignId].owner_id]
    }
}

const mDTP = dispatch => ({
    fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId)),
    deleteCampaign: campaignId => dispatch(deleteCampaign(campaignId))
});

export default connect(mSTP, mDTP)(ShowCampaign)