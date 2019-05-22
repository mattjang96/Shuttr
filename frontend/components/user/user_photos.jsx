import React from 'react';
import { Link } from 'react-router-dom';

class UserPhotos extends React.Component {

  componentDidMount(){
    this.props.fetchPhotos();
  }

  render(){

    if (this.props.photos === undefined) return null;

    let photos = this.props.photos.filter(photo => 
      photo.owner_id === this.props.currentUser.id
    );

    let userPhotos = photos.map (photo => {
      return (
        <div key={photo.id} className='albums-show-div'>
          <Link to={`/photos/${photo.id}`}><div className="the-box"></div></Link>
          <div className="album-index-detail">
            <Link to={`/photos/${photo.id}`}><h1 className="album-show-title">{photo.title}</h1></Link>
            <Link to={`/photos/${photo.id}`}><h3 className="album-show-username">By {photo.user.username}</h3></Link>
          </div>
          <Link to={`/photos/${photo.id}`}>
            <img className='album-show-image' src={photo.photoUrl} alt="" />
          </Link>
        </div>
      )
    });

    return (
      <div className="user-photos-index">
        <div className='album-show-outer-div'>
          {userPhotos}
        </div>
      </div>
    )
  }
}

export default UserPhotos;