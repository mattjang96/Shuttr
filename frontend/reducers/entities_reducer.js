import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';
// import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer,
    // comments: commentsReducer
});

export default entitiesReducer;