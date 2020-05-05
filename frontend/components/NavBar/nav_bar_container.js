import { connect } from "react-redux"
import NavBar from "./nav_bar"
import {openModal} from '../../actions/modal_action'
import {logout} from '../../actions/session_actions'
import { fetchCampaigns } from '../../actions/campaign_action';



const mSTP = ({ session, entities: { users, campaigns } }) => {
    return {
      currentUser: users[session.id],
      campaigns: Object.values(campaigns)
    };
  };


const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchCampaigns: () => dispatch(fetchCampaigns())
});
  


export default connect(mSTP, mDTP)(NavBar)