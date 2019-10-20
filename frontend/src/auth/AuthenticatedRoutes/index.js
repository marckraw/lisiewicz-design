import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (true ? <Component {...props} /> : <Redirect to="/" />)} />
);

export default AuthenticatedRoutes;
