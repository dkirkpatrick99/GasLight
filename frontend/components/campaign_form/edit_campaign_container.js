import { connect } from "react-redux"
import { updateCampaign } from '../../actions/campaign_action'
import CampaignForm from './campaign_form'

const mSTP = (state, ownProps) => ({
    campaign: state.campaigns[ownProps.match.params.campaignId],
    formType: 'Edit Campaign'
})

const mDTP = dispatch => ({
    updateCampaign: campaign => dispatch(updateCampaign(campaign))
})

export default connect(mSTP, mDTP)(CampaignForm)