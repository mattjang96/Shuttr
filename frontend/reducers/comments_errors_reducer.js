import {
    RECEIVE_COMMENT,
    RECEIVE_COMMENT_ERRORS
} from '../actions/comments_actions';

const commentsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return action.errors
        default:
            return oldState;
    }
}

export default commentsErrorsReducer;