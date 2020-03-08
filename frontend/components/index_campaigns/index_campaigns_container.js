import { connect } from "react-redux"
import IndexCampaign from "./index_campaign"
import { fetchCampaigns } from '../../actions/campaign_action';

const mSTP = (state, ownProps) => {
    return {
        campaigns: Object.values(state.entities.campaigns)
    }
};

const mDTP = dispatch => ({
    fetchCampaigns: () => dispatch(fetchCampaigns())
});

export default connect(mSTP, mDTP)(IndexCampaign)