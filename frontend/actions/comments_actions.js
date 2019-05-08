import * as CommentAPIUtil from '../util/comments_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveAllComments = (comments) => {
    return ({
        type: RECEIVE_ALL_COMMENTS,
        comments: comments
    })
}

const receiveComment = (comment) => {
    return ({
        type: RECEIVE_COMMENT,
        comment: comment
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_COMMENT_ERRORS,
        errors: errors
    })
}

export const fetchComments = () => dispatch => {
    return (
        CommentAPIUtil.fetchComments()
            .then((comments) => dispatch(receiveAllComments(comments)))
    )
}

export const fetchComment = (id) => dispatch => {
    return (
        CommentAPIUtil.fetchComment(id)
            .then((comment) => dispatch(receiveComment(comment)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const createComment = (comment) => dispatch => {
    return (
        CommentAPIUtil.createComment(comment)
            .then((comment) => dispatch(receiveComment(comment)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}