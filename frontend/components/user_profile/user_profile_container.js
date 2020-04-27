import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { selectCampaignsFromUser, selectContributionsFromUser,  selectUserFollows, selectCampaignsFromFollows} from '../../reducers/selectors'
import { fetchCampaigns, fetchCampaign } from '../../actions/campaign_action';
import { fetchContributions } from '../../actions/contribution_actions'
import { fetchFollows } from '../../actions/follow_actions'
import { fetchUsers } from '../../actions/session_actions'



const mSTP = (state, ownProps) => {
    const userId = parseInt(ownProps.match.params.userId);
    const camps = selectCampaignsFromUser(state.entities.campaigns, userId);
    const conts = selectContributionsFromUser(state.entities.contributions, userId)
    const follows = selectUserFollows(state.entities.follows, userId)
    // const campFollows = selectCampaignsFromFollows(state.entities.campaigns, follows)
    return ({
    // currentUser: state.entities.users[state.session.id],
    currentUser: state.entities.users[ownProps.match.params.userId],  
    campaigns: camps,
    contributions: conts,
    userFollows: follows,
    allFollows: state.entities.follows,

            })
}

const mDTP = dispatch => ({
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    fetchContributions: () => dispatch(fetchContributions()),
    fetchFollows: () => dispatch(fetchFollows()),
    fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(UserProfile)