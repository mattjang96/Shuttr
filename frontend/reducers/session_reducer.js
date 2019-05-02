import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    currentUserId: null
})

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUserId: Object.values(action.currentUser)[0].id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return oldState;
    }
}

export default sessionReducer;