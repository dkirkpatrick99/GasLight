import { connect } from "react-redux"
import RewardForm from './reward_form'
import { createReward } from '../../actions/reward_actions'

const mSTP = state => ({
    formType: 'Create Reward'
})

const mDTP = dispatch => ({
    createReward: reward => dispatch(createReward(reward))
})

export default connect(mSTP, mDTP)(RewardForm)