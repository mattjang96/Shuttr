import React from 'react';
import { connect } from 'react-redux'
import { createComment, fetchComment } from '../../actions/comments_actions';
import CreateComment from './create_comment';

const mapStateToProps = state => {
    let currentUserId = state.session.currentUserId
    return ({
        currentUserId: currentUserId,
        errors: state.errors.comments
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        createComment: comment => dispatch(createComment(comment)),
        // fetchComment: id => dispatch(fetchComment(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);