import { connect } from 'react-redux';
import UserAlbums from './user_albums';
import { fetchAlbums } from '../../actions/albums_actions';

const mapStateToProps = state => {
    let albums = Object.values(state.entities.albums);
    return ({
        albums: albums,
        currentUser: state.entities.users[state.session.currentUserId]
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchAlbums: () => dispatch(fetchAlbums()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums);