import { connect } from "react-redux";
import ContributionModal from "./contribution_modal";
import  { createContribution } from '../../actions/contribution_actions'
import { openModal, closeModal } from '../../actions/modal_action';


const mSTP = state => ({
    formType: 'Back This Project'
});


const mDTP = dispatch => ({
    createContribution: (contribution) => dispatch(createContribution(contribution)),
    closeModal: () => dispatch(closeModal())

})

export default connect(mSTP, mDTP)(ContributionModal);