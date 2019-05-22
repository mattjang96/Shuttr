import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums } from '../../actions/albums_actions';

const mapStateToProps = state => {
    let albums = Object.values(state.entities.albums)
    return ({
        albums: albums
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchAlbums: () => dispatch(fetchAlbums())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);