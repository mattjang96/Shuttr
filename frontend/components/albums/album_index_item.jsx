import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = props => {
    return (
        <div className='albums-index-div'>
            <h1 className="album-index-title">{props.album.title}</h1>
            <Link to={`/albums/${props.album.id}`}>
                <img className='album-image' src={Object.values(props.album.photos)[0].photoUrl} alt="" />
            </Link>
        </div>
    )

}

export default AlbumIndexItem;