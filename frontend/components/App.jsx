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
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/greeting" component={GreetingContainer} />
    <Switch>
        {/* <AuthRoute exact path="/" component={Splash} /> */}
        <ProtectedRoute exact path="/photos/new" component={CreatePhotoFormContainer} />
        <ProtectedRoute exact path="/photos/:photoId/edit" component={EditPhotoFormContainer} />
        <Route exact path="/photos/:photoId" component={PhotoShowContainer} />
        <Route exact path="/photos" component={PhotoIndexContainer} />
    </Switch>
    
    </div>
    
);

export default App;