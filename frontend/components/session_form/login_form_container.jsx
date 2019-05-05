import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { removeErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = state => {
    return ({
        errors: state.errors.session
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: user => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
