import { connect } from 'react-redux';
import { fetchAlbum, deleteAlbum } from '../../actions/albums_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, ownProps) => {
    return ({
        album: state.entities.albums[ownProps.match.params.albumId],
        albumId: ownProps.match.params.albumId,
        photos: Object.values(state.entities.photos),
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        deleteAlbum: (id) => dispatch(deleteAlbum(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);