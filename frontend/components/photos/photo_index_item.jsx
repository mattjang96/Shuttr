import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props => {

    return (
        <div className="photos-index-div">
            <Link to={`/photos/${props.photo.id}`}><div className="the-box"></div></Link>
            <div className="photo-index-detail">
                <Link to={`/photos/${props.photo.id}`}><h1 className="photo-index-title">{props.photo.title}</h1></Link>
                <Link to={`/photos/${props.photo.id}`}><h3 className="photo-index-username">By {props.photo.user.username}</h3></Link>
            </div>
            <Link to={`/photos/${props.photo.id}`}><img className="photo-image" src={props.photo.photoUrl} alt="" /></Link>
        </div>
    );
}

export default PhotoIndexItem;