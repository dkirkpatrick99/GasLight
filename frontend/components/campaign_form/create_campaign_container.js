import { connect } from "react-redux"
import { createCampaign } from '../../actions/campaign_action'
import CampaignForm from './campaign_form'
import { fetchCampaigns } from '../../actions/campaign_action'

const mSTP = state => ({
    formType: 'Create Campaign',
    currentUser: state.entities.users[state.session.id]

})

const mDTP = dispatch => ({
    createCampaign: campaign => dispatch(createCampaign(campaign)),
    fetchCampaigns: () => dispatch(fetchCampaigns())
})

export default connect(mSTP, mDTP)(CampaignForm)