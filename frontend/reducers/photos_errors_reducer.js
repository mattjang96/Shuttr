import {
    RECEIVE_PHOTO,
    RECEIVE_PHOTO_ERRORS
} from '../actions/photos_actions';

const photosErrorsReducer = (oldstate = [], action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case RECEIVE_PHOTO:
            return [];
        case RECEIVE_PHOTO_ERRORS:
            if (action.errors === undefined) {
                return [];
            }
            return action.errors;
        default:
            return oldstate;
    }
}

export default photosErrorsReducer;