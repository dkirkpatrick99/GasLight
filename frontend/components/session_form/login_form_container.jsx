import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_action';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    demoLogin: () => dispatch(login({username: "jasmine", email: "jasmine@gmail.com", password: "abcdef3"})),
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button className="switch-button" onClick={() => dispatch(openModal('signup'))}>
        Don't Have An Account Yet? Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);