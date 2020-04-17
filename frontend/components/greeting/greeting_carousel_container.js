import { connect } from "react-redux"
import GreetingCarousel from "./greeting_carousel"
import {fetchCampaigns} from '../../actions/campaign_action'
import { fetchFollows } from '../../actions/follow_actions'


const mSTP = state => {
    const userId = state.entities.users[state.session.id];
    return {
        campaigns: Object.values(state.entities.campaigns),
        allFollows: state.entities.follows,
        currentUser: userId
    }
}

const mDTP = dispatch => ({
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    fetchFollows: () => dispatch(fetchFollows()),

});

export default connect(mSTP, mDTP)(GreetingCarousel)