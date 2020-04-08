import { connect } from "react-redux"
import ShowCampaign from "./show_campaign"
import { fetchCampaign, deleteCampaign } from '../../actions/campaign_action';
import {openModal} from '../../actions/modal_action'


const mSTP = (state, ownProps) => {
    return {
        campaign: state.entities.campaigns[ownProps.match.params.campaignId]
    }
}

const mDTP = dispatch => ({
    fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId)),
    deleteCampaign: campaignId => dispatch(deleteCampaign(campaignId)),
    openModal: modal => dispatch(openModal(modal))

});

export default connect(mSTP, mDTP)(ShowCampaign)