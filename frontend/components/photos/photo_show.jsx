import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.photoId !== prevProps.photoId) {
            this.props.fetchPhoto(this.props.photoId)
        }
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        if (this.props.photo === undefined) return null;

        const edit = this.props.photo.owner_id == this.props.currentUserId ? (
            <Link className="edit-button" to={`/photos/${this.props.photo.id}/edit`}><i className="fas fa-edit"></i> Edit Photo</Link>
        ) : null;

        let photo = (
            <div className="photo-show-image-div">
                <div className="back-to-index">
                    <button className="back-button" onClick={this.goBack}><i className="fas fa-arrow-left"></i> Back</button>
                </div>
                <div className="photo-image-container">
                    <img className="photo-show-image" src={this.props.photo.photoUrl} alt="" />
                </div>
            </div>
        )

        let photoInfo = (
            <div className="photo-info-section">
                <div className="title-edit">
                    <h1 className="user">By {this.props.photo.user.username}</h1>
                    <div className="edit-button-div">
                        {edit}
                    </div>
                </div>
                <h2 className="title">{this.props.photo.title}</h2>
                <h3 className="description">{this.props.photo.description}</h3>
            </div>
        )

        return (
            <div>
                {photo}
                <div className="photo-info">
                    <div className="right-border">
                        {photoInfo}
                        <CommentIndexContainer photoId={this.props.photo.id} />
                    </div>

                    <div className="tag-info">
                    </div>
                </div>

            </div>
        )
    }

}

export default PhotoShow;