import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
    campaigns: Object.values(state.entities.campaigns)
});

const mapDispatchToProps = dispatch => ({
  fetchCampaigns: () => dispatch(fetchCampaigns())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
