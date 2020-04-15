import { connect } from "react-redux"
import RewardForm from './reward_form'
import { createReward } from '../../actions/reward_actions'

const mSTP = (state,ownProps) => ({
    formType: 'Create Reward',
    campId: ownProps.match.params.campaignId
})

const mDTP = dispatch => ({
    createReward: reward => dispatch(createReward(reward))
})

export default connect(mSTP, mDTP)(RewardForm)