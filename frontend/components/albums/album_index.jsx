import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        let albums = this.props.albums.map(album => {
            return (
                <AlbumIndexItem
                    key={album.id}
                    album={album}
                />
            )
        })

        if (this.props.albums === undefined) return null;

        return (
            <div>
                <div className="albums-index-container">
                    <div className="create-album-div">
                        <Link to="/albums/new"><i className="far fa-plus-square"></i> New album</Link>
                    </div>
                    <div className="album-outer-div">
                        {albums}
                    </div>
                </div>
            </div>
        )

    }
}

export default AlbumIndex;