import { connect } from 'react-redux';
import { createAlbum } from '../../actions/albums_actions';
import { fetchPhotos } from '../../actions/photos_actions';
import CreateAlbumForm from './create_album_form';

const mapStateToProps = state => {
    let photos = Object.values(state.entities.photos);
    const currentUserId = state.session.currentUserId;
    return ({
        photos: photos,
        currentUserId: currentUserId,
        errors: state.errors.albums
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        createAlbum: album => dispatch(createAlbum(album)),
        fetchPhotos: () => dispatch(fetchPhotos())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlbumForm);