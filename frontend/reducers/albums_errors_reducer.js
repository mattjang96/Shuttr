import {
    RECEIVE_ALBUM,
    RECEIVE_ALBUM_ERRORS,
} from '../actions/albums_actions';

const albumsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALBUM:
            return [];
        case RECEIVE_ALBUM_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
}

export default albumsErrorsReducer;