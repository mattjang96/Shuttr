import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
// import Splash from './session_form/splash.jsx';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
        <h1>Shuttr</h1>
        <GreetingContainer />
        </header>
    <Route exact path ="/" component={Splash} />
    <Switch>
        {/* <AuthRoute exact path="/" component={Splash} /> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/greeting" component={GreetingContainer} />
    </Switch>
    
    </div>
    
);

export default App;