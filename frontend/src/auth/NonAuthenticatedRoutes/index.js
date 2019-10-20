import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// import About from 'pages/About';
// import Login from 'pages/Login';
// import AfterRegister from 'pages/Register/AfterRegister';
// import Register from 'pages/Register/Register';
// import RegisterConfirm from 'pages/Register/RegisterConfirm';

const NonAuthenticatedRoutes = ({ component, ...rest }) => (
    <Route
        {...rest}
        render={() =>
            true ? (
                <Redirect to="/main" />
            ) : (
                <div>non authenticated</div>
                // <Switch>
                //     <Route exact={true} path="/login" component={Login} />
                //     <Route path="/about" component={About} />
                //     <Route path="/register" component={Register} />
                //     <Route path="/after-register" component={AfterRegister} />
                //     <Route path="/registration-confirm/:token" component={RegisterConfirm} />
                //     <Redirect from="/*" to="/login" />
                // </Switch>
            )
        }
    />
);

export default NonAuthenticatedRoutes;
