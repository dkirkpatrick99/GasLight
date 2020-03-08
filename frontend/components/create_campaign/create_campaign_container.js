import { connect } from "react-redux"
import createCampaign from './create_campaign'

const mSTP = state => ({
    campaign: {
        title: "",
        location: "",
        short_description: "",
        long_description: "",
        goal_amont: 0,
        end_date: "",
        goal_status: false,
        
    },
    formType: 'Create Campaign'
})

const mDTP = dispatch => ({
    createCampaign: campaign => dispatch(createCampaign(campaign))
})

export default connect(mSTP, mDTP)(createCampaign)