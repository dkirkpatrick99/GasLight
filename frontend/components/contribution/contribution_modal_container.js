import { connect } from "react-redux";
import ContributionModal from "./contribution_modal";
import  { createContribution } from '../../actions/contribution_actions'
import { openModal, closeModal } from '../../actions/modal_action';
import {fetchCampaign} from '../../actions/campaign_action'


const mSTP = state => {
    return {
    formType: 'Back This Project',
    currentUser: state.entities.users[state.session.id]
    }
};


const mDTP = dispatch => ({
    createContribution: (contribution) => dispatch(createContribution(contribution)),
    closeModal: () => dispatch(closeModal()),
    fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId))
})

export default connect(mSTP, mDTP)(ContributionModal);