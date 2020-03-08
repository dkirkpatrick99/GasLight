import { connect } from "react-redux"
import NavBar from "./nav_bar"



const mSTP = ({ session, entities: { users } }) => {
    return {
      currentUser: users[session.id]
    };
  };


const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});
  


export default connect(mSTP, mDTP)(NavBar)