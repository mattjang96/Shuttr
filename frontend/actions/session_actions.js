import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser: currentUser
    })
}

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
}

const receiveAllUsers = (users) => {
    return ({
        type: RECEIVE_ALL_USERS,
        users: users
    })
}

const receiveUser = (user) => {
    return ({
        type: RECEIVE_USER,
        user: user
    })
}

export const removeErrors = () => {
    return ({
        type: REMOVE_ERRORS
    })
}

export const login = (user) => dispatch => {
    return (
        SessionAPIUtil.login(user)
            .then((user) => dispatch(receiveCurrentUser(user)),
                error => (
                    dispatch(receiveErrors(error.responseJSON))
                ))
    )
}

export const logout = () => dispatch => {
    return (
        SessionAPIUtil.logout()
            .then(() => dispatch(logoutCurrentUser()))
    )
}

export const signup = (user) => dispatch => {
    return (
        UserAPIUtil.signup(user)
            .then((user) => dispatch(receiveCurrentUser(user)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const fetchUser = (id) => dispatch => {
    return (
        UserAPIUtil.fetchUser(id)
            .then((user) => dispatch(receiveUser(user)))
    )
}

export const fetchUsers = () => dispatch => {
    return (
        UserAPIUtil.fetchUsers()
            .then((users) => dispatch(receiveAllUsers(users)))
    )
}