import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { selectCampaignsFromUser, selectContributionsFromUser } from '../../reducers/selectors'
import { fetchCampaigns } from '../../actions/campaign_action';
import { fetchContributions } from '../../actions/contribution_actions'

const mSTP = (state, ownProps) => {
    const userId = parseInt(ownProps.match.params.userId);
    const camps = selectCampaignsFromUser(state.entities.campaigns, userId);
    const conts = selectContributionsFromUser(state.entities.contributions, userId)
    return ({
    currentUser: state.entities.users[state.session.id],
    campaigns: camps,
    contributions: conts
            })
}

const mDTP = dispatch => ({
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    fetchContributions: () => dispatch(fetchContributions())
})

export default connect(mSTP, mDTP)(UserProfile)