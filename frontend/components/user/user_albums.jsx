import React from 'react';
import { Link } from 'react-router-dom';

class UserAlbums extends React.Component {

  componentDidMount(){
    this.props.fetchAlbums();
  }

  render(){
    if (this.props.albums === undefined) return null;

    let albums = this.props.albums.filter(album =>
      album.user_id === this.props.currentUser.id
    );

    let userAlbums = albums.map(album => {
      return (
        <div className='albums-index-div'>
          <h1 className="album-index-title">{album.title}</h1>
          <Link to={`/albums/${album.id}`}>
            <img className='album-image' src={Object.values(album.photos)[0].photoUrl} alt="" />
          </Link>
        </div>
      )
    });

    return (
      <div className="user-albums-index">
        <div className="album-outer-div">
          {userAlbums}
        </div>
      </div>
    )
  }
}

export default UserAlbums;