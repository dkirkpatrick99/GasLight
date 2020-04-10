import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { requestCategories } from '../../actions/category_action';
import { fetchCampaigns } from '../../actions/campaign_action'

const mapStateToProps = state => ({
    campaigns: Object.values(state.entities.campaigns),
    categories: Object.values(state.entities.categories)
});

const mapDispatchToProps = dispatch => ({
  fetchCampaigns: () => dispatch(fetchCampaigns()),
  requestCategories: () => dispatch(requestCategories())
  

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
