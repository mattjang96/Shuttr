import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';
import CreateCommentContainer from './create_comment_container';

class CommentIndex extends React.Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        const comments = this.props.comments.map(comment => {
            return (
                <CommentIndexItem
                    key={comment.id}
                    comment={comment}
                    photoId={this.props.photoId}
                />
            )
        });

        const addComments = this.props.currentUserId ? (
            <CreateCommentContainer photoId={this.props.photoId} />
        ) : <p className="add-comment">Please <Link className="go-to-login" to="/login">log in</Link> to leave a comment <br></br></p>;
        
        return (
            <div className="comments-section">
                <div className="comment-info">
                    {comments}
                </div>
                <div>
                    {addComments}
                </div>
            </div>
        );
    }

}

export default CommentIndex;