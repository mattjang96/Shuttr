import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER,
    RECEIVE_ALL_USERS
} from '../actions/session_actions';
import merge from 'lodash/merge'

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = merge({}, oldState, action.currentUser);
            return newState;
        case RECEIVE_ALL_USERS:
            action.users;
        case RECEIVE_USER:
            newState = merge({}, oldState, action.user);
            return newState;
        default:
            return oldState;
    }
}

export default usersReducer;