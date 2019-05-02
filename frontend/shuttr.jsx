import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './util/session_api_util';
import { signup } from './util/user_api_util';
import { login } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: window.currentUser 
      },
      session: { currentUserId: Object.keys(window.currentUser)[0] }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.createAlbum = createAlbum;
  // window.updateAlbum = updateAlbum;
  // window.deleteAlbum = deleteAlbum;
  // window.fetchAlbums = fetchAlbums;
  // window.fetchAlbum = fetchAlbum;
  window.login = login;
  // window.createPhoto = createPhoto;
  // window.fetchPhoto = fetchPhoto;
  // window.fetchPhotos = fetchPhotos;
  // window.updatePhoto = updatePhoto;
  // window.deletePhoto = deletePhoto;
  
  ReactDOM.render(<Root store={store} />, root);
  
});











// import { login } from './actions/session_actions';
// import * as PhotoAPIUtil from './util/photos_api_util';
// import { createPhoto } from './actions/photos_actions';
// import { createPhoto,
// fetchPhoto,
// fetchPhotos,
// updatePhoto,
// deletePhoto } from './util/photos_api_util';
// import {
//   createPhoto,
//   fetchPhoto,
//   fetchPhotos,
//   updatePhoto,
//   deletePhoto
// } from './actions/photos_actions';
// import {
//   createAlbum,
//   deleteAlbum,
//   updateAlbum,
//   fetchAlbum,
//   fetchAlbums,
// } from './actions/albums_actions';















