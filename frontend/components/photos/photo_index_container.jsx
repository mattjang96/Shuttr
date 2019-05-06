import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos } from '../../actions/photos_actions';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = state => {
    let photos = Object.values(state.entities.photos);
    let users = state.entities.users;
    return ({
        photos: photos,
        users: users
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);