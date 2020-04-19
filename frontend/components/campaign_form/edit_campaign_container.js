import { connect } from "react-redux"
import { updateCampaign, fetchCampaigns } from '../../actions/campaign_action'
import CampaignForm from './campaign_form'

const mSTP = (state, ownProps) => {
    return ({
    // campaign: state.entities.campaigns[ownProps.match.params.campaignId],
    formType: 'Edit Campaign',
    allCampaigns: state.entities.campaigns,
})
}

const mDTP = dispatch => ({
    updateCampaign: campaign => dispatch(updateCampaign(campaign)),
    fetchCampaigns: () => dispatch(fetchCampaigns())
})

export default connect(mSTP, mDTP)(CampaignForm)