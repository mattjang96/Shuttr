import React from 'react';
import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.currentUserId]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(User);