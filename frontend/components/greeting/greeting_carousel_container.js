import { connect } from "react-redux"
import GreetingCarousel from "./greeting_carousel"
import {fetchCampaigns} from '../../actions/campaign_action'

const mSTP = state => ({
    campaigns: Object.values(state.entities.campaigns)
})

const mDTP = dispatch => ({
    fetchCampaigns: () => dispatch(fetchCampaigns())
});

export default connect(mSTP, mDTP)(GreetingCarousel)