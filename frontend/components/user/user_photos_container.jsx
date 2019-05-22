import { connect } from 'react-redux';
import UserPhotos from './user_photos';
import { fetchPhotos } from '../../actions/photos_actions';

const mapStateToProps = state => {
    let photos = Object.values(state.entities.photos);
    return ({
        photos: photos,
        currentUser: state.entities.users[state.session.currentUserId]
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPhotos);