import React from 'react';

const CommentIndexItem = props => {

    if (props.comment.photo_id === props.photoId) {
        return (
            <div className="comment-outer-div">
                <h2 className="user-name">{props.comment.user.username}</h2>
                <p className="comment-body">
                    {props.comment.body}
                </p>
            </div>
        )
    } else {
        return null
    }
}

export default CommentIndexItem;