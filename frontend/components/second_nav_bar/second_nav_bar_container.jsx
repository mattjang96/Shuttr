import React from 'react';
import { connect } from 'react-redux';
import SecondNavBar from './second_nav_bar';

const mapStateToProps = state => {
    return ({
        currentUser: state.entities.users[state.session.currentUserId]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondNavBar);