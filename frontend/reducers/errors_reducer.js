import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import photosErrorsReducer from './photos_errors_reducer';
// import albumsErrorsReducer from './albums_errors_reducer';
// import commentsErrorsReducer from './albums_errors_reducer';
// import tagsErrorsReducer from './tags_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    photos: photosErrorsReducer,
    // albums: albumsErrorsReducer,
    // comments: commentsErrorsReducer,
    // tags: tagsErrorsReducer,
});

export default errorsReducer;