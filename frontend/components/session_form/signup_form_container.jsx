import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';
import { removeErrors } from '../../actions/session_actions';

// const mapStateToProps = state => {
const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.session,
        // errors: state.errors.session
    });
};

// const mapStateToProps = ({ errors }) => {
//     return ({
//         errors: errors.session,
//         formType: 'signup',
//         // navLink: <Link to="/login">log in instead</Link>,
//     });
// };

const mapDispatchToProps = dispatch => {
    return ({
        createNewUser: user => dispatch(signup(user)),
        removeErrors: () => dispatch(removeErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
