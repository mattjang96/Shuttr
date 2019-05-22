import {
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM,
} from '../actions/albums_actions';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      newState = Object.assign({}, oldState, action.album);
      return newState;
    case REMOVE_ALBUM:
      newState = Object.assign({}, oldState);
      delete newState[action.albumId];
      return newState;
    default:
      return oldState;
  }
}

export default albumsReducer;