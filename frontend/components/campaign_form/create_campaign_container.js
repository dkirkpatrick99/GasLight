import { connect } from "react-redux"
import { createCampaign } from '../../actions/campaign_action'
import CampaignForm from './campaign_form'

const mSTP = state => ({
    formType: 'Create Campaign'
})

const mDTP = dispatch => ({
    createCampaign: campaign => dispatch(createCampaign(campaign))
})

export default connect(mSTP, mDTP)(CampaignForm)