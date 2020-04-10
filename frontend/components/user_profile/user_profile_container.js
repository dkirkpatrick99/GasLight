import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { selectCampaignsFromUser } from '../../reducers/selectors'
import { fetchCampaigns } from '../../actions/campaign_action';


const mSTP = (state, ownProps) => {
    const userId = parseInt(ownProps.match.params.userId);
    const camps = selectCampaignsFromUser(state.entities.campaigns, userId);

    return ({
    currentUser: state.entities.users[state.session.id],
    campaigns: camps
            })
}

const mDTP = dispatch => ({
    // getUser: id => dispatch(requestUser(id))
    fetchCampaigns: () => dispatch(fetchCampaigns())


})

export default connect(mSTP, mDTP)(UserProfile)