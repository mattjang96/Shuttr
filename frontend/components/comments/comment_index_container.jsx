import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comments_actions';
import CommentIndex from './comment_index';

const mapStateToProps = state => {
    let comments = Object.values(state.entities.comments);
    let currentUserId = state.session.currentUserId;
    return ({
        currentUserId: currentUserId,
        comments: comments
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchComments: () => dispatch(fetchComments())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)