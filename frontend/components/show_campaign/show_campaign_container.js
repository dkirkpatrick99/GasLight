import { connect } from "react-redux"
import ShowCampaign from "./show_campaign"
import { fetchCampaign } from '../../actions/campaign_action';

const mSTP = (state, ownProps) => {
    return {
        campaign: state.entities.campaigns[ownProps.match.params.campaignId]}
}

const mDTP = dispatch => ({
    fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId))
});

export default connect(mSTP, mDTP)(ShowCampaign)