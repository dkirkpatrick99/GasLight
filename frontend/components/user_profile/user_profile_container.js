import UserProfile from './user_profile';
import { connect } from 'react-redux';


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]

})

const mDTP = dispatch => ({
     
})

export default connect(mSTP, mDTP)(UserProfile)