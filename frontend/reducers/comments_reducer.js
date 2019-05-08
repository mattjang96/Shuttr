import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT
} from '../actions/comments_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            newState = Object.assign({}, oldState, action.comment)
            return newState;
        default:
            return oldState;
    }
}

export default commentsReducer;