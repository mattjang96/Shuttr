import React from 'react';
import { Link } from 'react-router-dom';
// import CommentIndexContainer from '../comments/comment_index_container';
// import TagIndexContainer from '../tags/tag_index_container';

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

    // componentWillReceiveProps(newProps){
    //   newProps.fetchPhoto(newProps.match.params.photoId)
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //   console.log("should update")
    //   if (nextProps.match.params.photoId !== this.props.match.params.photoId){
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

    // componentWillUpdate(nextProps){
    //   let photoId = nextProps.match.params.photoId
    //   nextProps.fetchPhoto(photoId)
    // }
    goBack() {
        this.props.history.goBack();
    }

    render() {
        // let prev = this.props.photoId;
        // if ((prev > Object.keys(this.props.users)[0]) && prev !== Object.keys(this.props.users)[0]) {
        //   prev -= 1;
        // }

        // let next = this.props.photoId;
        // if (next < this.props.totalImages){
        //   next += 1;
        //   next;
        // }

        if (this.props.photo === undefined) return null;

        // needed double equal signs not triple
        const edit = this.props.photo.owner_id == this.props.currentUserId ? (
            <Link className="edit-button" to={`/photos/${this.props.photo.id}/edit`}><i className="fas fa-edit"></i> Edit Photo</Link>
        ) : null;

        let photo = (
            <div className="photo-show-image-div">
                <div className="back-to-index">
                    <button className="back-button" onClick={this.goBack}><i className="fas fa-arrow-left"></i> Back</button>
                    {/* <Link to="/photos"><i className="fas fa-arrow-left"></i> Back to index</Link> */}
                    {/* <Link to={`/photos/${prev}`}><i class="fas fa-arrow-left"></i> back 1 image</Link> */}
                    {/* <Link to={`/photos/${next}`}><i class="fas fa-arrow-left"></i> move up image</Link> */}
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
                        {/* <CommentIndexContainer photoId={this.props.photo.id} /> */}
                    </div>

                    <div className="tag-info">
                        {/* <TagIndexContainer photoId={this.props.photo.id} /> */}
                    </div>
                </div>

            </div>
        )
    }

}

export default PhotoShow;