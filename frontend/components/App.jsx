import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import CreatePhotoFormContainer from './photos/create_photo_form_container';
import EditPhotoFormContainer from './photos/edit_photo_form_container';
import AlbumIndexContainer from './albums/album_index_container';
import AlbumShowContainer from './albums/album_show_container';
import UserContainer from './user/user_container';
import UserPhotosContainer from './user/user_photos_container';
import UserAlbumsContainer from './user/user_albums_container';
// import Splash from './session_form/splash.jsx';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
        {/* <h1>Shuttr</h1> */}
        <GreetingContainer />
        </header>
    <Route path="/" component={NavBarContainer} />
    <Route exact path ="/" component={Splash} />
    <ProtectedRoute path="/users/:userId" component={UserContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/greeting" component={GreetingContainer} />
    <Switch>
        <ProtectedRoute path="/users/:userId/photos" component={UserPhotosContainer} />
        <ProtectedRoute path="/users/:userId/albums" component={UserAlbumsContainer} />
        {/* <AuthRoute exact path="/" component={Splash} /> */}
        <ProtectedRoute exact path="/photos/new" component={CreatePhotoFormContainer} />
        <ProtectedRoute exact path="/photos/:photoId/edit" component={EditPhotoFormContainer} />
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
        <Route exact path="/photos" component={PhotoIndexContainer} />
        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
        <Route exact path="/albums" component={AlbumIndexContainer} />
    </Switch>
    
    </div>
    
);

export default App;